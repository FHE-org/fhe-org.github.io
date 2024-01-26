<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<title>YouTube</title>

  <link rel="stylesheet" href="../../../../node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css">
  <link rel="stylesheet" href="../../../../dist/css/splide-extension-video.min.css">

	<script type="text/javascript" src="../../../../node_modules/@splidejs/splide/dist/js/splide.js"></script>
  <script type="text/javascript" src="../../../../dist/js/splide-extension-video.js"></script>

	<script>
		document.addEventListener( 'DOMContentLoaded', function () {
			var splide = new Splide( '#splide01', {
        type   : 'loop',
        perPage: 2,
				width  : 1000,
				height : 280,
				gap    : '1rem',
        cover  : true,
        video: {
          // mute    : true,
          // loop    : true,
          // autoplay: true,
        },
			} );

      splide.mount( window.splide.Extensions );

      splide.on( 'video:play', () => {
        console.log( 'play' );
      } );

      splide.on( 'video:pause', () => {
        console.log( 'pause' );
      } );

      splide.on( 'video:ended', () => {
        console.log( 'ended' );
      } );

      setTimeout( () => {
        splide.Components.Video.play( 1 );
      }, 4000 );
		} );
	</script>

	<style>
		.splide__slide {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 4rem;
		}
	</style>
</head>
<body>

<div id="splide01" class="splide">
	<div class="splide__track">
		<ul class="splide__list">
      <li class="splide__slide" data-splide-youtube="LjhCEhWiKXk">
        <img src="https://img.youtube.com/vi/LjhCEhWiKXk/hqdefault.jpg" alt="0">
      </li>
      <li class="splide__slide" data-splide-youtube="https://www.youtube.com/watch?v=450p7goxZqg">
        <img src="https://img.youtube.com/vi/450p7goxZqg/hqdefault.jpg" alt="1">
      </li>
      <li class="splide__slide" data-splide-youtube="https://www.youtube.com/watch?v=fWNaR-rxAic">
        <img src="https://img.youtube.com/vi/fWNaR-rxAic/hqdefault.jpg" alt="2">
      </li>
      <li class="splide__slide" data-splide-youtube="https://www.youtube.com/watch?v=BofL1AaiTjo">
        <img src="https://img.youtube.com/vi/BofL1AaiTjo/hqdefault.jpg" alt="3">
      </li>
		</ul>
	</div>
</div>

</body>
</html>
