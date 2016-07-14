(function ($) {
	"use strict";

	$.fn.wTimeline = function () {

		return this.each(function () {
			var timeline = $(this),
				items = timeline.find('.w-timeline-item'),
				sections = timeline.find('.w-timeline-section'),
				running = false,
				sectionsWrapper = timeline.find('.w-timeline-sections'),
				sumWidth = 0,
				sectionsContainer = $('<div></div>', {id: 'section_container'}).css({position: 'relative'}),
				resizeTimer = null,
				sectionsPadding = $(sections[0]).innerWidth() - $(sections[0]).width(),
				activeIndex = 0,
				sectionsContainerPresent;

			$(sections).css({display: 'block'});
			$(sectionsWrapper).css({position: 'relative'});

			function timeline_resize(){
				sectionsWrapper.css({width: timeline.innerWidth()-sectionsWrapper.css('border-left-width')-sectionsWrapper.css('border-right-width')+'px'});
				$(sections).css({width: sectionsWrapper.innerWidth()-sectionsPadding+'px'});

				if ($(window).width() < 768) {
					if ( ! timeline.hasClass('type_vertical')) {
						timeline.addClass('type_vertical');
					}
					if (sectionsContainerPresent === true || sectionsContainerPresent === undefined ){
						sectionsWrapper.css({ height: 'auto', overflow: 'visible'});
						$(sections).css({float: 'none'});
						$(sections).each(function(sectionIndex, section) {
							var section_content = $(section).find('.w-timeline-section-content');
							if (!$(section).hasClass('active')) {
								section_content.css('display', 'none');
							}
							sectionsWrapper.append(section);
						});
						sectionsContainer.remove();
						sectionsContainerPresent = false;
					}
				} else {
					if (timeline.hasClass('type_vertical')) {
						timeline.removeClass('type_vertical');
					}
					sectionsWrapper.css({ height: $(sections[activeIndex]).outerHeight()+'px', overflow: 'hidden'});
					sumWidth = sections.length*(sectionsWrapper.innerWidth());
					var leftPos = -activeIndex*(sectionsWrapper.innerWidth());
					sectionsContainer.css({width: sumWidth+'px', height: $(sections[activeIndex]).outerHeight()+'px', left: leftPos});
					if (sectionsContainerPresent === false || sectionsContainerPresent === undefined){
						sectionsContainer = $('<div></div>', {id: 'section_container'}).css({position: 'relative'});
						$(sections).css({float: 'left'});
						$(sections).each(function(sectionIndex, section) {
							var section_content = $(section).find('.w-timeline-section-content');
							section_content.css({'display': 'block', 'height': 'auto'});
							sectionsContainer.append(section);
						});

						sectionsContainer.css({width: sumWidth+'px', height: $(sections[activeIndex]).outerHeight()+'px', left: leftPos});
						sectionsWrapper.append(sectionsContainer);
						sectionsContainerPresent = true;
					}
				}
			}

			timeline_resize();

			$(window).resize(function(){
				window.clearTimeout(resizeTimer);
				resizeTimer = window.setTimeout(function(){
					timeline_resize();
				}, 50);

			});

			sections.each(function(index, element){
				var section = $(element),
					item = $(items[index]),
					section_title = section.find('.w-timeline-section-title'),
					section_content = section.find('.w-timeline-section-content');

				if(item.length)
				{
					item.click(function(){
						if (( ! section.hasClass('active')) && ( ! running)) {
							running = true;
							items.each(function(){
								if ($(this).hasClass('active')) {
									$(this).removeClass('active');
								}
							});
							if (item.length) {
								item.addClass('active');
							}

							var leftPos = -index*(sectionsWrapper.innerWidth());
							sectionsWrapper.animate({height: section.outerHeight()}, 300);
							sectionsContainer.animate({left: leftPos}, 300, function(){
								sections.each(function(){
									if ($(this).hasClass('active')) {
										$(this).removeClass('active');
									}
								});
								section.addClass('active');
								activeIndex = index;
								running = false;
							});

						}
					});
				}

				if(section_title.length)
				{
					section_title.click(function() {
						if (( ! section.hasClass('active')) && ( ! running)) {
							running = true;
							var currentHeight, newHeight;
							items.each(function(){
								if ($(this).hasClass('active')) {
									$(this).removeClass('active');
								}
							});
							if (item.length) {
								item.addClass('active');
							}

							sections.each(function(){
								if ($(this).hasClass('active')) {
									currentHeight = $(this).find('.w-timeline-section-content').height();
									$(this).find('.w-timeline-section-content').slideUp();
								}
							});

							newHeight = section_content.height();

							if (activeIndex < index) {

								$('html').animate({scrollTop: $('html').scrollTop() - currentHeight});
							}

							section_content.slideDown(null, function(){
								sections.each(function(){
									if ($(this).hasClass('active')) {
										$(this).removeClass('active');
									}
								});
								section.addClass('active');
								activeIndex = index;
								running = false;
							});

						}
					});
				}


			});

		});
	};
})(jQuery);

jQuery(document).ready(function() {
	"use strict";

	jQuery('.w-timeline').wTimeline();
});
