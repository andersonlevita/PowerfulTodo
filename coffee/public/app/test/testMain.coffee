tests = []
for file of window.__karma__.files
  tests.push file if /app\/test\/.*test\.js$/.test(file) if window.__karma__.files.hasOwnProperty(file)

requirejs ["base/app/js/config"], ->
  requirejs.config
    baseUrl: "/base/app/js"
    paths:
      chai: "../../libs/chai/chai"
    deps: tests  
    callback: window.__karma__.start
