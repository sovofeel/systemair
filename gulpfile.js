var gulp = require('gulp'),
	jade = require('gulp-jade'),

	sass = require('gulp-sass'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	csso = require('gulp-csso'),
	rename = require('gulp-rename'),

	browserify = require('browserify'),
	babelify = require('babelify');
	minify = require('gulp-minify'),
	jshint = require('gulp-jshint'),
	source = require('vinyl-source-stream'),

	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	jpegtran = require('imagemin-jpegtran'),
	concat = require('gulp-concat'),

	notify = require('gulp-notify'),
	fs = require('fs');



gulp.task('markup', function() {

	return gulp.src(['./dev/*.jade'])
		.pipe(jade({
			pretty: true,
			locals: JSON.parse(fs.readFileSync('./dev/static/content.json', {encoding: 'utf8'}))
		}))
		.on('error', console.log)
		.pipe(gulp.dest('./build/'))
		.pipe(notify('Markup task completed'));
});



gulp.task('styles', function() {

	var processors = [
        autoprefixer({browsers: ['last 2 versions']})
    ];

	return gulp.src('./dev/css/style.scss')
	    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(postcss(processors))
	    .pipe(gulp.dest('./build/css/'))
	    .pipe(notify('Styles task completed'));
});



gulp.task('scripts', function() {

	browserify('dev/js/app.js', {entries: 'dev/js/app.js', debug: true})
		.transform(babelify, {
			presets: ['es2015'],
			plugins: ['transform-class-properties']
		})
		.bundle()
        .pipe(source('app.js'))
        .pipe(jshint())
        .pipe(gulp.dest('build/js/'))
		.pipe(notify('Scripts task completed'));
});



gulp.task('styles-minify', function() {

	var processors = [
        autoprefixer({browsers: ['last 2 versions']})
    ];

	return gulp.src('./dev/css/style.scss')
	    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(csso())
		.pipe(rename('styles-min.css'))
	    .pipe(gulp.dest('./build/css/'))
	    .pipe(notify('Styles-minify task completed'));
});



gulp.task('scripts-minify', function() {

	return gulp.src('build/js/app.js')
		.pipe(minify())
        .pipe(gulp.dest('build/js/'))
		.pipe(notify('Scripts-minify task completed'));
});



gulp.task('images', function(){

	return gulp.src('./dev/img/**/*')
		.pipe(imagemin({
			progressive: true,
			use: [pngquant(), jpegtran()]
		}))
		.pipe(gulp.dest('./build/img'))
		.pipe(notify('Images task completed'));
});



gulp.task('external', function(){

	var processors = [
        autoprefixer({browsers: ['last 2 versions']})
    ];

	gulp.src('./dev/external/*.css')
		.pipe(postcss(processors))
		.pipe(csso())
		.pipe(rename('external.css'))
	    .pipe(gulp.dest('./build/external/'));

	gulp.src('./dev/external/*.js')
		.pipe(concat('external.js'))
		.pipe(minify())
		.pipe(gulp.dest('./build/external/'));

	gulp.src('./dev/external/*')
		.pipe(imagemin({
			progressive: true,
			use: [pngquant(), jpegtran()]
		}))
		.pipe(gulp.dest('./build/external/'));
});



gulp.task('default', ['markup', 'styles', 'scripts'], function(){
	gulp.watch('./dev/**/*.jade', ['markup']);
	gulp.watch('./dev/css/**/*.scss', ['styles']);
	gulp.watch('./dev/js/**/*.js', ['scripts']);
});


gulp.task('build', ['markup', 'styles-minify', 'scripts-minify', 'images', 'external']);
