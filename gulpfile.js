var gulp = require('gulp')
var tslint = require('gulp-tslint')
var runSequence = require('run-sequence')
var typescript = require('gulp-tsc')

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

gulp.task('build', () => {
  return gulp.src(["src/**/*.ts"])
    .pipe(typescript())
    .pipe(gulp.dest('build/'))
})

gulp.task('runServer', () => {
  return console.log("not implemented yet")
})

gulp.task('serve', function(cb) {
  runSequence('tslint', 'build', 'runServer', cb)
});
