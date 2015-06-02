var gulp        = require('gulp');
var handlebars  = require('gulp-handlebars');
var wrap        = require('gulp-wrap');
var declare     = require('gulp-declare');
var concat      = require('gulp-concat');
var sass        = require('gulp-sass');
var bower       = require('main-bower-files');
var notify      = require('gulp-notify');
var plumber     = require('gulp-plumber');
var jshint      = require('gulp-jshint');
var htmlhint    = require('gulp-htmlhint');


var notifyError = function() {
  return plumber({
    errorHandler: notify.onError('Error: <%= error.message %>')
  });
}


//================================================
//  WATCH
//================================================

gulp.task('watch', function() {
  gulp.watch('./templates/*.hbs', ['handlebars']);
  gulp.watch('./sass/*.scss',     ['sass']);
  gulp.watch('./bower.json',      ['bower']);
  gulp.watch('./index.html',      ['hint:html']);
  gulp.watch('./js/*.js',         ['hint:js']);
});


//================================================
//  HINT
//================================================

gulp.task('hint:js', function() {
  return gulp.src(['./js/*.js', '!./js/templates.js'])
    .pipe(notifyError())
    .pipe(jshint())
    .pipe(jshint.reporter('fail'));
});

gulp.task('hint:html', function() {
  return gulp.src('index.html')
    .pipe(notifyError())
    .pipe(htmlhint())
    .pipe(htmlhint.failReporter());
});


//================================================
//  COMPILING ASSETS
//================================================


// -- HANDLEBARS TEMPLATES -- //

gulp.task('handlebars', function(){
  return gulp.src('./templates/*.hbs')
    .pipe(notifyError())
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({namespace: 'template'}))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('./js/'));
});

// -- SASS STYLESHEETS -- //

gulp.task('sass', function() {
  return gulp.src('./sass/*.scss')
    .pipe(notifyError())
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});


//================================================
//  BOWER ASSETS
//================================================

gulp.task('bower', ['bower:js',
                    'bower:css',
                    'bower:fonts']);

// -- JAVASCRIPT -- //

gulp.task('bower:js', function() {
  return gulp.src(bower({filter: '**/*.js'}))
    .pipe(notifyError())
    .pipe(gulp.dest('vendor/js'));
});


// -- STYLESHEETS -- //

gulp.task('bower:css', function() {
  return gulp.src(bower({filter: '**/*.css'}))
    .pipe(notifyError())
    .pipe(gulp.dest('vendor/css'));
});


// -- FONTS -- //

gulp.task('bower:fonts', function(){
  return gulp.src(bower({filter: /\.(eot|svg|ttf|woff|woff2|otf)$/g}))
    .pipe(notifyError())
    .pipe(gulp.dest('vendor/fonts'));
});
