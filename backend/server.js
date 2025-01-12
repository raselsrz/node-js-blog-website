require('dotenv').config();
const express = require('express');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');
const { connectDB } = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/posts', postRoutes);

// Error handling
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message });
});

// Database Connection
connectDB();

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
