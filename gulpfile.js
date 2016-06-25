var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    clean = require('gulp-clean'),
    runSequence = require('run-sequence'),
    minify = require('gulp-minify'),
    gls = require('gulp-live-server');;

gulp.task('default', function(callback) {
    runSequence('build', 'serve', callback);
});

gulp.task('serve', function() {
  var server = gls.static('public', 8080); 
  server.start();
    
  //use gulp.watch to trigger server actions(notify, start or stop) 
  gulp.watch(['index.html','app/**/*'], function (file) {
      console.log('Notificando');
      runSequence('build', function(){
          server.notify.apply(server, [file]);
      });
  });
});

gulp.task('build', function(callback) {
  runSequence('build-clean',
              ['build-scripts', 'build-styles', 'build-scripts-libs', 'build-styles-libs', 'build-html'],
              callback);
});

gulp.task('build-scripts', function() {
  return gulp.src('app/**/*.js')
    .pipe(concat('all.js'))
    .pipe(sourcemaps.init())
    .pipe(minify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/js'));
});

gulp.task('build-scripts-libs', function() {
  return gulp.src([
      'bower_components/jquery/dist/jquery.min.js', 
      'bower_components/bootstrap/dist/js/bootstrap.min.js',
      'bower_components/angular/angular.min.js',
      'bower_components/angular-route/angular-route.min.js',
      'bower_components/angular-resource/angular-resource.min.js'
  ])
    .pipe(concat('libs.min.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('build-styles', function() {
    return gulp.src(['app/styles/**/*'])
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('public/css'));
});

gulp.task('build-styles-libs', function() {
  return gulp.src([
      'bower_components/bootstrap/dist/css/bootstrap.min.css'
  ])
    .pipe(concat('libs.min.css'))
    .pipe(gulp.dest('public/css'));
});

gulp.task('build-html', function() {
  return gulp.src(['index.html', 'app/**/*.html', 'app/**/*.png'])
    .pipe(gulp.dest('public'));
});

gulp.task('build-clean', function(){
    return gulp.src('public').pipe(clean())
});