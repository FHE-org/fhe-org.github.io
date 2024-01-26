<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<title>Mixed</title>

  <link rel="stylesheet" href="../../../../node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css">
  <link rel="stylesheet" href="../../../../dist/css/splide-extension-video.min.css">

	<script type="text/javascript" src="../../../../node_modules/@splidejs/splide/dist/js/splide.js"></script>
  <script type="text/javascript" src="../../../../dist/js/splide-extension-video.js"></script>

	<script>
		document.addEventListener( 'DOMContentLoaded', function () {
			var splide = new Splide( '#splide01', {
        perPage: 2,
				width  : 1000,
				height : 280,
				gap    : '1rem',
        cover  : true,
			} );

			splide.mount( window.splide.Extensions );
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
        1
      </li>
      <li class="splide__slide" data-splide-vimeo="https://vimeo.com/92731345">
        2
      </li>
      <li class="splide__slide" data-splide-html-video="../assets/videos/02.mp4">
        3
      </li>
      <li class="splide__slide" data-splide-youtube="https://www.youtube.com/watch?v=BofL1AaiTjo">
        4
      </li>
		</ul>
	</div>
</div>

</body>
</html>
