export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
                app.plugins.notify.onError({
                title: 'HTML',
                message: 'Error: <%= error.message %>'
            })
        ))  
        .pipe(app.plugins.fileinclude({
            prefix: '@@'
        }))
        .pipe(app.plugins.repalce(/@img\//g, 'img/'))
        .pipe(app.plugins.if(app.isBuild, app.plugins.webpHtmlNosvg()))
        .pipe(app.plugins.if(app.isBuild,
                app.plugins.versionNumber({
                'value' : '%DT%',
                'append' : {
                    'key' : '_v',
                    'cover' : 0,
                    'to' : [
                        'css',
                        'js',
                    ]             
                },
                'output' : {
                    'file' : 'gulp/version.json'
                }
            })))
        .pipe(app.gulp.dest(app.path.buildFolder))
        .pipe(app.plugins.browsersync.stream())
}