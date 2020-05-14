const express       = require('express')
const passport      = require('passport')
const LocalStrategy = require('passport-local')
const passportLocalMongoose = require('passport-local-mongoose')

const userRouter    = require('./routers/user')
const enqRouter     = require('./routers/enquiry')

const User          = require('./models/user')
const Enquiry       = require('./models/enquiry')

const app           = express()

require('./mongoose')
const port = process.env.PORT || 3000

app.use(require('express-session')({
    secret: 'This is an enquiry management app',
    resave: false,
    saveUninitialized: false
}))

app.set('view engine', 'ejs')
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(userRouter)
app.use(enqRouter)

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})
