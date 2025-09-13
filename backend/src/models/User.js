const { model, Schema } = require('mongoose');
const { isEmail } = require('validator');
const { encryptPassword, checkPassword } = require('../bcrypt');
const { generateToken } = require('../jwt'); // ✅ fixed import

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: {
            validator: isEmail,
            message: 'Invalid email format'
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        validate: {
            validator: function (pass) {
                if (pass.includes(' ') || pass.includes('\t') || pass.includes('\n')) {
                    return false;
                }
                if (pass.toLowerCase().includes('password')) {
                    return false;
                }
                return true;
            },
            message: 'Password must not contain spaces, tabs, newlines, or the word "password"'
        }
    },
    type: {
        type: String,
        enum: ["STUDENT", "LIBRARIAN"],
        default: "STUDENT"
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
}, {
    timestamps: true
});

// ✅ Pre-save password hash
UserSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await encryptPassword(this.password);
    }
    next();
});

// ✅ Static method for login
UserSchema.statics.findEmailAndPasswordForAuth = async function (email, password) {
    try {
        const user = await this.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }

        const isMatch = await checkPassword(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid password');
        }

        return user;
    } catch (err) {
        throw err;
    }
};

// ✅ Instance method to generate JWT
UserSchema.methods.generateToken = async function () {
    const user = this;
    const token = generateToken(user);
    user.tokens = user.tokens || [];
    user.tokens.push({ token });
    await user.save(); // ✅ await it
    return token;
};

// ✅ Customize output by removing sensitive fields
UserSchema.methods.toJSON = function () {
    const userObject = this.toObject();

    delete userObject.password;
    delete userObject.tokens;

    return userObject;
};

const User = model('User', UserSchema);
module.exports = User;
