

$( "body" ).append( "<button id='magic' class='hide' style='z-index: 1000;position: absolute;left: 0;bottom: 0;height: 24px; width: 24px; border:none; border-radius: 50px; background: #4285F4;'></button>" );

$('.hide').click(function(){
	$('#docs-chrome').toggle();
	$('#speakernotes-dragger').remove();
	$('#speakernotes').remove();
	
	$('.filmstrip').toggle();


	
});



