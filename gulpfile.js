const gulp = require('gulp');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const ejsLint = require('ejs-lint');
const htmlmin = require('gulp-htmlmin');

// ejs compile
gulp.task('ejs',()=>{
  return gulp.src("./ejs/*.ejs.html")
    .pipe(rename(function (path) {
		path.basename = path.basename.replace(".ejs", "");
	}))
    .pipe(ejs({}, {"ext": ".html"}))
    .pipe(gulp.dest("./notminified"))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("./docs"));
});

gulp.task('watch', ()=>{
  gulp.watch('./ejs/*.ejs.html', ['ejs']);
});
