require('./server') (app) ->  
  mongoose = require 'mongoose'
  environment = require('./server/config/environment')()

  mongoose.connect environment.host, environment.database

  # app.get '/', (req, res) ->
  #   res.redirect '/index.html'

  app.listen 3000
  console.log "Server running at http://127.0.0.1:3000/"