const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')

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

function comprimejs() {
    return gulp.src('./src/script/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}


exports.default = gulp.parallel(compilaSass, comprimeimg, comprimejs)

exports.watch = function() {gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.parallel(compilaSass))
gulp.watch('./src/script/*.js', {ignoreInitial: false}, gulp.parallel(comprimejs))}