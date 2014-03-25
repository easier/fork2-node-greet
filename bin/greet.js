#!/usr/bin/env node
//console.log("Hello,world")
var greet = require("../index.js")
var name = process.argv[2]
console.log(greet(name));
