'use strict';
var gulp = require('gulp');
var args = require('yargs').argv;
var config = {
  pc: 'こんにちはPCです',
  sp: 'こんにちはSPです'
};
gulp.task('deploy', function(cb) {
  console.log(config[args.pc ? "pc" : "sp"]);
});

