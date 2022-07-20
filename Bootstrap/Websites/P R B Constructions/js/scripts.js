// JavaScript Document
$(document).ready(function(e) {
	$('.main-hme-left').css({"animation-name":"slideInLeft","animation-duration":"1s","visibility":"visible"});
	$('.main-hme-right').css({"animation-name":"slideInRight","animation-duration":"1s","visibility":"visible"});	
	$('carouselExampleIndicators').css({"animation-name":"fadeIn","animation-duration":"1s","visibility":"visible"});
	$('.projects-hme .item').css({"animation-name":"zoomIn","animation-duration":"1s","visibility":"visible"});
	});
 var teamid= document.getElementsByClassName('team-info');
  for(i=0;i<teamid.length;i++)
  {
	  teamid.item(i).id='teamid'+i;
  }
  function modal_load(the_id)
  {
	 var teaminfo_id=document.getElementById(the_id);
	 var modalid=document.getElementById("modal-content");
	 var modal_img=teaminfo_id.getElementsByTagName('p').item(0).innerHTML;
	 var modal_head=teaminfo_id.getElementsByTagName('h4').item(0).innerHTML;
	 var modal_sub_head=teaminfo_id.getElementsByTagName('h6').item(0).innerHTML;
	 var modal_text=teaminfo_id.getElementsByTagName('p').item(1).innerHTML;
	 modalid.getElementsByTagName('p').item(0).innerHTML=modal_img;
	 modalid.getElementsByTagName('h4').item(0).innerHTML=modal_head;
	 modalid.getElementsByTagName('h6').item(0).innerHTML=modal_sub_head;
	 modalid.getElementsByTagName('p').item(1).innerHTML=modal_text;
  }