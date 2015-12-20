<section>
					<div class="image_container-header">
						<div title="details1" class="details-button" type="button" onclick="dropDown();">
							<i class="fa fa-bars">Details</i>
						</div>

						<span class="object_header"> Horace Pippin (1888–1946) | The Trial of John Brown</span>
						<div class="object_info">
							<h3>More Details</h3>
							<div class="info-name">Date Created:</div>
							<div class="info-value">ca. 1942</div>
							<div class="info-name">Physical Dimensions:</div>
							<div class="info-value">16 1/2 x 20 1/8 in. (41.9 x 51.1 cm)</div>
							<div class="info-name">Rights:</div>
							<div class="info-value">FAMSF, Gift of Mr. and Mrs. John D. Rockefeller 3rd, 1979.7.82</div>
							<div class="info-name">Medium:</div>
							<div class="info-value">Oil on canvas</div>
						</div>
					</div>
					<div class="image_container-body" align="center">
						<img src="images/7.jpg">
					</div>
					
				</section>

				<section>
					<div class="image_container-header">
						<div title="details1" class="details-button" type="button" onclick="dropDown();">
							<i class="fa fa-bars">Details</i>
						</div>

						<span class="object_header"> Grant Wood (1891–1942) | Dinner for Threshers</span>
						<div class="object_info">
							<h3>More Details</h3>
							<div class="info-name">Date Created:</div>
							<div class="info-value">ca. 1934</div>
							<div class="info-name">Physical Dimensions:</div>
							<div class="info-value">20 x 80 in. (50.8 x 203.2 cm)</div>
							<div class="info-name">Rights:</div>
							<div class="info-value">FAMSF,Gift of Mr. and Mrs. John D. Rockefeller 3rd, 1979.7.105</div>
							<div class="info-name">Medium:</div>
							<div class="info-value">Oil on hardboard panel</div>
						</div>
					</div>
					<div class="image_container-body" align="center">
						<img src="images/1.jpg">
					</div>
					
				</section>

				<section>
					<div class="image_container-header">
						<div title="details1" class="details-button" type="button" onclick="dropDown();">
							<i class="fa fa-bars">Details</i>
						</div>

						<span class="object_header"> Wayne Thiebaud (1920) | Diagonal Freeway</span>
						<div class="object_info">
							<h3>More Details</h3>
							<div class="info-name">Date Created:</div>
							<div class="info-value">ca. 1993</div>
							<div class="info-name">Physical Dimensions:</div>
							<div class="info-value">36 x 60 in. (91.4 x 152.4 cm)</div>
							<div class="info-name">Rights:</div>
							<div class="info-value">FAMSF, Partial gift of Morgan Flagg in memory of his son, Lawrence J. Flagg, 1998.186</div>
							<div class="info-name">Medium:</div>
							<div class="info-value">Acrylic on canvas</div>
						</div>
					</div>
					<div class="image_container-body" align="center">
						<img src="images/2.jpg">
					</div>
					
				</section>
				function loadApp() {

 	$('.reveal').fadeIn(1000);

 	var slide = $('.slides');

 	// Check if the CSS was already loaded
	
	if (slide.width()==0 || slide.height()==0) {
		setTimeout(loadApp, 10);
		return;
	}

	// Zoom.js

	$('.reveal').zoom({
		flipbook: $('.slides'),
			resize: function(event, scale, page, pageElement) {

				if (scale==1)
					loadSmallPage(page, pageElement);
				else
					loadLargePage(page, pageElement);

			},

			zoomIn: function () {
				
				$('#slider-bar').hide();
				$('.made').hide();
				$('.previous-button').hide();
                $('.next-button').hide();
                $('.cover-border').hide();
                $('.depth').hide();
                $('.magazine').removeClass('animated').addClass('zoom-in');
				$('.zoom-icon').removeClass('zoom-icon-in').addClass('zoom-icon-out')
			},

			zoomOut: function () {
				$('#slider-bar').fadeIn();
				$('.exit-message').hide();
				$('.depth').show();
				if($('.magazine').turn('page')!=1){
                	$('.previous-button').show();
                }
                if($('.magazine').turn('page')!=1){
                	$('.cover-border').show();
                }
                $('.next-button').show();
				$('.made').fadeIn();
				$('.zoom-icon').removeClass('zoom-icon-out').addClass('zoom-icon-in');
				setTimeout(function(){
					$('.magazine').addClass('animated').removeClass('zoom-in');
					resizeViewport();
				}, 0);

			}
		}
	});

	// Zoom event

	if ($.isTouch)
		$('.magazine-viewport').bind('zoom.doubleTap', zoomTo);
		
	else
		$('.magazine-viewport').bind('zoom.tap', zoomTo);


	//Disable right click:
	document.oncontextmenu=RightMouseDown;
	document.onmousedown = mouseDown; 

	function mouseDown(e) {
		if (e.which==3) {
			return RightMouseDown();
		}
	}
	
	function RightMouseDown() { return false;}
	
	// Using arrow keys to turn the page

	$(document).keydown(function(e){

		var previous = 37, next = 39, esc = 27;

		switch (e.keyCode) {
			case previous:

				// left arrow
				$('.magazine').turn('previous');
				e.preventDefault();

			break;
			case next:

				//right arrow
				$('.magazine').turn('next');
				e.preventDefault();

			break;
			case esc:
				
				$('.magazine-viewport').zoom('zoomOut');	
				e.preventDefault();

			break;
		}
	});

	
	// URIs - Format #/page/1 

	Hash.on('^page\/([0-9]*)$', {
		yep: function(path, parts) {
			var page = parts[1];

			if (page!==undefined) {
				if ($('.magazine').turn('is'))
					$('.magazine').turn('page', page);
			}

		},
		nop: function(path) {

			if ($('.magazine').turn('is'))
				$('.magazine').turn('page', 1);
				$('.magazine').turn
		}
	});


	$(window).resize(function() {
		resizeViewport();
	}).bind('orientationchange', function() {
		resizeViewport();
	});

	// Regions

	if ($.isTouch) {
		$('.magazine').bind('touchstart', regionClick);
	} else {
		$('.magazine').click(regionClick);
	}

	 // Events for the home button

	$('.home-button').bind($.mouseEvents.over, function() {
		
		$(this).addClass('home-button-hover');

	}).bind($.mouseEvents.out, function() {
		
		$(this).removeClass('home-button-hover');

	}).bind($.mouseEvents.down, function() {
		
		$(this).addClass('home-button-down');

	}).bind($.mouseEvents.up, function() {
		
		$(this).removeClass('home-button-down');

	}).click(function() {
		
		$('.magazine').turn('page', 1);
		$('.magazine').turn('peel', 'br');					


	});

	// Events for the next button

	$('.next-button').bind($.mouseEvents.over, function() {
		
		$(this).addClass('next-button-hover');

	}).bind($.mouseEvents.out, function() {
		
		$(this).removeClass('next-button-hover');

	}).bind($.mouseEvents.down, function() {
		
		$(this).addClass('next-button-down');

	}).bind($.mouseEvents.up, function() {
		
		$(this).removeClass('next-button-down');

	}).click(function() {
		
		$('.magazine').turn('next');

	});

	// Events for the previous button
	
	$('.previous-button').bind($.mouseEvents.over, function() {
		
		$(this).addClass('previous-button-hover');

	}).bind($.mouseEvents.out, function() {
		
		$(this).removeClass('previous-button-hover');

	}).bind($.mouseEvents.down, function() {
		
		$(this).addClass('previous-button-down');

	}).bind($.mouseEvents.up, function() {
		
		$(this).removeClass('previous-button-down');

	}).click(function() {
		
		$('.magazine').turn('previous');

	});


	// Slider

	$( "#slider" ).slider({
		min: 1,
		max: numberOfViews(flipbook),

		start: function(event, ui) {

			if (!window._thumbPreview) {
				_thumbPreview = $('<div />', {'class': 'thumbnail'}).html('<div></div>');
				setPreview(ui.value);
				_thumbPreview.appendTo($(ui.handle));
			} else
				setPreview(ui.value);

			moveBar(false);

		},

		slide: function(event, ui) {

			setPreview(ui.value);

		},

		stop: function() {

			if (window._thumbPreview)
				_thumbPreview.removeClass('show');
			
			$('.magazine').turn('page', Math.max(1, $(this).slider('value')*2 - 2));

		}
	});

	resizeViewport();

	$('.magazine').addClass('animated');

}

