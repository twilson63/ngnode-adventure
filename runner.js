#!/usr/bin/env node

var adventure = require('adventure');
var shop = adventure('ngnode-adventure');

shop.add('About ng nodejs', function () { return require('./1-about') });
shop.add('create a project', function () { return require('./2-create-project') });
shop.add('setup static server', function () {return require('./3-setup-server')})
shop.add('add angularjs', function () {return require('./4-add-angular')})
shop.add('add router', function () {return require('./5-add-router')})


shop.execute(process.argv.slice(2));