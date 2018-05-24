"use strict";

var gulp = require("gulp"),
  sass = require("gulp-sass"),
  // pug = require('gulp-pug'),
  sourcemaps = require("gulp-sourcemaps"),
  // clean = require("gulp-clean"),
  babel = require("gulp-babel"),
  // concat = require("gulp-concat"),
  watch = require("gulp-watch"),
  autoprefixer = require("gulp-autoprefixer"),
  uglify = require("gulp-uglify"),
  cleanCSS = require('gulp-clean-css'),
  browserSync = require("browser-sync").create();
  // gulpCopy = require('gulp-copy');

gulp.task("sass", () => {
  return gulp
    .src("./css/cert.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    // .pipe(concat("style.css"))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./css"));
});

// gulp.task("clean-css", function() {
//   return gulp.src("./css/**/*", { read: false }).pipe(clean());
// });

gulp.task("babel", () =>
  gulp
    .src("./js/cert.js")
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["env"]
      })
    )
    // .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./js/dist"))
);

// gulp.task('views', () => {
//   return gulp.src('./views/index.pug')
//   .pipe(pug({
//     pretty: true
//   }))
//   .pipe(gulp.dest("./"))
// });

// gulp.task("clean-scripts", function() {
//   return gulp.src("./js/dist/**/*", { read: false }).pipe(clean());
// });

gulp.task("serve", gulp.series(gulp.parallel("sass", "babel"), /*"views",*/ () => {
  browserSync.init({
    server: "./"
  });

  gulp.watch("./css/*.scss", gulp.series("sass"));
  gulp.watch("./js/*.js", gulp.series("babel"));
  // gulp.watch("./views/**/*.*", gulp.series("views"));

  gulp.watch("./css/*.css").on("change", browserSync.reload);
  gulp.watch("./js/dist/*.js").on("change", browserSync.reload);
  gulp.watch("./*.html").on("change", browserSync.reload);
}));

// hack to create empty folder
// gulp.task('build-dir', function () {
//   return gulp.src('*.*', {read: false})
//       .pipe(gulp.dest('./build'))
// });

// gulp.task('clean', function () {
//   return gulp.src('./build', {read: false})
//       .pipe(clean());
// });

gulp.task("default", gulp.series(/* gulp.parallel("clean-css", "clean-scripts"),*/ "serve"));

// gulp.task("build", gulp.series("build-dir", "clean", gulp.parallel("sass", "babel"), "views", () => {  
//   return gulp.src(['./index.html', './css/style.css', './fonts/**/*', './images/**/*', './js/dist/main.js', './vendor/**/*'])
//     .pipe(gulpCopy('./build'))
// }));