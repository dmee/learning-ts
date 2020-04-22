const gulp = require('gulp');
const clean = require('gulp-clean');

const ts = require('gulp-typescript');

gulp.task('scripts', function () {
	return gulp
		.src('src/**/*.ts')
		.pipe(
			ts({
				noImplicitAny: true,
				declaration: false,
				lib: ['es2015'],
			})
		)
		.pipe(gulp.dest('dist'));
});
gulp.task('clean', function () {
	return gulp.src('dist').pipe(clean());
});
gulp.task('watch', function () {
	gulp.watch('src/**/*.ts', gulp.series('scripts'));
});

gulp.task('default', gulp.series('scripts', 'watch'));
