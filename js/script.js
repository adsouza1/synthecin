var _body = "",
	_html = "",
	_htmlBody = "",
	_window = "",
	_interTime = "",	
	_layout = "",	
	_fs = "",
	_lazyload = "";
	
	
jQuery(document).ready(function() {		
		
	_body = jQuery('body');
	_html = jQuery('html');
	_htmlBody = jQuery('html, body');
	_window = jQuery(window);
	_layout = jQuery('.layout');					
	_fs = jQuery('.fs');
	
	if(isMobile()){
		_html.addClass('mobile');
	}
	
	_window.load(function() {										
		
		_window.on('resize customResize',function() {																						
				
			if(_interTime){
				clearTimeout(_interTime);
				_interTime = "";
			}
			
			_interTime = setTimeout(function(){																																																																									
				fs();				
			}, 0);							
	 
		}).trigger('customResize');	
		
		_html.addClass('window-loaded');
		
		lazyloadInit();	
		
		if(jQuery('.home-intro-video').length) {
			jQuery('.home-intro-video').vide({
				mp4: 'videos/athelaslandingvid',
				webm: 'videos/athelaslandingvid',
				ogv: 'videos/athelaslandingvid',
				poster: 'images/backgrounddark'
			}, {
				volume: 1,
				playbackRate: 1,
				muted: true,
				loop: true,
				autoplay: true,
				position: '50% 0%',
				posterType: 'png',
				resizing: true,
				bgColor: 'transparent',
				className: ''
			});	
		}
		
		
		if(jQuery(".various").length) {
			jQuery(".various").fancybox({
				maxWidth  : 1200,
				maxHeight : 1000,
				fitToView : false,
				width   : '70%',
				height    : '70%',
				autoSize  : false,
				closeClick  : false,
				openEffect  : 'elastic',
				closeEffect : 'none'
			});
		}

							
    });						
	
});


function lazyloadInit(){//for lagyload images 		
	
	if(jQuery('.lazyload').length){	
	
		_lazyload = new Blazy({
			selector:'.lazyload:not(.loaded)', 
			src:'data-original',
			success: function(ele){
				var imgLoader = jQuery(ele).parent('.lazyload-image-loader');
				imgLoader.addClass('loaded');	
				jQuery(ele).addClass('loaded'); 	
			}
		});	
						
		_window.off('lazyload').on('lazyload',function(){
			_lazyload.revalidate();
		});			
										
	} 
	  
} 


function fs(){//for set section to fullscreen.

	if(_fs.length){
		_fs.height(_window.height());
	}
	
}


function isMobile() {//for detect mobile browser

   var appsVersion = navigator.appVersion,
	   isAndroid = (/android/gi).test(appsVersion),
	   isIOS = (/iphone|ipad|ipod/gi).test(appsVersion);
   return (isAndroid || isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));
   
}