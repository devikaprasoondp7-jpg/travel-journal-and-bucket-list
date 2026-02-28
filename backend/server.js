const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// 1. Database Connection (Replace with your MongoDB URI)
mongoose.connect('mongodb://localhost:27017/pinkTravelMap', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// 2. User Schema (Username, Hashed Password, and Map Data)
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // This will store {"FRA": {"status": "visited", "rating": "love"}}
    countryData: { type: Object, default: {} } 
});

const User = mongoose.model('User', UserSchema);

// 3. API - Register
app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json({ message: "User created" });
    } catch (error) {
        res.status(400).json({ error: "Username already exists" });
    }
});

// 4. API - Login
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    // Send back username and their saved map data
    res.json({ message: "Logged in", username: user.username, countryData: user.countryData });
});

// 5. API - Save Map Data
app.post('/api/save-map', async (req, res) => {
    const { username, countryData } = req.body;
    
    try {
        await User.findOneAndUpdate({ username }, { countryData });
        res.json({ message: "Map data saved" });
    } catch (error) {
        res.status(500).json({ error: "Failed to save map data" });
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));