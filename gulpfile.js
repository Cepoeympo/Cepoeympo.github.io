"use strict";

var gulp        = require('gulp');
var cleanCSS	= require('gulp-clean-css');
var connect 	= require('gulp-connect');
var livereload  = require('livereload');
var sass 		= require('gulp-sass');
var uncss       = require('gulp-uncss');
var autoprefixer = require('gulp-autoprefixer');
//var rename      = require("gulp-rename");
//var concatCss    = require('gulp-concat-css');

// connect
gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

// html
gulp.task('html', function(){
     gulp.src('*.html')
		  .pipe(connect.reload());
});

// js
gulp.task('js', function(){
    gulp.src('js/*.js')
        .pipe(connect.reload());
});

// css
gulp.task('css', function(){
     gulp.src('first.scss')
		  .pipe(sass())
          .pipe(autoprefixer({browsers: ['last 15 versions']}))
		  .pipe(cleanCSS({compatibility: 'ie8'}))
          .pipe(gulp.dest(''))
		  .pipe(connect.reload());
});

// uncss
gulp.task('uncss', function () {
    return gulp.src('bootstrap/css/*.css')
        .pipe(uncss({
            html: ['*.html', 'games/*.html']
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('bootstrap/css/min/'))
        .pipe(connect.reload());
});

// watch
gulp.task('watch', function(){
	gulp.watch('*.scss', ['css', 'uncss']);
	gulp.watch('*.html', ['html']);
    gulp.watch('js/*.js', ['js']);
});

// default
gulp.task('default', ['connect', 'watch', 'html', 'css', 'js', 'uncss']);

// The End