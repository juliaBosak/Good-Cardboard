var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concatCSS = require('gulp-concat-css');
var ftp = require('gulp-ftp');
// Static Server + watching scss/html files
gulp.task('server', ['sass'], function() {

    browserSync.init({
        server: "src/"
    });

    gulp.watch('src/sass/*.sass' , ['sass']).on('change', browserSync.reload);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});
 
// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/sass/*.sass")
    	 .pipe(sass().on('error', sass.logError))
         .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concatCSS("style.css"))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});
/*gulp.task('ftp', function(){
	return gulp.src('src/**')
	.pipe(ftp({
			host: 'website.com', //емейл 
            user: 'johndoe',
            pass: '1234', 
            remotePath: '' //куда выгрузить, создасться папка на хостинге
		}))
	.pipe(gutil.noop());
	}); */
gulp.task('default', ['server']);