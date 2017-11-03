const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const merge = require('merge-stream');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('compile', function () {
  const tsResult = tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(tsProject());
  return tsResult.js
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src'));
});

gulp.task('watch', function () {
  gulp.watch(tsProject.src(), ['compile']);
});

gulp.task('default', ['compile', 'watch']);
