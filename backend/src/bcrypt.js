const bcrpyt = require('bcrypt');

const encryptPassword = async (plainTextPassword) => {
    try{
      return await bcrpyt.hash(plainTextPassword, 8);

    }catch(err){
       throw err;
    }
}

const checkPassword = async (plainTextPassword, encryptedPassword) => {
    try{
        return await bcrpyt.compare(plainTextPassword, encryptedPassword);
    }catch(err){
        console.log(err);
    }
}

module.exports = { encryptPassword, checkPassword };