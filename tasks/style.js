import gulp from 'gulp'
import sassGlob from 'gulp-sass-glob'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import sourcemaps from 'gulp-sourcemaps'
import plumber from 'gulp-plumber'
import { Browser, reload } from './server'
import replace from 'gulp-replace'

import * as cnf from './config'

export const style = () => {
  return gulp
    .src(cnf.src.style)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(replace('../../', '../'))
    .pipe(autoprefixer(['last 3 versions', '> 1%', 'ie 9'], {
        cascade: true
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(cnf.dest + 'css'))
    .pipe(reload({stream: true}));
};

export default style;
