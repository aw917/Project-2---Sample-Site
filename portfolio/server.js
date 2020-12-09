// for heroku
if(process.env.NODE_ENV === 'development'){
    require('dotenv').config()
}

// ==================
// Stack inputs
// ==================
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const MONGODB_URI = process.env.MONGODB_URI;
const Project = require('./models/projects.js');
const { update } = require('./models/projects.js');
const methodOverride = require('method-override');
const db = mongoose.connection;

// ==================
// Port
// ==================
const PORT = process.env.PORT || 3000; // for heroku

// ==================
// Database
// ==================
// Connect to Mongo
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
})
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
// open the connection to mongo
db.on('open' , ()=>{});


// ==================
// Middleware / view engines
// ==================
app.use(express.urlencoded({extended : true}))
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use((req, res, next) => {
    req.body.readyToEat = req.readyToEat === 'on' ? true : false;
    next();
})
app.use((req, res, next) => {
    // no {} need because it's just true
    if(req.query_method) console.log('change my method');
    next();
})
// set up
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


// ==================
// RESTful routes
// ==================
// Index ========
app.get('/portfolio', (req, res) => {
    // don't filter the information
    Project.find({}, (err, allProjects) => {
        if(!err) {
            res.render('Index', {
                projects : allProjects
            })
        } else {
            res.send(err)
        }
    })
})
// About ========
app.get('/portfolio/about', (req, res) => {
    res.render('About');
})

// New ========
app.get('/portfolio/new', (req, res) => {
    res.render('New');
})

// Delete ========
app.delete('/portfolio/:id', (req, res) => {
    Project.findByIdAndDelete(req.params.id, (err, _) => {
        if(!err) {
            res.redirect('/portfolio')
        } else {
            res.send(err)
        }
    })
})

// Update ========
app.put('/portfolio/:id', (req, res) => {
    Project.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedProject) => {
        if(!err) {
            res.redirect('/portfolio');
        } else {
            res.send(err);
        }
    })
})

// Create ========
app.post('/portfolio', (req, res) => {
    Project.create(req.body, (err, createdProject)=> {
        if (!err) {
            res.redirect('/portfolio')
        } else {
            res.send(err);
        }
    })
})

// Edit
app.get('/portfolio/:id/edit', (req, res) => {
    Project.findById(req.params.id, (err, foundProject) => {
        if(!err) {
            res.render('Edit', {
                projects: foundProject
            })
        } else {
            res.send(err)
        }
    })
})


// Show route ========
app.get('/portfolio/:id', (req, res) => {
    Project.findById(req.params.id, (err, foundProject) => {
        if(!err) {
            res.render('Show', {
                project: foundProject
            })
        } else {
            res.send(err)
        }
    })
})

// ==================
// Port
// ==================
app.listen(PORT, ()=>{
    console.log('listening');
});