// MINDsLab. UX/UI Team. YMJ. 20180825

$(document).ready(function() {
	
	
	// layer popup
	$('.btn_audio_play').on('click',function(){
		$('.audioBox').fadeIn(300);
		
		$('.audioBox audio').each(function(){
			var audio = document.getElementById('myAudio');
			audio.play();
		});	
	});	
	$('.btn_lyr_close, .btn_lyr_cancel, .lyr_bg').on('click',function(){
		$('.lyrWrap').fadeOut(300);		
		$('.audioBox').fadeOut();
		$('.audioBox audio').each(function(){
			var audio = document.getElementById('myAudio');
			audio.pause();
			audio.currentTime = 0;
		});
		$('#header .etcmenu .userBox dl').removeClass('active');
	});
	
	// select design 
	var selectTarget = $('.selectbox select'); 
	
	selectTarget.change(function(){ 
	
	var select_name = $(this).children('option:selected').text(); 
	$(this).siblings('label').text(select_name); 
	}); 
	
	// header user
	$('#header .etcmenu .userBox dl dd > a').on('click',function(){
		$(this).parent().parent().addClass('active');
	});	
	$('.contents').on('click',function(){
		$('#header .etcmenu .userBox dl').removeClass('active');
	});
	
	// snb
	$('.snb ul.nav li a').on('click',function(){
		$('.snb ul.nav li').removeClass('active');
		
		$(this).parents().addClass('active');
	});
	$('.snb ul.sub_nav > li > a').on('click',function(){
		$('.snb ul.sub_nav li').removeClass('active');
		
		$(this).parent().addClass('active');
		$(this).parents().parents().parents().addClass('active');	
	});	
	$('.snb ul.third_nav > li > a').on('click',function(){
		$('.snb ul.third_nav > li').removeClass('active');
		
		$(this).parent().addClass('active');
		$(this).parents().parents().parents().addClass('active');	
	});
	
	// select	
	$('.selectbox select').on('focus',function(){
		$(this).parent().addClass('active');
	});
	$('.selectbox select').on('focusout',function(){
		$(this).parent().removeClass('active');
	});	
	
	// text count
	$('.txtareaBox .textArea').on('input keyup paste', function() {
		var content = $(this).val();
		$(this).height(((content.split('\n').length + 1) * 1.5) + 'px');
		$('.txt_count').html(content.length + '/100');
		
		var txtValLth = $(this).val().length;
		
		if ( txtValLth > 0) {
			$('.btn_change').removeClass('disabled');	
			$('.btn_change').removeAttr('disabled');
		} else {
			$('.btn_change').addClass('disabled');	
			$('.btn_change').attr('disabled');
			$('.resultArea').fadeOut(300);
		}
	});
	$('.txtareaBox .textArea').keyup();
	
	
	
});
