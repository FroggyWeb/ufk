export const siteroot = "site/";

export const src = {
  js : siteroot + 'js/**/*.js',
  style : siteroot + 'sass/**/*.+(scss|sass)',
  template : siteroot + 'views/',
  font : siteroot + 'font/**/*.*',
  img : [siteroot + 'img/**/*.*', siteroot + '!img/**/*.db'],
  svgsprite : siteroot + 'img/svgsprite/*.svg',
  pngsprite : siteroot + 'img/pngsprite/*.png',
};

export const dest = siteroot;

export const copyfolder = [];

export const svgsprite = {
  mode: {
    "symbol": {
      dest: '.',
      sprite: "symbol.svg",
      render: {
        scss: {
            dest: '../sass/_sprite-symb.scss',
            template: siteroot + "sass/_sprite-tpl.scss"
        }
      }
    }
  }
};
