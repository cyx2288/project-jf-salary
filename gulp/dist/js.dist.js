/**js打包
 * 交付*/

var gulp = require('gulp'),

    uglify=require('gulp-uglify'),

    rename = require("gulp-rename");//重命名


function jsDist() {

    gulp.src(['build/js/jf_salary.js'])

        .pipe(uglify())

        .pipe(rename({suffix: '.min'}))

        .pipe(gulp.dest('dist/js'));

    gulp.src(['build/js/jquery-3.0.0.min.js']) //该任务针对的文件7

        .pipe(gulp.dest('dist/js'));

    gulp.src(['build/api/*']) //该任务针对的文件7

        .pipe(gulp.dest('dist/api'))


}

module.exports = jsDist;
