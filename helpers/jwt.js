const jwt = require('jsonwebtoken')

function sign (payload) {
  return jwt.sign(payload, "somuchsecret")
}

function verify (token) {
  return jwt.verify(token, "somuchsecret")
}

module.exports = {
    sign, verify
}