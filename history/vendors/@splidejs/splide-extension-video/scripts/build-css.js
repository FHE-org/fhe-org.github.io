const sass         = require( 'sass' );
const fs           = require( 'fs' ).promises;
const postcss      = require( 'postcss' );
const cssnano      = require( 'cssnano' );
const autoprefixer = require( 'autoprefixer' );
const name         = 'splide-extension-video';


function buildCss() {
  const file    = './src/css/index.scss';
  const outFile = `./dist/css/${ name }.min.css`;
  const result  = sass.renderSync( { file, outputStyle: 'compressed' } );

  return postcss( [
    cssnano( { reduceIdents: false } ),
    autoprefixer(),
  ] )
    .process( result.css, { from: undefined } )
    .then( result => {
      result.warnings().forEach( warn => {
        console.warn( warn.toString() );
      } );

      return fs.writeFile( outFile, result.css );
    } );
}


buildCss().catch( e => console.error( e ) );

exports.buildCss = buildCss;
