//  MINDsLab. UX/UI Team. YMJ. 20180411

// video layerpopup
(function ( $ ) { 
    $.fn.movLayer = function(options) {

        var movLayerOptions = $.extend({
                autoplay: 1
        }, options );

        $(this).on('click', function (e) {

            var movLayerLink = $(this).attr("href");

            if( movLayerLink.match(/(youtube.com)/) ){
                var split_c = "v=";
                var split_n = 1;
            }

            if( movLayerLink.match(/(youtu.be)/) || movLayerLink.match(/(vimeo.com\/)+[0-9]/) ){
                var split_c = "/";
                var split_n = 3;
            }

            if( movLayerLink.match(/(vimeo.com\/)+[a-zA-Z]/) ){
                var split_c = "/";
                var split_n = 5;
            }

            var getYouTubeVideoID = movLayerLink.split(split_c)[split_n];

            var cleanVideoID = getYouTubeVideoID.replace(/(&)+(.*)/, "");

            if( movLayerLink.match(/(youtu.be)/) || movLayerLink.match(/(youtube.com)/) ){
                var videoEmbedLink = "https://www.youtube.com/embed/"+cleanVideoID+"?autoplay="+movLayerOptions.autoplay+"";
            }

            if( movLayerLink.match(/(vimeo.com\/)+[0-9]/) || movLayerLink.match(/(vimeo.com\/)+[a-zA-Z]/) ){
                var videoEmbedLink = "https://player.vimeo.com/video/"+cleanVideoID+"?autoplay="+movLayerOptions.autoplay+"";
            }

            $("body").append('<div class="layerpopup_wrap"><div class="layer_bg"></div><div class="layerBox"><a href="#none" class="layer_close"></a><iframe src="'+videoEmbedLink+'" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div></div>');
			
            $(".layer_bg, .layer_close").click(function(){
                $(".layerpopup_wrap").addClass("layerpopup_hide").delay(500).queue(function() { $(this).remove(); });
            });
						
			var winWidth = $(window).width();	
			var winHeight = $(window).height();
			var layerWidth = $('.visual_tit').width()-40;			
			var layerHeight = (9 / 16) * layerWidth;

			// =*= Pc Layout =*=	
			$('.layerpopup_wrap .layerBox').css({
				'width' : layerWidth,
				'height' : layerHeight,	
				'margin-top' : -layerHeight/2,	
				'margin-left' : -layerWidth/2,	
			});								

            e.preventDefault();
			
        });
    }; 
}( jQuery ));

