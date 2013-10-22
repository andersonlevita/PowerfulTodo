define (require, exports, module) ->
  "use strict"

  Backbone = require "backbone"

  class Router extends Backbone.Router
    routes:
      "": "index"

    index: ->
      Backbone.Events.trigger "view:index"

  module.exports = Router