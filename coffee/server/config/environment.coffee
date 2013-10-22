environment = "development"

module.exports = (pEnvironment)->
  amb =
    test:
      host: "localhost"
      database: "PowerfulTodoTest"

    development:
      host: "localhost"
      database: "PowerfulTodoDev"

    production:
      host: "localhost"
      database: "PowerfulTodo"

  environment = pEnvironment  if pEnvironment
  amb[environment]