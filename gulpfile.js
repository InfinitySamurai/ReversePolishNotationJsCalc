var gulp = require('gulp')
var tslint = require('gulp-tslint')
var runSequence = require('run-sequence')
var typescript = require('gulp-typescript')
var nodemon = require('nodemon')
var watch = require('gulp-watch')
var mocha = require('gulp-mocha')
var clean = require('gulp-clean')

var tsProject = typescript.createProject('tsconfig.json')


gulp.task('default', () => {
  console.log('You have the following options:');
  console.log('gulp clean');
  console.log('gulp test');
  console.log('gulp build');
  console.log('gulp runServer');
  console.log('gulp serve (runs all of the above)');
})

gulp.task('tslint', () => {
  return gulp.src('src/**/*')
    .pipe(tslint({
      formatter: "verbose"
    }))
    .pipe(tslint.report({
      allowWarnings: true
    }))
})

gulp.task('clean', () => {
  return gulp.src('build/*.js')
    .pipe(clean());
})

gulp.task('test', () => {
  return gulp.src('test/**/*.spec.ts')
    .pipe(mocha({compilers: 'ts:ts-node/register'}))
    .once('error', err => {
      console.error(err);
      process.exit(1);
    })
})

gulp.task('build', () => {
  return gulp.src(["src/**/*.ts"])
    .pipe(tsProject())
    .pipe(gulp.dest('build/'))
})

gulp.task('runServer', () => {
  nodemon ({
    script: "build/server.js",
    env: { "NODE_ENV": "development"}
  })
    .on("restart", () => {
      console.log("restarted")
    })
})

gulp.task('serve', function(cb) {
  runSequence(['tslint', 'test', 'clean'], 'build', 'runServer', cb)
});
