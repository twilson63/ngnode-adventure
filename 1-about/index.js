var fs = require('fs')
var verify = require('adventure-verify')

exports.problem = fs.readFileSync(__dirname + '/problem.txt', 'utf-8')
exports.solution = fs.readFileSync(__dirname + '/solution.txt', 'utf-8')

exports.verify = verify({modeReset: true}, function (args, t) {
  //t.plan(3);
  t.equal(args.length, 1, 'ngnode-adventure verify GO');
  t.equal(args[0], 'GO')

  t.end()
})

exports.run = function (args) {
  console.log(args[0])
}