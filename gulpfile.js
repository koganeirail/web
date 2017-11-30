const gulp = require('gulp');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');

// ejs compile
gulp.task('ejs',()=>{
  return gulp.src("./ejs/*.ejs.html")
    .pipe(ejs({}, {"ext": ".html"}))
    .pipe(rename(function (path) {
		path.basename = path.basename.replace(".ejs", "");
	}))
    .pipe(gulp.dest("./dist"));
});

gulp.task('watch', ()=>{
  gulp.watch('./ejs/*.ejs.html', ['ejs']);
});
