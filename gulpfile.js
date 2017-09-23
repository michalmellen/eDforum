
// required //

var gulp = require('gulp');
var eslint = require('gulp-eslint'); // kontrola .js //
var useref = require('gulp-useref'); // Useref plugin zbali .css a .js do jedneho suboru [pouziva sa cez koment v html build:css css/subor.css // endbuild //
var minify = require('gulp-minify-css');
	uglify = require('gulp-uglify'); // minifikuje .js 
	rename = require('gulp-rename'); // doplni k minifikovanynm suborom napr .min.css 
var gulpif = require('gulp-if');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');

//required end//



////////////////////////// tasks //////////////////////////

// Production build //
gulp.task('scripts', function() {
 gulp.src(['./js/**/*.js', '!./js/**/*min.js'])
 	.pipe(rename({suffix:'.min'}))
 	.pipe(uglify())
 	.pipe(gulp.dest('dist/js'));
});


// watch tasks //
gulp.task('watch', function() {
	gulp.watch('./js/**/*.js', ['scripts']);
});



// default task //
gulp.task('default', ['scripts', 'watch']);

////////////////////////// tasks //////////////////////////






gulp.task('fonts', function() {
  return gulp.src('./css/fonts/*')
    .pipe(gulp.dest('dist/fonts'));
 });