var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var uglifyCSS = require('gulp-uglifyCss');
var sass = require('gulp-sass');


gulp.task('copyHtml', async function(){
  gulp.src('src/*.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('imageMin', async function(){
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
});

gulp.task('minify', async function(){
  gulp.src('src/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

gulp.task('sass', async function(){
  gulp.src('src/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(uglifyCSS())
      .pipe(gulp.dest('dist/css'));
});


gulp.task('watch', async function(){
	gulp.watch('src/js/*.js', function() {
	    	gulp.series('minify');
		});
		gulp.watch('src/js/*.js', gulp.registry().get('minify'));
	
	gulp.watch('src/images/*', function() {
	    	gulp.series('imageMin');
		});
		gulp.watch('src/images/*', gulp.registry().get('imageMin'));
	
	gulp.watch('src/sass/*.scss', function() {
	    	gulp.series('sass');
		});
		gulp.watch('src/sass/*.scss', gulp.registry().get('sass'));
	
	gulp.watch('src/*.html', function() {
	    	gulp.series('copyHtml');
		});
		gulp.watch('src/*.html', gulp.registry().get('copyHtml'));
});

gulp.task('default', gulp.series('copyHtml', 'imageMin','minify','sass', 'watch'));