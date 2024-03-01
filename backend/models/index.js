// Require the Mongoose package & your environment configuration
require('dotenv').config()
const mongoose = require('mongoose');
const axios = require('axios')


// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODBURI);
const db = mongoose.connection

db.on('connected', function () {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});

// Export models and seed data to `server.js`
module.exports = {
    Pxl: require('./pxl'),
    User: require('./user'),
    getResults: async function (query) {
        const games = await axios.get(`https://www.giantbomb.com/api/games/?api_key=${process.env.VITE_API_KEY}&format=json&filter=name:${query}&limit=50`)
        return games
    },
    getDetails: async function (gameId) {
        const game = await axios.get(`https://www.giantbomb.com/api/game/${gameId}/?api_key=${process.env.VITE_API_KEY}&format=json`)
        return game
    }
}