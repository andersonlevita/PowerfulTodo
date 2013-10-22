module.exports = (app, express, dir) ->
  app.configure ->
    app.use express.methodOverride()
    app.use express.bodyParser()
    app.use express.cookieParser "CkKiiE3749S877ss0s75GDDwC&*¨%$"
    app.use express.session 
      secret: "C87*889fhgwli&%554$jsHH"
      key: "sid"
    
    app.use express.static "#{dir}/public"