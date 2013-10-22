define (require, exports, module)->
  "use strict"
  
  should = require("chai").should()
  Backbone = require "backbone"
  app = require "app"
  Router = require "router"

  describe "App and router", ->
    describe "are loaded", ->
      it "App loaded", ->
        should.exist app
        app.should.be.an 'object'

      it "Router loaded", ->
        should.exist Router
        app.should.be.an 'object'
