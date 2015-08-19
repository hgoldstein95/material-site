var gulp = require('gulp');

var jade = require('gulp-jade');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('jade', function() {
  gulp.src('index.jade')
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest('.'))
    .pipe(browserSync.stream());
});

gulp.task('start-browser', function() {
  browserSync.init({
    server: {
      baseDir: '.'
    },
    notify: false
  });
});

gulp.task('reload', function() {
   browserSync.reload();
});

gulp.task('watch', function() {
  gulp.watch('index.jade', ['jade']);
  gulp.watch(['style.css', 'script.js'], ['reload']);
});

gulp.task('default', ['jade', 'start-browser', 'watch']);
