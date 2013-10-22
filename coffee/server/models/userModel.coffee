User = (()->
  mongoose = require "mongoose"
  Schema = mongoose.Schema
  _ = require "underscore"

  setPassword = (value) ->
    return null  unless value
    pwd = value # Implements hash
    pwd

  userSchema = new Schema
    name:
      type: String
      required: true
    email:
      type: String
      required: true
      unique: true
      index:
        unique: true
        sparse: true
    password:
      type: String
      required: true
      set: setPassword
    contacts: String
    date:
      type: Date
      default: Date.now
  
  userSchema.static findByEmail: (email, success, error) ->
    @findOne email: email, (e, o) ->
      if e
        error e if error
      else if success
        success o

  Model = mongoose.model "User", userSchema
  Model
)()

module.exports = User