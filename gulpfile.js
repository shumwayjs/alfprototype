var gulp = require('gulp'),
watch = require('gulp-watch'),
less = require('gulp-less'),
browserSync = require('browser-sync'),
del = require('del'),
vinylPaths = require('vinyl-paths'),
runSequence = require('run-sequence'),
to5 = require('gulp-6to5'),
mainBowerFiles = require('main-bower-files')



gulp.task('js', function () {
	gulp.src('public/pages/**/*.js')
	.pipe(to5({modules: 'amd'}))
	.pipe(gulp.dest('build/pages'));
});

gulp.task('test-src', function () {
	gulp.src('public/test/**/*.js')
	.pipe(gulp.dest('build/test'));
});

gulp.task('libs', function(){
	gulp.src(mainBowerFiles({paths: {
        bowerDirectory: 'public/libs',
        bowerrc: '.bowerrc',
        bowerJson: 'bower.json'
    }}), { base: 'public/libs' })
    .pipe(gulp.dest("build/libs"));

	gulp.src('public/libs/**/animo.js')
	.pipe(gulp.dest('build/libs'));

	gulp.src('public/libs/sinon/lib/**')
	.pipe(gulp.dest('build/libs/sinon/lib'));
});

gulp.task('build', function(callback){
	console.log('running build');
	return runSequence(
			// 'clean',
			'js',
			'libs',
			'html',
			'less',
			'test-src',
			callback
	);
});

gulp.task('clean', function() {
	return gulp.src('build/**')
	.pipe(vinylPaths(del));
});

gulp.task('less', function(){
	gulp.src('public/pages/**/*.less')
	.pipe(less())
	.pipe(gulp.dest('build/pages'));
});

gulp.task('html', function(){
	return gulp.src('public/pages/**/*.html')
	.pipe(gulp.dest('build/pages'));
});

gulp.task('serve', function(done) {
	var spawn = require('child_process').spawn,
		server = spawn('node', ['app.js'], { stdio: 'inherit' });

//	browserSync({
//		open: false,
//		port: 3000,
//		server: {
//			baseDir: ['./build'],
//			middleware: function (req, res, next) {
//				res.setHeader('Access-Control-Allow-Origin', '*');
//				next();
//			}
//		}
//	}, done);
});

gulp.task('default', ['serve', 'build'], function() {
	// gulp.watch('public/**', ['build']);
//	gulp.watch('public/**', ['build', browserSync.reload]);
});
