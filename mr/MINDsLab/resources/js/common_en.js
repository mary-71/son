//  MINDsLab. UX/UI Team. YMJ. 20180813

jQuery.event.add(window,"load",function(){
	//document ready
	$(document).ready(function (){
		//변수 정의
		var winWidth = $(window).width();	
		var winHeight = $(window).height();
		
		if(winWidth < 750) {		
			// =*= Mobile Layout =*=
			// =*= Pc Layout =*=	
		//section visual
			$('.stn_visual').each(function(){
				$(this).css({
					'width' : winWidth,
					'height' : '',		
				});
			});	
			
		} else {
			// =*= Pc Layout =*=	
			//section visual
			$('.stn_visual').each(function(){
				$(this).css({
					'width' : winWidth,
					'height' : winHeight,		
				});
			});							
		}
		

		
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
	
	// scroll event
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		
		if (scrollTop > 10){ 
			// Scroll Down 
			$('#header').addClass('fixed'); 
			// top button
			$('.btn_goTop').fadeIn();
		} else { 
			// Scroll Up 
			if(scrollTop + $(window).height() < $(document).height()) { 
				$('#header').removeClass('fixed'); 
				// top button
				$('.btn_goTop').fadeOut();
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