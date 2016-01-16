/**
 * Created by zera on 1/13/2016.
 */
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    connect = require('gulp-connect'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat');

outputDir = 'builds/development/';
jsSources = ['components/scripts/child.js'];
sassSources = ['components/sass/style.scss'];

jsSources = [
    'components/scripts/bootstrap.js',
    'components/scripts/child.js'
];

cssSources = [
    'components/css/bootstrap.css',
    'components/css/bootstrap-theme.css',
    'components/css/style.css',
    'components/css/child.css'
];

gulp.task('sass', function () {
    return sass('components/sass/style.scss', {
        sourcemap: true,
        style: 'expanded'
    })
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('components/css/'))
        .pipe(connect.reload());
});

gulp.task('js', function(){
    gulp.src(jsSources)
        .pipe(concat('script.js'))
        .pipe(browserify({insertGlobals : true}))
        .pipe(gulp.dest(outputDir +'js'))
        .pipe(connect.reload())
});

gulp.task('css', function(){
    gulp.src(cssSources)
        .pipe(concat('main.css'))
        .pipe(gulp.dest(outputDir + 'css'))
        .pipe(connect.reload())
});

gulp.task('html', function(){
    gulp.src('builds/development/*.html')
        .pipe(connect.reload())
});

gulp.task('watch', function(){
    gulp.watch('components/sass/**/*.scss', ['sass']);
    gulp.watch('builds/development/*.html', ['html']);
    gulp.watch(jsSources, ['js']);
    gulp.watch(cssSources, ['css']);
});

gulp.task('connect', function(){
    connect.server({
        root: outputDir,
        livereload: true
    });
});

gulp.task('default', ['html', 'sass', 'js','css', 'connect', 'watch']);