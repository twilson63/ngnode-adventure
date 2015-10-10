var fs = require('fs')
var verify = require('adventure-verify')
var path = require('path')
var spawn = require('child_process').spawn
var concat = require('concat-stream')

exports.problem = fs.readFileSync(__dirname + '/problem.txt', 'utf-8')
exports.solution = fs.readFileSync(__dirname + '/solution.txt', 'utf-8')

exports.verify = verify({modeReset: true}, function (args, t) {
  // write a test for the component/home controller
  var home = require(path.resolve('./components/home'))
  t.equals(home.url, '/')
  t.equal(home.template, '<h1>{{title}}</h1>', 'Template should equal <h1>{{title}}</h1>')
  
  var scope = {}
  home.controller(scope)
  t.equal(scope.title, 'Hello World 2', 'Controller Scope Title equals Hello World 2')
  // write a test for browser.js

  t.end()
})

exports.run = function (args) {
  // write a test for the component/home controller
  // write a test for browser.js
  console.log('run ngnode-adventure verify')
}