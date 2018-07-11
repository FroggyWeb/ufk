import gulp from 'gulp'
import path  from 'path'
// import fileinclude from 'gulp-file-include';
import pug from 'gulp-pug'
import replace from 'gulp-replace'
import plumber from 'gulp-plumber'
import { reload } from './server'
import * as cnf from './config'
import data from "gulp-data"
import fs from "fs"

export const template = () =>  {
  return gulp.src(cnf.src.template + '!(_)*.pug')
    .pipe(plumber())
    // .pipe(data(function(file){
    //   return JSON.parse(fs.readFileSync('./site/views/data.json'))
    // }))
    .pipe(pug({
        pretty: true
    }))
    .pipe(replace('../../', './'))
    .pipe(replace('../', './'))
    // assets repalace avaiable
    .pipe(gulp.dest(cnf.dest))
    .pipe(reload({stream: true}))
}

