var gulp = require('gulp')
var tslint = require('gulp-tslint')
var runSequence = require('run-sequence')
var typescript = require('gulp-typescript')
var nodemon = require('nodemon')
var watch = require('gulp-watch')
var mocha = require('gulp-mocha')

var tsProject = typescript.createProject('tsconfig.json')


gulp.task('default', () => {
  console.log("Your only option right now is `gulp serve`");
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
  runSequence(['tslint', 'test'], 'build', 'runServer', cb)
});
