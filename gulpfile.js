var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');

gulp.task('default', ['build']);

gulp.task('build', function(callback) {
  runSequence('build-clean',
              ['build-scripts', 'build-styles', 'build-libs'],
              callback);
});

gulp.task('build-styles', function() {
    
});

gulp.task('build-scripts', function() {
  return gulp.src('app/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/js'));
});


gulp.task('build-libs', function() {
  return gulp.src([
      'bower_components/jquery/dist/jquery.min.js', 
      'bower_components/bootstrap/dist/js/bootstrap.min.js',
      'bower_components/angular/angular.min.js'
  ])
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('build-clean', function(){
    return gulp.src('public')
})

