$(document) .ready(function() {
	$('#top-menu') .on('click',function(){
		$('nav').toggleClass('show');
	});

	// $('.level-1 > li').on('click', function(event){
	// 	event.preventDefault()
	// 	$(this).find('.level-2').css('display','block');
	// });
});
$(document).ready(function(){
	$('.level-1 li a').click(function(e){
		var dropDown = $(this).parent().next();
		$('.down').not(dropDown).slideUp('slow');
		dropDown.slideToggle('slow');
		e.preventDefault();
	})	
	
});