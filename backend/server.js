/* Require modules
---------------------------------------------------------- */
require('dotenv').config()
const express = require('express');
const cors = require('cors')
const path = require('path')


/* Require the db connection, models, and seed data
---------------------------------------------------------- */
const db = require('./models');


/* Require the routes in the controllers folder
--------------------------------------------------------------- */
const pxlsCtrl = require('./controllers/pxls.js')
const usersCtrl = require('./controllers/users')



/* Create the Express app
---------------------------------------------------------- */
const app = express();


/* Middleware (app.use)
---------------------------------------------------------- */
// cross origin allowance
app.use(cors())
// body parser - used for POST/PUT/PATCH routes:
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// use the React build folder for static files
app.use(express.static(path.join(path.dirname(__dirname), 'frontend', 'dist')))


/* Mount routes
---------------------------------------------------------- */
// This tells our app to look at the `controllers/pxlrs.js` file 
// to handle all routes that begin with `localhost:3000/api/pxlrs`
app.use('/api/pxls', pxlsCtrl)

// This tells our app to look at the `controllers/users.js` file 
// to handle all routes that begin with `localhost:3000/api/users`
app.use('/api/users', usersCtrl)

// set api results for CORS
app.get('/api/search/:query', (req, res) =>{
    db.getResults(req.params.query)
        .then(data => {
            res.json(data.data)
        })
})

app.get('/api/:id', (req, res) =>{
    db.getDetails(req.params.id)
        .then(data => {
            res.json(data.data)
        })
})

// Any other route not matching the routes above gets routed by React
app.get('*', (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), 'frontend', 'dist', 'index.html'));
});


/* Tell the app to listen on the specified port
---------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});
