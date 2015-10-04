express = require 'express'

app = express()

handler = (req, res) ->
  hostname = req.hostname.split('.').slice(0, -2).join('.')
  url = "http://#{hostname}#{req.originalUrl}"
  console.log "handling request for #{url}"
  # res.send url
  require('./client').fetch url, (err, data) ->
    if err
      res.send err
    else
      res.send data

app.get '*', handler

app.listen 3000, -> console.log 'listening on 3000'
