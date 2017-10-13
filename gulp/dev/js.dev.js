/**脚本合并
 * 开发*/

var gulp = require('gulp'),

    concatDir = require('gulp-concat-dir'),//按文件夹合并

    connect = require('gulp-connect'),//服务器

    concat = require("gulp-concat"),//文件合并

    rename = require("gulp-rename");//重命名


function devJs() {

    //主要依赖模块

    gulp.src(['src/js/*.js',  'src/component/**/*.js'])

        .pipe(concat('jf_salary.js'))

        .pipe(gulp.dest('build/js'))

        .pipe(connect.reload());


    gulp.src(['src/api/*']) //该任务针对的文件7

        .pipe(gulp.dest('build/api'))

}

module.exports = devJs;