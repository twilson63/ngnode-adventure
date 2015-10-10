var fs = require('fs')
var verify = require('adventure-verify')
var path = require('path')
var spawn = require('child_process').spawn
var concat = require('concat-stream')

exports.problem = fs.readFileSync(__dirname + '/problem.txt', 'utf-8')
exports.solution = fs.readFileSync(__dirname + '/solution.txt', 'utf-8')

exports.verify = verify({modeReset: true}, function (args, t) {
  var ps = spawn(process.execPath, args)
  ps.stderr.pipe(process.stderr)
  ps.stdout.pipe(process.stdout)
  ps.once('exit', function (code) {
    setTimeout(function () { process.exit(0) }, 1000)
  })
  setTimeout(function () {
    var request = require('request')
    request.get('http://127.0.0.1:1337', function (e, r, b) {
      t.ok(/<h1>Hello World<\/h1>/.test(b))
      t.end()
      ps.kill('SIGHUP')

    })  
  },1000)
})

exports.run = function (args) {
  var ps = spawn(process.execPath, args)
  ps.stderr.pipe(process.stderr)
  ps.stdout.pipe(process.stdout)
  ps.once('exit', function (code) {
    setTimeout(function () { process.exit(0) }, 1000)
  })
  setTimeout(function () {
    var request = require('request')
    request.get('http://127.0.0.1:1337', function (e, r, b) {
      console.log(b)
      ps.kill('SIGHUP')

    })
  }, 1000)
}