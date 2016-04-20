var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

// Watch Sass for changes

gulp.task('watch', function(){
  gulp.watch('sass/*.scss', ['sass']); 
  // Other watchers
})

//  Default task

gulp.task('default',['sass','watch']);