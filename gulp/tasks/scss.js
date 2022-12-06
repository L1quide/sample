export const scss = () => {
    return app.gulp.src(app.path.src.scss)
        .pipe(app.plugins.if(app.isDev, app.plugins.sourcemaps.init()))
        .pipe(app.plugins.repalce(/@img\//g, '../img/'))
        .pipe(app.plugins.sass({
            outputStyle: 'expanded' // compressed, compact, expanded, nested
        }))
        .pipe(app.plugins.if(app.isBuild, app.plugins.groupCssMediaQueries()))
        .pipe(app.plugins.if(app.isBuild, app.plugins.webpcss({
            webpClass: '.webp',
            noWebpClass: '.no-webp'
        })))
        .pipe(app.plugins.if(app.isBuild, app.plugins.autoprefixer({
            grid: true,
            overrideBrowserslist: ['last 3 versions'],
            cascade: true
        })))
        // Если нужна не сжатая версия файла
        //.pipe(app.gulp.dest(app.path.build.scss))
        .pipe(app.plugins.if(app.isBuild, app.plugins.cleanCss()))
        .pipe(app.plugins.concat('all.min.css'))
        .pipe(app.plugins.if(app.isDev, app.plugins.sourcemaps.write('.')))
        .pipe(app.gulp.dest(app.path.build.scss))
        .pipe(app.plugins.browsersync.stream())
}