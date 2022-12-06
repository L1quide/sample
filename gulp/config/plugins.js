import {deleteAsync} from "del" // Очистка каталога dist
import fileinclude from 'gulp-file-include' // Сборка частей HTML
import webpHtmlNosvg from 'gulp-webp-html-nosvg' // оборачивает img в picture
import versionNumber from 'gulp-version-number' // Добавляет версию к файлам
import repalce from 'gulp-replace'; //Поиск и замена в HTML по регуляркам
import plumber from 'gulp-plumber'; // Обработка ошибок
import notify from 'gulp-notify'; // Сообщения и подсказки
import browsersync from 'browser-sync' // сервер для разработки
import sourcemaps from 'gulp-sourcemaps'; // карта исходников для отладки
import dartSass from 'sass'; // конвертация sass в css
import gulpSass from 'gulp-sass';
import concat from 'gulp-concat'; // конкатенация файлов в один
import cleanCss from 'gulp-clean-css'; // сжатие css
import webpcss from 'gulp-webpcss'; // 
import autoprefixer from 'gulp-autoprefixer'; // добавление префиксов для браузеров
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // обьеднение медиазапросов
import newer from 'gulp-newer' // Проверка обновления изображений
import webp from 'gulp-webp'; // ковертация в формат webp
import imagemin from 'gulp-imagemin'; // сжатие изображений
import webpack from 'webpack-stream';
import ifPluins from 'gulp-if';
import svgSprite from 'gulp-svg-sprite'

export const plugins = {
    fileinclude: fileinclude,
    deleteAsync: deleteAsync,
    webpHtmlNosvg: webpHtmlNosvg,
    versionNumber: versionNumber,
    repalce: repalce,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    sourcemaps: sourcemaps,
    newer: newer,
    sass: gulpSass(dartSass),
    concat: concat,
    cleanCss: cleanCss,
    webpcss: webpcss,
    autoprefixer: autoprefixer,
    groupCssMediaQueries: groupCssMediaQueries,
    webp: webp,
    imagemin: imagemin,
    webpack: webpack,
    if: ifPluins,
    svgSprite: svgSprite

}

/*
npm i -D del gulp-file-include gulp-webp-html-nosvg gulp-version-number gulp-replace gulp-plumber gulp-notify browser-sync gulp-sourcemaps sass gulp-sass gulp-concat gulp-clean-css gulp-webpcss webp-converter@2.2.3 gulp-autoprefixer gulp-group-css-media-queries gulp-webp gulp-imagemin gulp-newer webpack webpack-stream gulp-if gulp-svg-sprite
*/