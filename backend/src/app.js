require('./appMongoose');
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user-route');
const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);

// Root route
app.get('/', (req, res) => {
    res.json({ message: 'Library API is running!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
