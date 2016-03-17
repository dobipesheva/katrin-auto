//*********************************
//     INCLUDES
//*********************************

$('header').load('includes/header.html');
$('footer').load('includes/footer.html');

//*********************************
//    GOOGLE MAPS
//*********************************

function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(42.709993, 23.418786),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);

$('#products').click(function (){
    $('more.html').animate({
        scrollTop: $(".partner").offset().top},
    'slow');
    });
    
//*********************************   
//        FANCYBOX
//*********************************

$(document).ready(function(){
  $(".fancybox").fancybox({
		maxWidth	: 600,
		maxHeight	: 400,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'elastic',
		closeEffect	: 'elastic'
	}); 
});

////**************************************
////          KEY LANGUAGE
////**************************************
//var aLangKeys=new Array();
//aLangKeys['en']=new Array();
//aLangKeys['bg']=new Array();
//
//aLangKeys['en']['about-us']='About us';
//aLangKeys['en']['service']='Service';
//aLangKeys['en']['car']='Cars';
//aLangKeys['en']['contact']='Contacts';
//
//aLangKeys['bg']['about-us']='За нас';
//aLangKeys['bg']['service']='Услуги';
//aLangKeys['bg']['car']='Автомобили';
//aLangKeys['bg']['contact']='Контакти';
//
//$(document).ready(function() {
//
//    // onclick behavior
//    $('.lang').click( function() {
//        var lang = $(this).attr('id'); // obtain language id
//        // translate all translatable elements
//        $('.tr').each(function(i){
//          $(this).text(aLangKeys[lang][ $(this).attr('key') ]);
//        });
//    });
//});



