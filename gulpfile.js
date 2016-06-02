"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var livereload = require('livereload');
var sass = require('gulp-sass');
var uncss = require('gulp-uncss');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
//var concatCss    = require('gulp-concat-css');

// connect
gulp.task('connect', function () {
    connect.server({
        livereload: true
    });
});

// html
gulp.task('html', function () {
    gulp.src('*.html')
        .pipe(connect.reload());
});

// js
gulp.task('js', function () {
    gulp.src('source/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./js'))
        .pipe(connect.reload());
});

// css
gulp.task('css', function () {
    gulp.src('source/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({browsers: ['last 15 versions']}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
});
/*
// uncss
gulp.task('uncss', function () {
    gulp.src('source/*.css')
        .pipe(uncss({
            html: ['*.html', 'games/*.html']
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('bootstrap/css/min/'))
        //.pipe(notify({message: 'Gulp complete ^_^'}))
        .pipe(connect.reload());
});
*/
/*
// images
gulp.task('images', function() {
return gulp.src('source/*.jpg, source/*.png')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('./images/'))
});
*/

/*
// notify
gulp.task('notify', function () {
    gulp.src("")
    .pipe(notify({message: 'Gulp complete ^_^'}));
});
*/

// watch
gulp.task('watch', function () {
    gulp.watch('source/**/*.scss', ['css'/*, 'uncss'*/]);
    gulp.watch('*.html', ['html'/*, 'uncss'*/]);
    gulp.watch('source/*.js', ['js']);
});

// default
gulp.task('default', ['connect', 'watch', 'html', 'css', 'js'/*, 'uncss'*/]);

// The End