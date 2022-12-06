export const images = () => {
    return app.gulp.src(app.path.src.images)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'IMAGES',
                message: 'Error: <%= error.message %>'
            })
        ))
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(app.plugins.if(app.isBuild, app.plugins.webp()))
        .pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.images)))
        .pipe(app.plugins.if(app.isBuild, app.gulp.src(app.path.src.images)))
        .pipe(app.plugins.if(app.isBuild,app.plugins.newer(app.path.build.images)))
        .pipe(app.plugins.if(app.isBuild, app.plugins.imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false}],
            iterlaced: true,
            optimizationLevel: 3 //0 to 7
        })))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.gulp.src(app.path.src.svg))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browsersync.stream())

}