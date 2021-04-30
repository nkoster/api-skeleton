(_ => {

  const express = require('express')
  const app = express()
  const cors = require('cors')

  const apiPort = process.env.APIPORT || 3389

  app.use(cors())
  app.use(express.json())
  
  const api = async (req, res) => {
    console.log(req.body)
    res.setHeader('Content-Type', 'application/json')
    res.send(req.body)
  }

  app.post('/api/v1/endpoint', api)

  app.listen(apiPort, _ => console.log('Listening at port', apiPort))

})()
