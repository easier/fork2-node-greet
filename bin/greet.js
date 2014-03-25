#!/usr/bin/env node
//console.log("Hello,world")
var parseArgs = require('minimist')
var greet = require("greet")
var name = process.argv[2]
var argv = require('minimist')(process.argv.slice(2));
console.log(greet(name,argv.drunk));
