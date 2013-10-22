requirejs.config
  paths:
    jquery: "../../libs/jquery/jquery.min"
    underscore: "../../libs/underscore/underscore-min"
    text: "../../libs/text/text"
    backbone: "../../libs/backbone/backbone"
    bootstrap: "../../libs/bootstrap/dist/js/bootstrap.min" 
    templates: "../templates"
  shim:
    underscore:
      exports: "_"
    backbone:     
      deps: ["jquery", "underscore"]      
      exports: "Backbone"
    bootstrap:
      deps: ["jquery"]