const gulp = require('gulp');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const minifyHTML = require('gulp-minify-html');

// ejs compile
gulp.task('ejs',()=>{
  return gulp.src("./ejs/*.ejs.html")
    .pipe(rename(function (path) {
		path.basename = path.basename.replace(".ejs", "");
	}))
    .pipe(ejs({}, {"ext": ".html"}))
    .pipe(minifyHTML({ empty: true }))
    .pipe(gulp.dest("./dist"));
});

gulp.task('watch', ()=>{
  gulp.watch('./ejs/*.ejs.html', ['ejs']);
});
