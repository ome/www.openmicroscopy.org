(function ($) {
	"use strict";

	$.fn.wTabs = function () {


		return this.each(function () {
			var tabs = $(this),
				items = tabs.find('.w-tabs-item'),
				sections = tabs.find('.w-tabs-section'),
				resizeTimer = null,
				itemsWidth = 0,
				running = false;

			items.each(function(){
				itemsWidth += $(this).outerWidth(true);
			});

			function tabs_resize(){
				if ( ! (tabs.hasClass('layout_accordion') && ! tabs.data('accordionLayoutDynamic'))) {
					if (itemsWidth > tabs.width()) {
						tabs.data('accordionLayoutDynamic', true);
						if ( ! tabs.hasClass('layout_accordion')) {
							tabs.addClass('layout_accordion');
						}
					} else {
						if (tabs.hasClass('layout_accordion')) {
							tabs.removeClass('layout_accordion');
						}
					}
				}
			}

			tabs_resize();

			$(window).resize(function(){
				window.clearTimeout(resizeTimer);
				resizeTimer = window.setTimeout(function(){
					tabs_resize();
				}, 50);

			});

			sections.each(function(index){
				var item = $(items[index]),
					section = $(sections[index]),
					section_title = section.find('.w-tabs-section-title'),
					section_content = section.find('.w-tabs-section-content');

				if (section.hasClass('active')) {
					section_content.slideDown();
				}

				section_title.click(function(){
					if (tabs.hasClass('type_toggle')) {
						if ( ! running) {
							if (section.hasClass('active')) {
								running = true;
								if (item) {
									item.removeClass('active');
								}
								section_content.slideUp(null, function(){
									section.removeClass('active');
									running = false;
								});
							} else {
								running = true;
								if (item) {
									item.addClass('active');
								}
								section_content.slideDown(null, function(){
									section.addClass('active');
									running = false;
								});
							}
						}


					} else if (( ! section.hasClass('active')) && ( ! running)) {
						running = true;
						items.each(function(){
							if ($(this).hasClass('active')) {
								$(this).removeClass('active');
							}
						});
						if (item) {
							item.addClass('active');
						}

						sections.each(function(){
							if ($(this).hasClass('active')) {
								$(this).find('.w-tabs-section-content').slideUp();
							}
						});

						section_content.slideDown(null, function(){
							sections.each(function(){
								if ($(this).hasClass('active')) {
									$(this).removeClass('active');
								}
							});
							section.addClass('active');
							running = false;
						});

					}

				});

				if (item)
				{
					item.click(function(){
						section_title.click();
					});
				}


			});

		});
	};
})(jQuery);

jQuery(document).ready(function() {
	"use strict";

	jQuery('.w-tabs').wTabs();
});
