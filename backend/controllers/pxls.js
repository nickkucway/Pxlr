/* 
-------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/api/comments`
------------------------------------------------------------- */


/* Require modules
---------------------------------------------------------- */
const express = require('express')
// Router allows us to handle routing outisde of server.js
const router = express.Router()


/* Require the db connection, and models
---------------------------------------------------------- */
const db = require('../models')


/* Routes
---------------------------------------------------------- */
// Index Route (GET/Read): Will display all pxls
router.get('/:gameId', function (req, res) {
    db.Comment.find({ gameId: req.params.gameId })
        .then(pxls => res.json(pxls))
})

// Create Route (POST/Create): This route receives a POST request and
// creates a new pxl document using the request body
router.post('/', (req, res) => {
    db.Pxl.create(req.body)
        .then(pxl => res.json(pxl))
})

// Update Route (PUT/Update): This route receives a PUT request and 
// edits the specified comment document using the request body
router.put('/:id', (req, res) => {
    db.Pxl.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        .then(pxl => res.json(pxl))
})

// Destroy Route (DELETE/Delete): This route deletes a comment document 
// using the URL parameter (which will always be the comment document's ID)
router.delete('/:id', (req, res) => {
    db.Pxl.findByIdAndDelete(req.params.id)
        .then(() => res.json({ deletedPxlId: req.params.id }))
})


/* Export these routes so that they are accessible in `server.js`
---------------------------------------------------------- */
module.exports = router
