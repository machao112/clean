$(function(){
	// include()
	toggleMenu();
	dispplayService();
	scrollDesign();
	activeTermi();
	magicForm();
});

function toggleMenu() {
	$('.toggle-mobile-menu').click(function(){
		$(this).next().toggleClass('open');
	});
}
function dispplayService() {
	var services = [
		{"icon": "icon-connection", "name":"Graphic design", "info":"Lorem ipsum dolor sit amet, consectetur adipisicing elit,\
															 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
		{"icon": "icon-link", "name":"Graphic design", "info":"Lorem ipsum dolor sit amet, consectetur adipisicing elit,\
															 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
		{"icon": "icon-cogs", "name":"Graphic design", "info":"Lorem ipsum dolor sit amet, consectetur adipisicing elit,\
															 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
		{"icon": "icon-youtube", "name":"Graphic design", "info":"Lorem ipsum dolor sit amet, consectetur adipisicing elit,\
															 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
	];

	services.forEach(function(service) {
		var item = '<div class="col-lg-6">\
							<div class="row">\
								<div class="col-xs-12 col-sm-4 col-lg-12 align-self-center icon">\
									<p class="'+service.icon+'"></p>\
								</div>\
								<div class="col-xs-12 col-sm-8 col-lg-12 info">\
									<p>'+service.name+'</p>\
									<p>'+service.info+'</p>\
								</div>\
							</div>\
					</div>';
		$('.wrap-items').append(item);
	});
}


function scrollDesign() {
	$(window).scroll(function() {
		var wScroll = $(window).scrollTop();
		var offsetTeam = $('.team').offset().top;
		if (wScroll > offsetTeam - $(window).height()/2) {
			$('.align-self-start').addClass('top');
			$('.align-self-center').addClass('bottom');
		} else {
			$('.align-self-start').removeClass('top');
			$('.align-self-center').removeClass('bottom');
		}
	});

}



function activeTermi() {
	var termis = [
		{"image":"client-photo-1.png", "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet Lorem ipsum dolor sit amet, consec"},
		{"image":"client-photo-1.png", "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet Lorem ipsum dolor sit amet, consec"},
		{"image":"client-photo-1.png", "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet Lorem ipsum dolor sit amet, consec"},
	];

	termis.forEach(function(termi) {
		var contents = '<div class="slide">\
							<p>'+termi.content+'</p>\
							<div class="avatar">\
								<img src="images/'+termi.image+'">\
							</div>\
						</div>'

		var dot = '<span></span>';

		$('.slides').append(contents);
		$('.dots').append(dot);
	});

	$('.dots span').first().addClass('active');
	$('.slide').first().addClass('active');

	$('.dots span').click(function(){
		var $this = $(this),
			$siblings = $this.parent().children(),
			position = $siblings.index(this);

		$('.slide').removeClass('active').eq(position).addClass('active');
		$siblings.removeClass('active');
		$this.addClass('active');
	});
}

function magicForm() {
	$('.form-control').focusout(function() {
		var $value = $(this).val();
		if($value === '') {
			$(this).removeClass('has-value');
		} else {
			$(this).addClass('has-value');
		}
	});
}

function include() {
	var $includes = $('[data-include]');
	$includes.each(function() {
		var file = 'includes/' + $(this).data('include') + '.html';
	    $(this).load(file);
	})
}