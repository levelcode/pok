$(document).ready(function() {
	var canvas = document.getElementById('can'),
	        context = canvas.getContext('2d');

	// resize the canvas to fill browser window dynamically
	window.addEventListener('resize', resizeCanvas, false);

	function resizeCanvas() {
	        canvas.width = window.innerWidth;
	        canvas.height = window.innerHeight;

	        /**
	         * Your drawings need to be inside this function otherwise they will be reset when
	         * you resize the browser window and the canvas goes will be cleared.
	         */
	        drawStuff();
	}
	resizeCanvas();

	function drawStuff() {
	        // do your drawing stuff here
	}
	/********* full screen *******************/

	var requestFullscreen = function (ele) {
	if (ele.requestFullscreen) {
	    ele.requestFullscreen();
	} else if (ele.webkitRequestFullscreen) {
	    ele.webkitRequestFullscreen();
	} else if (ele.mozRequestFullScreen) {
	    ele.mozRequestFullScreen();
	} else if (ele.msRequestFullscreen) {
	    ele.msRequestFullscreen();
	} else {
	    console.log('Fullscreen API is not supported.');
	}
	};

	var exitFullscreen = function () {
	if (document.exitFullscreen) {
	    document.exitFullscreen();
	} else if (document.webkitExitFullscreen) {
	    document.webkitExitFullscreen();
	} else if (document.mozCancelFullScreen) {
	    document.mozCancelFullScreen();
	} else if (document.msExitFullscreen) {
	    document.msExitFullscreen();
	} else {
	    console.log('Fullscreen API is not supported.');
	}
	};

	var fsDocButton = document.getElementById('fs-doc-button');
	var fsExitDocButton = document.getElementById('fs-exit-doc-button');

	fsDocButton.addEventListener('click', function(e) {
	e.preventDefault();
	requestFullscreen(document.documentElement);
	$('.full_2').css('display', 'none');
	$('.full').css('display', 'block');
	});

	fsExitDocButton.addEventListener('click', function(e) {
	e.preventDefault();
	exitFullscreen();
	$('.fullº').css('display', 'none');
	$('.full_2').css('display', 'block');
	});




	/********* full screen *******************/

	/********* sonido *******************/

	$( '.sound' ).click(function() {
	$( this ).toggleClass( 'active' );
	});


	/*************  ancho y alto del canvas **************************/

	/*************  ancho y alto del canvas **************************/


	var can, ctx, vid, play, vidTimer, mouseIsDown = 0,
	knobMid, pixData, pixels, knobX = 100;

	function init() {
		vid = document.getElementById("vid");
		play = document.getElementById("play");
		can = document.getElementById("can");
		ctx = can.getContext('2d');
		vid.addEventListener('ended', vidEnd, false);
		vid.addEventListener('play', vidSet, false);
		knobMid = knob.offsetWidth / 2;
		showVid();
	}

	function vidSet() {
		clearTimeout(vidTimer);
		vidTimer = setTimeout(showVid, 25);
	}

	function showVid() {
		ctx.drawImage(vid, 0, 0);
		processImage();
		if (!document.querySelector("video").paused)
		// Repeat 40 times a second to oversample 30 fps video
		    vidTimer = setTimeout(showVid, 25);
		}

	function processImage() {
		// get pixel data for entire canvas
		pixels = ctx.getImageData(0, 0, can.width, can.height);
		pixData = pixels.data;
		// set alpha value using slider
		var alphaVal = parseInt(knobX * 2.55)
		// for each pixel
		for (i = 0; i < can.width * can.height; i++) {
		    // get combined rgb value to determine brightness
		    var rgbVal = pixData[i*4] + pixData[i*4 + 1] + pixData[i*4 + 2];
		    // set alpha value for dark pixels to knob value
		    if (rgbVal < 150)
		        pixData[i*4 + 3] = alphaVal;
		}
		 // put modified data back into image object
		 pixels.data = pixData;
		 // blit modified image object to screen
		 ctx.putImageData(pixels, 0, 0);
	}


	function playPauseVideo() {
	if (play.value == "Play") {
	    vid.play();
	    play.value = "Pause";
	    $('#play').addClass('pause');

	}
	else {
	    vid.pause();
	    play.value = "Play";
	    $('#play').removeClass('pause');
	}
	}

	function vidEnd() {
	    console.log(playing);
	    play.value = "Play";
	}

	function mouseDown() {
	mouseIsDown = 1;
	mouseXY();
	}

	function mouseUp() {
	mouseIsDown = 0;
	}

	function mouseXY(e) {
	if (mouseIsDown) {
	    if (!e)
	        var e = event;
	    var mouseX = e.pageX - slider.offsetLeft;
	    if (mouseX >= 0 && mouseX <= slider.offsetWidth) {
	        setKnob(mouseX);
	    }
	}
	}
	function touchXY(e) {
	if (!e)
	    var e = event;
	// slide, don't scroll
	e.preventDefault();
	var touchX = e.touches[0].pageX - slider.offsetLeft;
	if (touchX >= 0 && touchX <= slider.offsetWidth) {
	    setKnob(touchX);
	}
	}

	function setKnob(x) {
	knobX = x - knobMid;
	knobX = Math.max(knobX, 0);
	knobX = Math.min(knobX, slider.offsetWidth - knob.offsetWidth);
	knob.style.left = knobX;
	}

});


