/**图片压缩
 * 交付*/


var gulp = require('gulp');

function distImg() {
    

    gulp.src('build/images/**/*.{png,jpg,gif}')

        .pipe(gulp.dest('dist/images'));


}

module.exports = distImg;