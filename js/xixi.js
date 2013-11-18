$(document).ready(function(){	
	$('#gallery').spacegallery({loadingClass: 'loading', perspective: 100});
	$(".external").click(function() {
		window.open( $(this).attr('href') );
		return false;
	})
});