// Zoom icon

 $('.zoom-icon').bind('mouseover', function() { 
 	
 	if ($(this).hasClass('zoom-icon-in'))
 		$(this).addClass('zoom-icon-in-hover');

 	if ($(this).hasClass('zoom-icon-out'))
 		$(this).addClass('zoom-icon-out-hover');
 
 }).bind('mouseout', function() { 
 	
 	 if ($(this).hasClass('zoom-icon-in'))
 		$(this).removeClass('zoom-icon-in-hover');
 	
 	if ($(this).hasClass('zoom-icon-out'))
 		$(this).removeClass('zoom-icon-out-hover');

 }).bind('click', function() {

 	if ($(this).hasClass('zoom-icon-in'))
 		$('.magazine-viewport').zoom('zoomIn');
 	else if ($(this).hasClass('zoom-icon-out'))	
		$('.magazine-viewport').zoom('zoomOut');

 });

 $('#canvas').hide();


// Load the HTML4 version if there's not CSS transform

yepnope({
	test : Modernizr.csstransforms,
	yep: ['../lib/turn.min.js'],
	nope:[' ../lib/turn.html4.min.js', 'css/jquery.ui.html4.css'],
	both: ['../lib/zoom.min.js', 'css/jquery.ui.css', 'js/magazine.js', 'css/magazine.css'],
	complete: loadApp
});