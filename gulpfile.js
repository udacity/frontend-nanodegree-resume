var gulp = require('gulp'),
	webserver = require('gulp-webserver'),
	htmlValidate = require('gulp-w3cjs'),
	cssValidate = require('gulp-css-validator'),
	jshint = require('gulp-jshint'),
	jsstylish = require('jshint-stylish'),
	through2 = require('through2'), // required by the code supplied by w3cjs
	imageResize = require('gulp-image-resize'),
	rename = require('gulp-rename'),
	changed = require('gulp-changed'),
	beep = require('beepbeep'), //provide audio feedback on errors
	chalk = require('chalk'); //color console log output

// TODO: add build task (minification, concatenation, etc.)


// Set your paths here
var paths = {
	scripts: ['js/resumeBuilder.js'],
	styles: ['css/*.css'],
	images: ['images/*'],
	content: ['index.html']
}

var dist = {
	scripts: ['dist/js/'],
	styles: ['dist/css/'],
	images: ['dist/images'],
	content: ['dist/']
}


// Our live reload webserver

gulp.task('webserver', function(){
	gulp.src('')
		.pipe(webserver({
			livereload: true,
			open: true,
		}));
});


// Validators

gulp.task('validateHtml', function(){
	gulp.src(paths.content)
		.pipe(htmlValidate())
		// code from w3cjs documentation - except if contents
		.pipe(through2.obj(function(file, enc, cb){
			cb(null, file);
			if (!file.w3cjs.success){
			    beep();
				console.log(chalk.bgRed.bold('HTML validation error(s) found'));
			}
		}));
});

gulp.task('validateCss', function(){
	gulp.src(paths.styles)
		.pipe(cssValidate())
		.on('error', function(err){
			beep();
			console.log(chalk.bgRed.bold('CSS validation error(s) found'));
		});
});

gulp.task('jshint', function(){
	gulp.src(paths.scripts)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(through2.obj(function(file, enc, cb){
			cb(null, file);
			if (!file.jshint.success){
			    beep();
				console.log(chalk.bgRed.bold('Javascript validation error(s) found'));
			}
		}));
});


// Images

gulp.task('resizeImages', function(){
	gulp.src(paths.images)
		.pipe(changed('src/images/'))
		.pipe(imageResize({
			width : 1920,
			height : 0,
			crop : true,
			imageMagick : true
		}))
		// TODO: add gulp-imagemin?
		.pipe(rename(function(path){
			path.basename += '@2x';
		}))
		.pipe(gulp.dest('src/images/'))
		.pipe(imageResize({
			width : 100,
			height : 0,
			crop : true,
			imageMagick : true
		}))
		.pipe(rename(function(path){
			path.basename += '@1x';
		}))
		.pipe(gulp.dest('src/images/'));
});

// Thought it may be helpful to have the imageResize options here(Values listed are default):

// width : 0, //Pixel or % value
// height : 0,
// crop : false, // crop image to exactly match width and height
// upscale : false, // If false image is copied instead of resized if it would be upscaled
// gravity : Center, // only has effect if crop is true
// quality : 1, // Range from 0(bad) to 1(lossless) - Only affects JPG
// //format : jpeg, // Defaults to input
// filter : Catrom, // Catrom good for reduction, Hermite for enlarge
// imageMagick : false // Set to true when using ImageMagick


// Watch function to tie it all together

gulp.task('watch', function(){
	gulp.watch(paths.content, ['validateHtml']);
	gulp.watch(paths.styles, ['validateCss']);
	gulp.watch(paths.scripts, ['jshint']);
	gulp.watch(paths.images, ['resizeImages']);
});

gulp.task('default', ['webserver', 'watch']);