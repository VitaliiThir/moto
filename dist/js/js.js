$(function(){
	var tableFlag = false;
	$(window).resize(function() {

		if ($(window).width() < 1000) {
			if (!tableFlag) { 				 
				tableFlag = true;
				console.log('less 1000'); 
			} 
		} else { 
			if (tableFlag) { 			 
				tableFlag = false;
				console.log('more 1000'); 
			} 
		} 
	})
});

