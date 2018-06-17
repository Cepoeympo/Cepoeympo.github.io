"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var livereload = require('livereload');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var rename = require("gulp-rename");

//var uncss = require('gulp-uncss');
//var notify = require('gulp-notify');
//var concatCss = require('gulp-concat-css');

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
// all js min experiment !!
gulp.task('jsmin', function() {
	return gulp.src('js/.js')
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('js/min'))
		.pipe(connect.reload());
});

// all css min experiment !!
gulp.task('cssmin', function () {
	return gulp.src('css/*.css')
		.pipe(concatCss("all.min.css"))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('css/min'));
});

// uncss
gulp.task('uncss', function () {
    gulp.src('source/*.css')
        .pipe(uncss({
            html: ['*.html', 'games/*.html']
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./css/min/'))
        //.pipe(notify({message: 'Gulp complete ^_^'}))
        .pipe(connect.reload());
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