$(document).ready(function (){	
	//aside menu
	var clicked = false;	
	var asideWidth = $(window).width() - 50;
	$('.aside').show();

	$('a.btn_header_ham').click(function(){
		if (!clicked) {
			$(this).addClass('active');
			$('.aside').animate({
				width : asideWidth,
			},{duration:200,queue:false});
			$('.btn_goTop').hide();
			
			$('.bg_aside').animate({
				  opacity : 0.7,
			},{duration:200,queue:false});
			$('.bg_aside').css({
				  display : 'block',
			});
			$('body').css({
				  overflow : 'auto',
			});

			clicked=true;
		} else {
			$(this).removeClass('active');
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
			$('body').css({
				  overflow : '',
			});

			clicked=false;
		}
	});
	
	$('.bg_aside').on('click',function(){
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
		$('body').css({
			  overflow : '',
		});
		clicked=false;
	});

	var scrollTop = $(window).scrollTop();
	
	// top button
	$('.btn_goTop').on('click',function(){
		$('html, body').animate({scrollTop: 0}, 500);
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
			$('.type_stt .bg_ani').each(function(){					
				$(this).children('div').addClass(tabClass);
				$('.demo_intro').show();
			});	
			return false;
		});
	});	
	
	// language (pc)
	$('#header .sta .etcMenu ul li.lang').each(function(){
		$(this).on('click',function(){
			$(this).toggleClass('active'); 
		});	
		$('#header .sta .etcMenu ul li.lang ul.lst li a').on('click',function(){
			$(this).removeClass('active'); 
		});	
		$('#container').on('click',function(){
			$('#header .sta .etcMenu ul li.lang').removeClass('active'); 
		});	
	});	
	
	// language (mobile)
	$('ul.m_etcMenu li.lang').each(function(){
		$(this).on('click',function(){
			$(this).toggleClass('active'); 
		});	
		$('ul.m_etcMenu li.lang ul.lst li a').on('click',function(){
			$(this).removeClass('active'); 
		});	
	});
	
	// tab
	$('.tabUi02').each(function(){
		$('.tab_container02 .tab_contents02').hide(); //Hide all content
		$('.tabUi02 .tab_nav02 li:first-child a').addClass('active').show(); //Activate first tab
		$('.tab_container02 .tab_contents02:first-child').show(); //Show first tab content
	
		//TAB On Click Event
		$('.tabUi02 .tab_nav02 li a').on('click', function(){
	
			$('.tabUi02 .tab_nav02 li a').removeClass('active'); //Remove any 'active' class
			$(this).addClass('active'); //Add 'active' class to selected tab
			$('.tabUi02 .tab_contents02').fadeOut(200); //Hide all tab content
			
			var activeTab02 = $(this).attr('href'); //Find the href attribute value to identify the active tab + content
			
			$(activeTab02).delay(200).fadeIn(); //Fade in the active ID content
			
			return false;
		});
	});	
	
	var videoBoxWidth = $('.videoBox').width();			
	var videoBoxHeight = (9 / 16) * videoBoxWidth;
	// tab
	$('.videoBox').each(function(){
		$('.videoBox iframe').css({
			height: videoBoxHeight,
		}); //Hide all content
	});	
	
	// GNB
	$('li.menu1depth h2 a').on('click focus mouseover', function () {
		$(this).parent().parent().children('div').fadeIn(200);
		$(this).parent().parent().siblings().children('div').fadeOut(400);
	});
	
	$('.gnbItem').on('mouseleave', function () {
		$('ul.gnbNav li .gnbItem').fadeOut(400);
	});
	
	$('.gnbItem .itemBox:last-child li:last-child a').on('focusout', function () {
		$('ul.gnbNav li .gnbItem').fadeOut(400);
	});
	
	
	// section move
	$('.lnb ul.nav li a[href^="#"]').on('click', function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').animate({
		'scrollTop': $target.offset().top
		}, 1000, 'swing');
	});
	
	// aside nav
	$('.aside .aside_mid .m_nav li h2 a').on('click', function () {
	    if($(this).hasClass('slideChk')){
	        $('.aside .aside_mid ul.m_lst').slideUp();
		    $('.aside .aside_mid ul.m_lst_sub').slideUp();
		    $('.aside .aside_mid .m_nav li h2 a').removeClass('slideChk');
		    return;
	    }
		$('.aside .aside_mid ul.m_lst').slideUp();
		$('.aside .aside_mid ul.m_lst_sub').slideUp();
		$(this).parent().parent().children('.m_lst').slideDown();
		$('.aside .aside_mid .m_nav li h2 a').removeClass('slideChk');
		$(this).addClass('slideChk');
	});
	$('.aside .aside_mid .m_nav li h3 a').on('click', function () {
	    if($(this).hasClass('active')){
	        $('.aside .aside_mid ul.m_lst_sub').slideUp();
	        $('.aside .aside_mid ul.m_lst li h3 a').removeClass('active');
	        return;
	    }
		$('.aside .aside_mid ul.m_lst_sub').slideUp();
		$(this).parent().parent().children('.m_lst_sub').slideDown();
		$('.aside .aside_mid ul.m_lst li h3 a').removeClass('active');
		$(this).addClass('active');	
	});	
	
	// IR QA textarea
	$('.irqaDemo .demo_intro .demo_txtArea .textArea').on('change keyup paste click', function() {
		$(this).css({
			'background-color': '#f3f5fb',
		});
		
		var txtAreaValLth = $('.irqaDemo .demo_intro .demo_txtArea .textArea').val().length;		
		
		if ( txtAreaValLth > 0 ) {
			$('.irqaDemo .demo_intro .demo_txtArea span').hide();
		} else {
			$('.irqaDemo .demo_intro .demo_txtArea span').show();
			$('.irqaDemo .demo_intro .demo_txtArea .textArea').css({
				'background-color': '',
			});
		}
	});
	
	// Contact Us 문의유형
	$('#contactType').change(function() {
		var cttType = $('#contactType option:selected').val();
		if ( cttType == '유료사용신청') {
			$('#fm_txt').attr("placeholder", "신청 원하는 API 종류를 적어 주세요.");
		} else {
			$('#fm_txt').attr("placeholder", "문의내용 *");
		}
	});
	
	
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
	
	if (scrollTop > lastScrollTop && scrollTop > navbarHeight){ 
		// Scroll Down 
		$('#header').addClass('fixed'); 
		// top button
		$('.lnb').fadeIn();
		$('.btn_goTop').fadeIn();
		$('.btn_header_ham').css({
			'position':'absolute',
		});
	} else { 
		// Scroll Up 
		if(scrollTop + $(window).height() < $(document).height()) { 
			$('#header').removeClass('fixed'); 
			// top button
			$('.lnb').fadeOut();
			$('.btn_goTop').fadeOut();
			$('.btn_header_ham').css({
				'position':'fixed',
			});
		}
	} 
	lastScrollTop = scrollTop; 
}	

