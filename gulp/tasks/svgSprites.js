export const svgSprites = () => {
   
    return app.gulp.src(app.path.src.svg, {})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: 'SVG',
            message: 'Error: <%= error.message %>'
        })
    ))
    .pipe(app.plugins.svgSprite({
        mode: {
            stack: {
                sptite: '../svg/map.svg',
                // создавать страничку с перечислением иконок
                example: true
            }, 
        }
    }))
    .pipe(app.gulp.dest(app.path.build.images))
}