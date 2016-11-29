var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync'),
    postcss = require('gulp-postcss'),
    cleancss = require('gulp-clean-css'),
    cssnano = require('cssnano'),
    notify = require("gulp-notify"),
    bower = require('gulp-bower');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rev = require('gulp-rev');
var del=require('del');

var revCollector = require('gulp-rev-collector');
//- 路径替换
var config = {
    sassPath: './src/**/**/*.scss',
    bowerDir: './bower_components',
    jsPath: './src/**/**/*.js',
    destCss: './dest/**/*.css'
}

//清理项目文件
gulp.task('clean',function(cb){
    var delPaths=[
        './dest/'
    ];
    del(delPaths).then((path) => {
        console.log(path);
        cb();
    })
})
gulp.task('js', function() {
    return gulp.src(config.jsPath)
        .pipe(uglify())
        .pipe(gulp.dest('./dest/'));
});

gulp.task('css', function () {
    return gulp.src(config.sassPath)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleancss())
        .pipe(gulp.dest('./dest/'))
        .pipe(browserSync.stream());
});

gulp.task('concat', function() {                                
   return gulp.src(config.destCss)    
        .pipe(concat('style.min.css'))                            
        .pipe(gulp.dest('./dest/'));                               
});
gulp.task('serve', ['css','js'], function() {
    browserSync({
        server: {
            baseDir: './',
        },
        port : 8888,
        open : false
    });
    gulp.watch(config.sassPath, ['css']);
    gulp.watch(config.jsPath, ['js']);
    gulp.watch(config.jsPath).on('change',browserSync.reload);
    gulp.watch(config.sassPath).on('change',browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
