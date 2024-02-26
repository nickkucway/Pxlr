// Require the Mongoose package
const mongoose = require('mongoose');

// Create a schema to define the properties of the pxl collection
const pxlSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        content: { type: String, required: true },
        gameId: { type: Number, required: true }
    },
    { timestamps: true }
);

// Export the schema as a Monogoose model. 
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model('Pxl', pxlSchema);