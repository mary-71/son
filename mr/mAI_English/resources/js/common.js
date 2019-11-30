// MINDsLab. UX/UI Team. YMJ. 20180703


$(document).ready(function (){
	//aside menu
	var clicked = false;
	var asideWidth = $(window).width() - 50;
	$('.aside').show();

	$('a.btn_header_ham').click(function(){
		if (!clicked) {
			$(this).addClass('active');
			$('.aside').css({
				width : 'calc(70%)',
			},{duration:500});
			$('.btn_goTop').hide();
			
			$('.bg_aside').animate({
				  opacity : 0.7,
			},{duration:200,queue:false});
			$('.bg_aside').css({
				  display : 'block',
			});
			$('.layer_close').css({
				  display : 'block',
			});
			clicked=true;
		} else {
			$(this).removeClass('active');
			$('.aside').animate({
				width: '0',
			},{duration:200,queue:false});			
			$('.btn_goTop').show();

			$('.bg_aside').animate({
				  opacity : '0',
			},{duration:150,queue:false});
			$('.bg_aside').css({
				  display : 'none',
			});
			$('.layer_close').css({
				  display : 'none',
			});
			clicked=false;
		}
	});

	$('.layer_close').on('click',function(){
		$(this).hide();
		$('a.btn_header_ham').removeClass('active');
		$('.aside').animate({
			width: '0',
		},{duration:200,queue:false});
		$('.btn_goTop').show();

		$('.bg_aside').animate({
			  opacity : 0,
		},{duration:150,queue:false});
		$('.bg_aside').css({
			  display : 'none',
		});

		clicked=false;
	});

	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('#header').outerHeight();

	$(window).scroll(function(event){
		didScroll = true;
	});
	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);
	function hasScrolled() {
		var scrollTop = $(window).scrollTop();

		// Make sure they scroll more than delta
		if(Math.abs(lastScrollTop - scrollTop) <= delta)
			return;

		// If they scrolled down and are past the navbar, add class .nav-up.
		// This is necessary so you never see what is "behind" the navbar.

		if (scrollTop > 10){
			// Scroll Down
			$('#wrap').addClass('fixed');			
			// top button
			$('.btn_goTop').fadeIn();
		} else {
			// Scroll Up
			if(scrollTop + $(window).height() < $(document).height()) {
				$('#wrap').removeClass('fixed');
				$('.btn').removeClass('btn_fixed');				
				// top button
				$('.btn_goTop').fadeOut();
			}
		}
		if (scrollTop > lastScrollTop && scrollTop > navbarHeight){
		// Scroll Down
		$('#header').addClass('fixed');
		$('.btn').addClass('btn_fixed');	
		// top button	
		$('.btn_goTop').fadeIn();

		} else {
			// Scroll Up
			if(scrollTop + $(window).height() < $(document).height()) {
				$('#header').removeClass('fixed');			
				// top button			
				$('.btn_goTop').fadeOut();
				$('.btn_header_ham').css({
					'position':'fixed',
				});
			}
		}
		lastScrollTop = scrollTop;
	}


	// top button
	$('.btn_goTop').on('click',function(){
		$('html, body').animate({scrollTop: 0}, 500);
	});



	//section move
		$('.btn_dwn a[href^="#"]').on('click', function (e) {
			e.preventDefault();

			var target = this.hash;
			var $target = $(target);

			$('html, body').animate({
			'scrollTop': $target.offset().top-50
			}, 1000, 'swing');
		});
	// tab
	$('.tabUi').each(function(){
		$('.tab_container .tab_contents').hide(); //Hide all content
		$('.tabUi .tab_nav li:first-child a').addClass('active').show(); //Activate first tab
		$('.tab_container .tab_contents:first-child').show(); //Show first tab content
	
		//TAB On Click Event
		$('.tabUi .tab_nav li a').on('click', function(){
	
			$('.tabUi .tab_nav li a').removeClass('active'); //Remove any 'active' class
			$(this).addClass('active'); //Add 'active' class to selected tab
			$('.tabUi .tab_contents').fadeOut(200); //Hide all tab content
			$('.type_stt .bg_ani').each(function(){					
				$(this).children('div').removeClass('demo01 demo02 demo03 demo04 demo05');
				$('.demo_intro, .demo_info, .demo_recording, .demo_result').hide();
			});	
	
			var activeTab = $(this).attr('href'); //Find the href attribute value to identify the active tab + content
			var tabClass = activeTab.replace('#','');
			$(activeTab).delay(200).fadeIn(); //Fade in the active ID content
			$('.container .contents').each(function(){					
				$(this).children('div').addClass(tabClass);
				$('.tab_contents').show();
			});	
			return false;
		});
	});	
});
