define (require, exports, module) ->
  "use strict"
  
  _ = require "underscore"
  $ = require "jquery"
  Backbone = require "backbone"
  layoutTemplate = require "text!templates/layout.html"
  require "bootstrap"

  class MainView extends Backbone.View
    el: "#main"

    initialize: ->
      @render()
      
    render: ->
      @$el.html layoutTemplate
  
  module.exports = MainView
