//  MINDsLab. UX/UI Team. YMJ. 20180813
jQuery.event.add(window,"load",function(){
	//document ready
	$(document).ready(function (){
		//변수 정의
		var winWidth = $(window).width();	
		var winHeight = $(window).height();
		
		//section visual
		$('.stn_visual').each(function(){
			$(this).css({
				'width' : winWidth,
				'height' : winHeight,		
			});
		});

		// top button
        $('.btn_goTop').on('click',function(){
        $('html, body').animate({scrollTop: 0}, 500);
        });

		//section move
		$('.gnb ul.gnb_nav li a[href^="#"], a.btn_contact[href^="#"], .stn_visual a.btn_next[href^="#"], .stn_eco .btn a[href^="#"], .btn_goTop a[href^="#"]').on('click', function (e) {
			e.preventDefault();

			var target = this.hash;
			var $target = $(target);

			$('html, body').animate({
			'scrollTop': $target.offset().top
			}, 1000, 'swing');
		});
		
		//animation
		$('.stn_visual_txt').animate({
			'padding-top':'0',	
			'opacity':1,
		},800);		
		$('.stn_visual_txt .txt01').delay(800).animate({
			'padding-top':'25px',	
			'opacity':1,
		},800);
		$('.stn_visual_txt .txt02').delay(1600).animate({
			'margin-top':'40px',	
			'opacity':1,
		},800);	
		
		//header hover
        $('#header').hover(function(){//hoverin func
            $('.sta h1 a img').attr("src","resources/images/logo.png");
        },
        function(){//hoverout func
            if($(this).hasClass("fixed"))	
                $('.sta h1 a img').attr("src","resources/images/logo.png");
            else
                $('.sta h1 a img').attr("src","resources/images/logo_h1.png");
			
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
				  overflow : 'hidden',
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

	// scroll event
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		
		if (scrollTop > 10){
			// Scroll Down 
			$('#header').addClass('fixed'); 
			// top button
			$('.btn_goTop').fadeIn();
			$('.sta h1 img').attr("src","resources/images/logo.png");

			//solution tab
			$('.scroll_target').each(function(){
		    if(scrollTop+130 >= $(this).offset().top){
		        var id = $(this).attr('id');
                $('.tab_mov .tab_nav li a').removeClass('active');
                $('.tab_mov .tab_nav li a[href=#'+ id +']').addClass('active');
		    }
		});
			
		} else { 
			// Scroll Up 
			if(scrollTop + $(window).height() < $(document).height()) { 
				$('#header').removeClass('fixed'); 
				// top button
				$('.btn_goTop').fadeOut();
				$('.sta h1 img').attr("src","resources/images/logo_h1.png");
			}
		}

	});	
		
	//resize
	$(window).resize(function (){
		var winWidth = $(window).width();	
		var winHeight = $(window).height();
		
		//section visual
		$('.stn_visual').each(function(){
			$(this).css({
				'width' : winWidth,
				'height' : winHeight,		
			});
		});	
	});	
	
	//탭 이동
//	$('.tab_mov').each(function(){
//		$('.tab_mov .tab_nav li:first-child a').addClass('active').show(); //Activate first tab
//		//TAB On Click Event
//		$('.tab_mov .tab_nav li a').on('click', function(){
//			$('.tab_mov .tab_nav li a').removeClass('active'); //Remove any 'active' class
//			$(this).addClass('active'); //Add 'active' class to selected tab
//		});
//		 $(".tab_mov .tab_nav li a").click(function(event){
//                event.preventDefault();
//                $('html,body').animate({scrollTop:$(this.hash).offset().top-50}, 800);
//        });
//
//	});


    $(".co_visualArea .tab_mov .tab_nav li a").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top-50}, 800);
		$('html, body').clearQueue();
    });
//
//    $(".co_visualArea .tab_mov .tab_nav li a").on('click',function(){
//        $('html,body').animate({scrollTop:$(this.hash).offset().top-50}, 800);
//    });

});



// layerpopup
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
			var layerWidth = $('.sta').width()-30;			
			var layerHeight = (9 / 16) * layerWidth-15;

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


// scroll event
$(window).scroll(function(){
	var st = $(window).scrollTop();
	
	if(st > 1) {	
		// wide image animation transform: matrix(1.08584, 0, 0, 1.08584, 0, -33.5788);
		$('.crop_cell .bg_aniBox img').css({transform: 'matrix(1.08584, 0, 0, 1.08584, 0,' + st * 0.02});	
	} else {	
		// wide image animation
		$('.crop_cell .bg_aniBox img').css({transform: 'matrix(1.08584, 0, 0, 1.08584, 0,' - st * 0.02});	
	}	

	$('#object01').each(function(){
		var winWidth = $(window).width();
		var objectOffset = $('#object01, #object02, #object03, #object04, #object05, #object06').offset().top;
		
		if ( winWidth < 760) {
			
			
			if(st > objectOffset - 1550) {
				$('#object01').animate({
					'top':'0',
					'opacity':1,
				},300);
			} else {
				$('#object01').animate({
					'top':'100px',
					'opacity':0,
				},300);
			}
			
			if(st > objectOffset - 1520) {
				$('#object02').animate({
					'top':0,
					'opacity':1,
				},300);
			} else {
				$('#object02').animate({
					'top':'100px',
					'opacity':0,
				},300);
			}
			
			if(st > objectOffset - 850) {
				$('#object03').animate({
					'top':0,
					'opacity':1,
				},300);
			} else {
				$('#object03').animate({
					'top':'100px',
					'opacity':0,
				},300);
			}	
			if(st > objectOffset - 500) {
				$('#object04').animate({
					'top':0,
					'opacity':1,
				},300);
			} else {
				$('#object04').animate({
					'top':'100px',
					'opacity':0,
				},300);
			}
			
			if(st > objectOffset - 550) {
				$('#object05').animate({
					'top':0,
					'opacity':1,
				},300);
			} else {
				$('#object05').animate({
					'top':'100px',
					'opacity':0,
				},300);
			}
			if(st > objectOffset - 450) {
				$('#object06').animate({
					'top':0,
					'opacity':1,
				},300);
			} else {
				$('#object06').animate({
					'top':'100px',
					'opacity':0,
				},300);
			}
		} else {
			if(st > objectOffset - 800) {
				$('#object01').animate({
					'top':0,
					'opacity':1,
				},500);
			} else {
				$('#object01').animate({
					'top':'100px',
					'opacity':0,
				},500);
			}
			
			if(st > objectOffset - 720) {
				$('#object02').animate({
					'top':0,
					'opacity':1,
				},500);
			} else {
				$('#object02').animate({
					'top':'100px',
					'opacity':0,
				},500);
			}
			
			if(st > objectOffset - 640) {
				$('#object03').animate({
					'top':0,
					'opacity':1,
				},500);
			} else {
				$('#object03').animate({
					'top':'100px',
					'opacity':0,
				},500);
			}
			if(st > objectOffset - 440) {
				$('#object04').animate({
					'top':0,
					'opacity':1,
				},500);
			} else {
				$('#object04').animate({
					'top':'100px',
					'opacity':0,
				},500);
			}
			
			if(st > objectOffset - 400) {
				$('#object05').animate({
					'top':0,
					'opacity':1,
				},500);
			} else {
				$('#object05').animate({
					'top':'100px',
					'opacity':0,
				},500);
			}
			if(st > objectOffset - 320) {
				$('#object06').animate({
					'top':0,
					'opacity':1,
				},500);
			} else {
				$('#object06').animate({
					'top':'100px',
					'opacity':0,
				},500);
			}
		}
	});	

	
});

