const express       = require('express')
const userRouter    = require('./routers/user')
const enqRouter     = require('./routers/enquiry')
const app           = express()

require('./mongoose')
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(userRouter)
app.use(enqRouter)

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})
