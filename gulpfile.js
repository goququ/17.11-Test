'use strict';

var gulp         = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    less         = require('gulp-less'),
    path         = require('path'),
    watch        = require('gulp-watch'),
    browserSync  = require('browser-sync'),
    reload       = browserSync.reload,
    rigger       = require('gulp-rigger');


gulp.task('html', function () {
	return gulp.src('src/html/*.html')
	    .pipe(rigger())
		.pipe(gulp.dest('dist'))
		.pipe(reload({stream: true}));
});

gulp.task('styles', function () {
	return gulp.src(['src/styles/style.less', 'node_modules/normalize.css/normalize.css'])
	    .pipe(rigger())
	    .pipe(less({
          paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
		.pipe(gulp.dest('dist/css'))
		.pipe(reload({stream: true}));
});


gulp.task('js', function () {
	return gulp.src('src/js/*.js')
		.pipe(gulp.dest('dist/js'))
		.pipe(reload({stream: true}));
});


gulp.task('img', function () {
	return gulp.src(['src/img/files/*', 'src/img/i/*'], { base: 'src/img' })
		.pipe(gulp.dest('dist/img'))
		.pipe(reload({stream: true}));
});


gulp.task('watch', function(){

    watch( ['src/styles/*/*'], function(event, cb) {
        gulp.start('styles');
    }).on('change', browserSync.reload);
    
    watch(['src/html/*/*.html', 'src/html/*.html'], function(event, cb) {
        gulp.start('html');
    });
    watch(['src/js/*.js'], function(event, cb) {
        gulp.start('js');
    });
});

//Server
var config = {
    server: {
        baseDir: "dist"
    },
    tunnel: true,
    host: 'localhost',
    port: 8080,
    logPrefix: 'qu'
};

gulp.task('server', function () {
    browserSync(config);
});

gulp.task('default', ['html', 'styles', 'img', 'js', 'server', 'watch']);