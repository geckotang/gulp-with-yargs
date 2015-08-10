'use strict';
var gulp = require('gulp');
var args = require('yargs').argv;
var config = {
  pc: 'こんにちはPCです'
}
gulp.task('deploy', function(cb) {
  if (args.pc) {
    console.log(config.pc);
  }
});

