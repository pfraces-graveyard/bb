var gulp = require('gulp');
var eslint = require('gulp-eslint');
var del = require('del');

gulp.task('clean', function () {
  return del(['tmp', 'dist']);
});

gulp.task('clean-vendor', function () {
  return del(['vendor']);
});

gulp.task('lint', ['clean'], function () {
  var sources = [
    'src/**/*.js',
    'test/**/*.js'
  ];

  return gulp.src(sources)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('test', ['lint']);

gulp.task('vendor', ['clean-vendor'], function () {
  return gulp.src(require('./dependencies.json'))
    .pipe(gulp.dest('vendor'));
});
