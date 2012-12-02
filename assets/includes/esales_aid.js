/*  JavaScript Document                      */

//Test git fork.. from Ku

var myScroll;
function loaded(){
	myScroll=new iScroll('scroll', {checkDOMChanges:true});
}
document.addEventListener('DOMContentLoaded', loaded, false);

$(document).ready(function(){
	
	
	setOrientationListener();
	
	
	$('nav a').on('click', function(){
		$('nav a').removeClass('selected');
		$(this).addClass('selected');
		changePage(  $(this).attr('data-file'));
		
	})
	
	$('nav a:nth-child(1)').trigger('click');
	
	$('.banner_logo').on('click', function(){
		
		$('nav a:nth-child(1)').trigger('click');
		
	});
	document.addEventListener('touchmove,function(e){e.preventDefault(); }, false');
	window.setTimeout('startMap()',3000);

});


function changePage(fileName) {
	
	$('.content_container').animate({opacity:0},500,function(){
		$('.content_loading_container').load('assets/content/' +fileName, function(){
			$('.content_container').delay(250).animate({opacity:1},500);
		});
		
		if(fileName =='home.html?v=1'){
			$('.page').addClass('home');
		}else{
			$('.page').removeClass('home');
			
			
		}
		if(fileName=='contact_us.html?v=1'){
			
			$('.content_container').addClass('contact_us');
			$('.map_container').removeClass('off').addClass('on');
		}else{
			$('.content_container').removeClass('contact_us');
			$('.map_container').removeClass('on').addClass('off');
		}
	});
  
}



function setOrientationListener(){
	rotationInterval = setInterval( function(){ updateOrientation(); }, 500 );
}

function updateOrientation(){
	if($('body').width() < 1024){
		$('.page').removeClass('landscape').addClass('portrait');
	}else{
		$('.page').removeClass('portrait').addClass('landscape');	
	}
}

function startMap(){
    var latlng = new google.maps.LatLng(34.38576009017598, -119.48599576950073); 
    var myOptions = {zoom: 16, center: latlng, mapTypeId: google.maps.MapTypeId.ROADMAP}; 
    var map = new google.maps.Map(document.getElementById('map_canvas'),myOptions); 
    var marker = new google.maps.Marker({
        position: latlng, 
        map: map,
        title:"Office Location"
    }); 
}

