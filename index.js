(_ => {

  const express = require('express')
  const app = express()
  const cors = require('cors')

  const apiPort = process.env.APIPORT || 3389

  app.use(cors())
  app.use(express.json())
  
  const api = async (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(req.body))
  }

  app.post('/api/v1/endpoint', api)

  app.listen(apiPort, _ => console.log('Listening at port', apiPort))

})()
