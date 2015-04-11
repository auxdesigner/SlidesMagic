

$( "body" ).append( "<button id='magic' class='hide' style='z-index: 1000;position: absolute;left: 0;bottom: 0;height: 20px;'>Liu's magic</button>" );

$('.hide').click(function(){
	$('#docs-chrome').toggle();
	$('#speakernotes-dragger').remove();
	$('#speakernotes').remove();
	
	$('.filmstrip').toggle();


	
});



