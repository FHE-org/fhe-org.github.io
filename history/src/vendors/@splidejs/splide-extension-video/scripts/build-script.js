const rollup   = require( 'rollup' ).rollup;
const esbuild  = require( 'rollup-plugin-esbuild' ).default;
const babel    = require( '@rollup/plugin-babel' );
const resolve  = require( '@rollup/plugin-node-resolve' ).nodeResolve;
const path     = require( 'path' );
const minify   = require( './plugins/minify' ).minify;
const banner   = require( './constants/banner' );
const name     = 'splide-extension-video';


function buildScript( compress ) {
  const file = `./dist/js/${ name }${ compress ? '.min' : '' }.js`;

  return rollup( {
    input: './src/js/build/default.ts',
    plugins: [
      resolve(),
      esbuild( { minify: false, experimentalBundling: true } ),
      babel.getBabelOutputPlugin( {
        configFile: path.resolve( __dirname, '../.babelrc' ),
        allowAllFormats: true,
      } ),
      compress ? minify() : false,
    ]
  } ).then( bundle => {
    return bundle.write( {
      banner,
      file,
      format   : 'umd',
      name     : 'Splide',
      sourcemap: ! compress,
    } );
  } );
}

Promise.all( [ buildScript(), buildScript( true ) ] ).catch( e => console.error( e ) );

exports.buildJs  = () => buildScript();
exports.buildMin = () => buildScript( true );
