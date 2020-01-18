'use strict';

$(document).ready(function() {
	const highlightColor = '#dddddd';


	//
	// Some old WIP stuff.
	//

	// const registerBtn = (btnName, sectionName) => {
	// 	//let tap = ('ontouchstart' in document.documentElement);
	// 	//if (tap)
	// 	//	return;
		
		
	// 	$(btnName).mouseenter(function() {
	// 		$(sectionName).css('background-color', highlightColor);
	// 	});
	// 	$(btnName).mouseleave(function() {
	// 		$(sectionName).css('background-color', '#ffffff');
	// 	});
	// }
	//registerBtn('#link-me', '.section.me');
	//registerBtn('#link-stuff', '.section.stuff');
	//registerBtn('#link-skills', '.section.skills');



	//
	//  When clicked on a project reference, highlight said project.
	//

	const registerHighlight = (hrefTarget, sectionName, btnClassName = 'td.skill-name .ref') => {
		$(btnClassName).each(function() {
			if ($(this).attr('href') !== hrefTarget) {
				return;
			}
	
			//$(this).mouseenter(function() {
			//	$(sectionName).css('background-color', highlightColor);
			//});
			//$(this).mouseleave(function() {
			//	$(sectionName).css('background-color', '#ffffff');
			//});
			$(this).click(function() {
				$(sectionName).css('background-color', highlightColor);
				setTimeout(function() {
					$(sectionName).css('background-color', '#ffffff');
				}, 1000);
			});
		});
	}

	registerHighlight('#project-zmr', '#section-project-zmr');
	registerHighlight('#project-interview', '#section-project-interview');
	registerHighlight('#project-influx', '#section-project-influx');
	registerHighlight('#project-ezauto', '#section-project-ezauto');
	registerHighlight('#project-ssdb', '#section-project-ssdb');
	registerHighlight('#project-sfuws', '#section-project-sfuws');
	

	//
	// Nav bar that follows you
	//
	let navbar = $('#nav-bar');

	// Add a bit in case something goes wrong
	const stickyPos = $('#section-me').offset().top - navbar.height() - 1;

	$(window).scroll(function() {
		if (window.pageYOffset >= stickyPos)
		{
			navbar.addClass('sticky');
			navbar.removeClass('position-absolute');
		}
		else
		{
			navbar.addClass('position-absolute');
			navbar.removeClass('sticky');
		}
	});

	// Make sure the bar appears on refresh.
	$(window).scroll();
});

