require('dotenv').config() 
const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const session = require('express-session')
const passport = require('./config/ppConfig')
const flash = require('connect-flash')
const isLoggedIn = require('./middleware/isLoggedIn')


// views (ejs and layouts) set up
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// body parser middelware
app.use(express.urlencoded({extended:false}))
app.use('/static', express.static('public'))

// session middleware
app.use(session({
    secret: process.env.SUPER_SECRET_SOMETHING,
    resave: false,
    saveUninitialized: true
}))

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

// flash middleware (must go AFTER session middleware)
app.use(flash())

// custom middleware
app.use((req, res, next) => {
    // before every route, attach the flash messages and current user to res.locals
    res.locals.alerts = req.flash();
    res.locals.currentUser = req.user;
    next()
})

// controllers middleware 
app.use('/auth', require('./controllers/auth'))


// home route
app.get('/', (req, res)=>{
    res.render('home', {randomText: 'This is random text'})
})
app.use("/music", require("./controllers/musicRoutes"))




app.listen(3000, ()=>{
    console.log(`process.env.SUPER_SECRET_SOMETHING ${process.env.SUPER_SECRET_SOMETHING}`)
    console.log("auth_practice running on port 3000")

}) 

