import gulp from 'gulp';
import * as cnf from './config';
import { reload } from './server'
import { style }  from './style'
import { template }  from './template'
import { svgsprite_symbol }  from './sprite'

export const watch = () => {

  gulp.watch(cnf.src.template + '**/*.pug', gulp.series(template))
    // .on("all", (event, filepath) => {
    //   global.emittyChangedFile = filepath;
    // });

  gulp.watch(cnf.src.style, gulp.series([style]) );

  gulp.watch(cnf.src.svgsprite, gulp.series([svgsprite_symbol, style]) );

};


// cnf.src.template
