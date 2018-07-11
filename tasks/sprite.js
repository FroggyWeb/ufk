import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import * as cnf from './config';

export const svgsprite_symbol = () => {
  return gulp.src(cnf.src.svgsprite)
    .pipe(svgSprite(cnf.svgsprite))
    .pipe(gulp.dest(cnf.siteroot + '/img'))
};
