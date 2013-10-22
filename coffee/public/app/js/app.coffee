define (require, exports, module) ->
  "use strict"
  
  _ = require "underscore"
  $ = require "jquery"
  Backbone = require "backbone"

  app = {}
  app.views = {}
  app.root = "/"
  
  app.createMainView = -> createView "index", require "views/index"

  Backbone.Events.on "view:index", -> app.createMainView()

  createView = (name, View, options) ->
    options || options = {}
    _.extend options, {app: app}
    view = app.views[name]
    if view?
      view.undelegateEvents()
      view.clean() if typeof view.clean is "function"
    view = new View options
    app.views[name] = view

  module.exports = app
