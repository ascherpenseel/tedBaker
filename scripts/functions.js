function slideSwitch() {
		var $active = $('#backs-probador img.active');
	
		if ( $active.length == 0 ) $active = $('#backs-probador img:last');
	
		var $next =  $active.next().length ? $active.next()
			: $('#backs-probador img:first');
	
		$active.addClass('last-active');
			
		$next.css({opacity: 0.0})
			.addClass('active')
			.animate({opacity: 1.0}, 1000, function() {
				$active.removeClass('active last-active');
			});
}

$(document).ready(function(){
	
	/////////// VARIABLES /////////////////////////////////////////////////////////////
	
	var v1 = 0.5;
	var v2 = 0.8;
	var v3 = 1;
	var v4 = 1.4;
	var v5 = -1.6;
	
	var ancho = 1024;
	
	/////////// POSITION READJUST /////////////////////////////////////////////////////
	/*
	$('#slide1 .v3').each(function(index){
		$(this).css('margin-left',function(){
			return Math.round( (parseFloat($(this).css('margin-left'))) *v3 );	
		});
	});
	*/

	//////////////////////////////////// PARALLAX ////////////////////////////////////////

	$('.v1').scrollingParallax({
		enableVertical : false,
		//staticScrollLimit : false,
		//staticSpeed : 1,
    	enableHorizontal : true,
		staticSpeedX : v1,
		staticScrollLimitX: false 
	});
	
	$('.v2').scrollingParallax({
		enableVertical : false,
		//staticScrollLimit : false,
		//staticSpeed : 1,
    	enableHorizontal : true,
		staticSpeedX : v2,
		staticScrollLimitX: false 
	});
/*	
	$('.v3').scrollingParallax({
		enableVertical : false,
		//staticScrollLimit : false,
		//staticSpeed : 1,
    	enableHorizontal : true,
		staticSpeedX : v3,
		staticScrollLimitX: false 
	});
*/	
	$('.v4').scrollingParallax({
		enableVertical : false,
		//staticScrollLimit : false,
		//staticSpeed : 1,
    	enableHorizontal : true,
		staticSpeedX : v4,
		staticScrollLimitX: false 
	});
	$('#bus').scrollingParallax({
		enableVertical : false,
    	enableHorizontal : true,
		staticSpeedX : v5,
		reverseDirection : true,
		staticScrollLimitX: false 
	});
	
	///////// CLICKS SCROLL ////////////////////////////////

	$(function() {
    $('#nav a').bind('click',function(event){
        var $anchor = $(this);
		
        $('html, body').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left
        }, 5000);
       
        event.preventDefault();
    });
	});
	
	/////// FONDOS PROBADOR /////////////////////////////////
	  
	setInterval( "slideSwitch()", 3000 );
	
	///////////// CAMISA MANIQUI ////////////////////////////////////

	
    $('#ropa').click(function(){
        if($(this).hasClass('ropanormal'))
        {
			$(this).addClass('hueco').removeClass('ropanormal');
			$('#maniqui').addClass('vestido').removeClass('maniquinormal');
        }
        else
        {
            $(this).addClass('ropanormal').removeClass('hueco');
			$('#maniqui').addClass('maniquinormal').removeClass('vestido');
        }
    });

	$('#ropa, #movil').hover(
		function(){$(this).css('cursor','pointer')},
		function(){$(this).css('cursor','auto')}
	);
	
	//////////// FLASHAZO //////////////////////////////////////////
	
	$('#instaflash').click(function(){
		$(this).css('opacity','0');
		$(this).css('display','none');	
	});
	
	$('#instagram, #movil').bind('click',function(){
		$('#instaflash').css('display','block');
		$('#instaflash').animate(
			{opacity:1}, 80, 'linear', function(){
				$('#instaflash').animate({opacity:.7}, 24);
			}
		);
		
		event.preventDefault();
	});
	
});