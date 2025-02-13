const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate')
const imagemin = require('gulp-imagemin')

function compilaSass() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'));
}

function comprimeImagem() {
    return gulp.src('./src/images/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function compressJavaScript() {
    gulp.src('./src/scripts/*js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}

exports.default = function() {
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false} , gulp.series(compilaSass))
    gulp.watch('./src/images/*', {ignoreInitial: false} , gulp.series(comprimeImagem))
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false} , gulp.series(compressJavaScript))
}


