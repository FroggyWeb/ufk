import gulp from 'gulp';

import * as cnf from './config';
import { scripts } from './webpack'
import { server }  from './server'
import { style }  from './style'
import { svgsprite_symbol }  from './sprite'
import { template }  from './template'
// import { devWatch }  from './devwatch'

gulp.watch(cnf.src.template + '**/*.pug', gulp.series(template))
    // .on("all", (event, filepath) => {
    //   global.emittyChangedFile = filepath;
    // });

gulp.watch(cnf.src.style, gulp.series([style]) );

gulp.watch(cnf.src.svgsprite, gulp.series([svgsprite_symbol, style]) );


export const dev   = gulp.parallel(  server, svgsprite_symbol, style, template )
export const build = gulp.series( scripts )

export default dev
