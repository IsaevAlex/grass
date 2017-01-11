var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    useref = require('gulp-useref'),
    minifyCSS = require('gulp-minify-css');

gulp.task('hello', function() {
	console.log('Hello Zell');
});

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) // Конвертируем Sass в CSS с помощью gulp-sass
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('app/css'))
});

gulp.task('useref', function(){
  var assets = useref.assets();

  return gulp.src('app/*.html')
    .pipe(assets)
    // Минифицируем только CSS файлы
	.pipe(gulp('*.css', minifyCSS()))
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('dist'))
});

gulp.task('fonts', function() {
	return gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'))
})

gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', ['sass']); // Наблюдение за sass файлами
    // Наблюдение за другими типами файлов
})

