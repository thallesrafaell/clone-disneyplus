const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')

const compilaSass = () => {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(gulp.dest('./dist/styles'))
    
}

function comprimeimg() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}


exports.default = compilaSass, com;
exports.img = comprimeimg
exports.watch = function() {gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.parallel(compilaSass))}