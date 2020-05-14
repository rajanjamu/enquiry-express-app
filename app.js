const express       = require('express')
      bodyParser    = require('body-parser')
      userRouter    = require('./routers/user')
      enqRouter     = require('./routers/enquiry')
      app           = express()

const port = process.env.PORT || 3000

app.use(userRouter)
app.use(enqRouter)

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})
