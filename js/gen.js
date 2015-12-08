// JavaScript Document

//Mail
function _sendMail() {
	//$('#output').animatescroll({scrollSpeed:2000,easing:'easeOutQuint'});
	var gender ="";
	if ($('input:radio[name=gender]:checked').val()!='undefined') {
		gender = $('input:radio[name=gender]:checked').val();
	}
	var user="";
	if ($('#cname').val() != '') {
		user = gender + "" + $('#cname').val() + "";
	}
	window.open("mailto:andrey.nikiforov@my2bytes.com?subject=Inquiry of "+user+"from My2bytes site&body="+$('#ccomment').val()+"",'_blank');
	location.href = "#Contacts";
}

//toTop
$(function(){
  $.fn.scrollToTop=function(){
    $(this).hide().removeAttr("href");
    if($(window).scrollTop()!="0"){
        $(this).fadeIn("slow")
  }
  var scrollDiv=$(this);
  $(window).scroll(function(){
    if($(window).scrollTop()=="0"){
    $(scrollDiv).fadeOut("slow")
    }else{
    $(scrollDiv).fadeIn("slow")
  }
  });
    $(this).click(function(){
      $("html, body").animate({scrollTop:0},"slow")
    })
  }
});
$(function() {$("#toTop").scrollToTop();});

// for SVG position
$(document).ready(function(){
	_resizeMap();
	});
	$(window).resize(function () {
	_resizeMap();
});

function _resizeMap() {
	var page_w = $("html").width();
	var page_h = $(window).height();
	var koeff_html = page_w/page_h;
	//var svg_w = 255;
	//var svg_h = 156;
	var svg_w = $("#sky").width();
	var svg_h = $("#sky").height();
	var koeff_svg = svg_w/svg_h;
	var _l = 0;
	var _c = '';
	if (koeff_html>=koeff_svg) {
		// лишние вершины
    	$('#sky').css({'left' : 0});
		//var delta_w = page_w/svg_w;
   		 $('#sky').css({'width' : page_w+'px'});
		//$("#sky").width() = page_w;
		_l = (svg_h-page_h)/2
		_c = '-'+_l+'px';
   		 $('#sky').css({'top' : _c});
	} else {
		// лишние боковины
    	$('#sky').css({'top' : 0})
		var delta_h = page_h/svg_h;
		svg_w = svg_w*delta_h;
   		 $('#sky').css({'width' : svg_w+'px'});
		_l = (svg_w-page_w)/2
		_c = '-'+_l+'px';
   		 $('#sky').css({'left' : _c});
	}
}