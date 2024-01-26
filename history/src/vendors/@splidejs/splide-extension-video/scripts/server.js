const http   = require( 'http' );
const path   = require( 'path' );
const fs     = require( 'fs' ).promises;
const server = http.createServer();

const mime = {
  '.html': 'text/html',
  '.css' : 'text/css',
  '.js'  : 'application/javascript',
};

server.on( 'request', async ( request, response ) => {
  const { url } = request;
  let fullPath;

  if ( url === '/' ) {
    fullPath = path.resolve( './src/js/test/html/index.html' );
  } else if ( url.startsWith( '/' ) ) {
    fullPath = path.resolve( `.${ url }` );
  } else {
    fullPath = url;
  }

  const type = mime[ path.extname( fullPath ) ] || 'text/plain';

  response.writeHead( 200, { 'Content-Type': type } );

  const buffer = await fs.readFile( fullPath, 'utf-8' )
    .catch( e => console.warn( e ) );

  if ( buffer ) {
    response.write( buffer );
  }

  response.end();
} );

server.listen( 3000 );
