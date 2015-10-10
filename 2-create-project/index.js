var fs = require('fs')
var verify = require('adventure-verify')
var path = require('path')

exports.problem = fs.readFileSync(__dirname + '/problem.txt', 'utf-8')
exports.solution = fs.readFileSync(__dirname + '/solution.txt', 'utf-8')

exports.verify = verify({modeReset: true}, function (args, t) {
  var res = require(path.resolve(args[0]))
  t.equals(res.name, 'ngnode-app', 'Your package.json name should be ngnode-app')
  t.end()
})

exports.run = function (args) {
  var res = require(path.resolve(args[0]))
  console.log(res.name)
}