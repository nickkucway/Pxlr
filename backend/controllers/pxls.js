/* Require modules
--------------------------------------------------------------- */
const jwt = require('jwt-simple');
const express = require('express')
// Router allows us to handle routing outisde of server.js
const router = express.Router()


/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')


/* Require the JWT config
--------------------------------------------------------------- */
const config = require('../../jwt.config.js')


/* Middleware that checks if a JWT sent from the client is valid.
   Used for all routes that require authorization
--------------------------------------------------------------- */
const authMiddleware = (req, res, next) => {
    // Check if the 'Authorization' header is present and has the token
    const token = req.headers.authorization;
    if (token) {
        try {
            // Decode the token using the secret key and add the decoded payload to the request object
            const decodedToken = jwt.decode(token, config.jwtSecret);
            req.user = decodedToken;
            next();
        } catch (err) {
            // Return an error if the token is invalid
            res.status(401).json({ message: 'Invalid token' });
        }
    } else {
        // Return an error if the 'Authorization' header is missing or has the wrong format
        res.status(401).json({ message: 'Missing or invalid Authorization header' });
    }
};


/* Routes
---------------------------------------------------------- */
// Index Route (GET/Read): Will display all pxls for specific game
router.get('/:gameId', function (req, res) {
    db.Pxl.find({ gameId: req.params.gameId })
        .then(pxls => res.json(pxls))
})

// Index Route (GET/Read): Will display all pxls
router.get('/', function (req, res) {
    db.Pxl.find({ })
        .then(pxls => res.json(pxls))
})

// Create Route (POST/Create): This route receives a POST request and
// creates a new pxl document using the request body
router.post('/', authMiddleware, (req, res) => {
    // Perform any actions that require authorization
    db.Pxl.create({
        ...req.body,
        // The auth middleware validated the JWT token 
        // and added the decoded payload to the req.user object
        userId: req.user.id
    })
        .then(pxl => res.json(pxl))
})

// Update Route (PUT/Update): This route receives a PUT request and 
// edits the specified pxl document using the request body
router.put('/:id', authMiddleware, async (req, res) => {
    // Check if the user who sent the update request is the same user who created the pxl
    const userPxl = await db.Pxl.findById(req.params.id)
    if (userPxl.userId == req.user.id) {
        // If it is the original author, update the comment
        const newPxl = await db.Pxl.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.json(newPxl)
    } else {
        res.status(401).json({ message: 'Invalid user or token' });
    }
})

// Destroy Route (DELETE/Delete): This route deletes a pxl document 
// using the URL parameter (which will always be the pxl document's ID)
router.delete('/:id', authMiddleware, async (req, res) => {
    // Check if the user who sent the delete request is the same user who created the pxl
    const userPxl = await db.Pxl.findById(req.params.id)
    if (userPxl.userId == req.user.id) {
        const deletedPxl = await db.Pxl.findByIdAndDelete(req.params.id)
        res.send('You deleted pxl ' + deletedPxl._id)
    } else {
        res.status(401).json({ message: 'Invalid user or token' });
    }
})


/* Export these routes so that they are accessible in `server.js`
---------------------------------------------------------- */
module.exports = router
