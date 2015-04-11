

$( "body" ).append( "<button id='magic' class='hide' style='z-index: 1000;position: absolute;left: 8px;bottom: 8px;height: 24px; width: 24px; border:none; border-radius: 50px; background: #F57F17;cursor:pointer;outline:none'></button>" );

$('.hide').click(function(){
	$('#docs-chrome').toggle();
	$('#speakernotes-dragger').remove();
	$('#speakernotes').remove();
	
	$('.filmstrip').toggle();


	
});



