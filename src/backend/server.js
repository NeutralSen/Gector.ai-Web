const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const dbConnect = require('./database');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
console.log(process.env.MONGO_URI); // Should print the MongoDB URI

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection (via dbConnect)
dbConnect()
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error(err));

// Routes
app.use('/api/auth', authRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
