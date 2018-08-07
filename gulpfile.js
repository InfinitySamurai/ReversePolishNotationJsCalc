var gulp = require('gulp')
var tslint = require('gulp-tslint')

gulp.task('default', () => {
  console.log("Your only option right now is `gulp serve`");
})

gulp.task('tslint', () => {
  gulp.src('src/**/*')
    .pipe(tslint({
      formatter: "verbose"
    }))
    .pipe(tslint.report({
      allowWarnings: true
    }))
})

gulp.task('serve', function() {
  console.log("serving the application");
});
