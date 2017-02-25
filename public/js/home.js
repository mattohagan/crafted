$(document).ready(function(){

	$('.scroll').each(function(){
		$(this).click(function(e){
			e.preventDefault();
			let href = $(this).attr('href');
			scrollToAnchor(href);
		});
	});

	$('.preview img').click(function(e){

		let doc = document.documentElement;
		let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
		console.log(top);

		console.log(this);
		console.log($(this).offset());
		console.log($(this).position());

		console.log($(this).width());

		$(this).parent().css({
			width: $(this).parent().width(),
			height: $(this).parent().height()
		});

		$(this).css({
			transition: 'none',
			'-webkit-transition': 'none',
			'-moz-transition': 'none',
			position:'fixed',
			top:$(this).offset().top - top,
		    left:$(this).offset().left,
		    width:$(this).width() + 'px'
		});

		let el = this;
		setTimeout(function(){
			$(el).addClass('transitions');
			$(el).toggleClass('expand');
		}, 10);

	});

	$(document).keyup(function(e) {
		// escape key
		if (e.keyCode == 27) {
			let expanded = $('.expand');
			$(expanded).removeClass('transitions');
			$(expanded).css({
				position: 'relative',
				top: 'initial',
				left: 'initial',
				width: '100%'
			})
			$(expanded).removeClass('expand');
		}
	});
});


function scrollToAnchor(id){
    let tag = $(id);
    $('html,body').animate({scrollTop: tag.offset().top},'slow');
}


