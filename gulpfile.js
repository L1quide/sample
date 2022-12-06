import gulp from 'gulp';

//Импорт путей
import { path } from './gulp/config/path.js';
// Импорт плагинов
import { plugins } from './gulp/config/plugins.js'

// Глобальная переменная
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { images } from './gulp/tasks/images.js';
import { server } from './gulp/tasks/server.js';
import { js } from './gulp/tasks/js.js';




function watcher(){
    app.gulp.watch(app.path.watch.html, html)
    app.gulp.watch(app.path.watch.html, scss)
    app.gulp.watch(app.path.watch.images, images)
    app.gulp.watch(app.path.watch.js, js)
}

const mainTasks = app.gulp.parallel(html, scss, images, js)
const dev = app.gulp.series(reset, mainTasks, app.gulp.parallel(watcher, server));
const build = app.gulp.series(reset, mainTasks);
app.gulp.task('default', dev)

export { dev } //  npm run dev
export { build } // npm run build


import { svgSprites } from './gulp/tasks/svgSprites.js';
export { svgSprites }  // npm run svgSprites