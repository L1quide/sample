export const server= (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: app.path.buildFolder
        },
        notifu: false,
        port: 3000,
    })
}