$(window).scroll(function () {
	var scrollTop = $(window).scrollTop();
	var winHeight = $(window).height();
	var docuHeight= $(document).height();
	var footerHeight = $('#footer').height();
	var stopPosition = winHeight + footerHeight;	

	
	if (scrollTop >= docuHeight - stopPosition) {
		$('.btn_goTop').css({
			'bottom': '86px',
		});
	} else {  
		// top button
		$('.btn_goTop').css({
			'bottom': 0,
		});	  
	}
	
	// wide_imgBox scroll animation
	if( scrollTop > 10) {	
		$('#header').addClass('bg_clor');
		
		// damo animation (STT)
		$('.type_stt .bg_ani span:nth-child(1)').animate({
			'top':-50+ (Math.floor(scrollTop*0.2)) + 'px',
		},40);	
		$('.type_stt .bg_ani span:nth-child(3)').animate({
			'bottom':30+ (Math.floor(scrollTop*0.2)) + 'px',
		},40);	
		
		// damo animation (IR QA)
		$('.type_irqa .bg_ani span:nth-child(1)').animate({
			'top':220+ (Math.floor(scrollTop*0.2)) + 'px',
		},40);	
		$('.type_irqa .bg_ani span:nth-child(2)').animate({
			'top':-80+ (Math.floor(scrollTop*0.2)) + 'px',
		},40);	
		
		// damo animation (XDC)
		$('.type_xdc .bg_ani span:nth-child(1)').animate({
			'top':220+ (Math.floor(scrollTop*0.2)) + 'px',
		},40);	
		$('.type_xdc .bg_ani span:nth-child(2)').animate({
			'top':-80+ (Math.floor(scrollTop*0.2)) + 'px',
		},40);	
		
	} else {  
		$('#header').removeClass('bg_clor');
	}
	
});
$(window).resize(function () {
	//aside menu
	var clicked = false;	
	var asideWidth = $(window).width() - 50;
	$('.aside').show();

	$('a.btn_header_ham').click(function(){
		if (!clicked) {
			$(this).addClass('active');
			$('.aside').animate({
				width : asideWidth,
			},{duration:200,queue:false});
			$('.btn_goTop').hide();
			
			$('.bg_aside').animate({
				  opacity : 0.7,
			},{duration:200,queue:false});
			$('.bg_aside').css({
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
				  opacity : 0,
			},{duration:150,queue:false});
			$('.bg_aside').css({
				  display : 'none',
			});

			clicked=false;
		}
	});
	
	var videoBoxWidth = $('.videoBox').width();			
	var videoBoxHeight = (9 / 16) * videoBoxWidth;

	// tab
	$('.videoBox').each(function(){
		$('.videoBox iframe').css({
			height: videoBoxHeight,
		}); //Hide all content
	});	
});