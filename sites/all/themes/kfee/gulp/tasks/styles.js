/**
 * Compile, minify, prefix and optimize styles.
 */
gulp.task('styles', function() {

    var app = gulp.src(build.files.styles.map(function (file) { return paths.styles.src + '/' + file; }))
        .pipe($.sass({
            errLogToConsole: true,
            indentedSyntax: true,
            outputStyle: sassStyle
        }))
        // @see https://github.com/ai/autoprefixer
        .pipe($.autoprefixer(['ie >= 9', 'ios => 6', 'android >= 4.3', 'firefox >= 20', 'chrome >= 25', 'safari >= 6']));

    return merge(gulp.src(bower('**/*.css')), app)
        .pipe($.concat('styles.css'))
        .pipe(isProduction ? $.combineMediaQueries({ log: true }) : _.noop())
        .pipe(isProduction ? $.minifyCss({ keepSpecialComments: 1, advanced: false }) : _.noop())
        .pipe(gulp.dest(paths.styles.dest))
        .pipe($.size({ title: 'styles done.' }))
        .pipe(browserSync.reload({ stream: true }));
});
