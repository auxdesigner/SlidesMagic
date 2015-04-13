

$( "body" ).append( "<button id='magic' class='hide' style='z-index: 1000;position: absolute;left: 8px;bottom: 8px;height: 36px; width: 36px; border:none; border-radius: 50px; background: #F57F17;cursor:pointer;outline:none;box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 5px 0 rgba(0,0,0,.23);'><img src='chrome-extension://chmpcnohjikbnkhidnljgcagpkiplmpb/icon.svg'></button>" );

$('.hide').click(function(){
	$('#docs-chrome').toggle();
	$('#speakernotes-dragger').remove();
	$('#speakernotes').remove();
	
	$('.filmstrip').toggle();


	
});



