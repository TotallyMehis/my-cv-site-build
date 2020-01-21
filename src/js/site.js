'use strict';

function toggleStuff() {

}

$(document).ready(function() {
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

	// Find all the possible projects and register the highlight.
	$('[id^=project-]').each(function() {
		const myId = $(this).attr('id');
		const id = myId.replace(/project-/, '');


		const hrefTarget = '#'+myId;
		const sectionName = '#section-project-'+id;

		console.log("Href Target: "+hrefTarget+" | Project section: "+sectionName);

		// For all the reference links:
		$('.skill-ref').each(function() {
			if ($(this).attr('href') !== hrefTarget) {
				return;
			}
	
			// When clicked, highlight the project section.
			$(this).click(function() {
				const section = $(sectionName);

				section.addClass('highlight-ref');
				setTimeout(function() {
					section.removeClass('highlight-ref');
				}, 1000);
			});
		});
	});


	//
	// Highlight specific areas of the site when highlight button is pressed.
	//
	const highlightFunc = ((name, targetClass) => {
		$(name).click(function() {
			// Toggle
			const state = !$(this).hasClass('pressed');
	
			$(targetClass).each(function() {
				$(this).toggleClass('highlight-now', state);
			});
	
			$(this).toggleClass('pressed', state);
		});
	});


	highlightFunc('#highlight-toggle-web', '.highlight-web');
	highlightFunc('#highlight-toggle-systems', '.highlight-systems');

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

