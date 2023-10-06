const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

const compilaSass = () => {
    gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(gulp.dest('./dist/src/styles'))
}

exports.default = compilaSass;

exports.watch = function() {gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.parallel(compilaSass))}