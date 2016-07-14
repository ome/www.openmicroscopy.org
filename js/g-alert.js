(function ($) {
	"use strict";

	$.fn.gAlert = function () {

		return this.each(function () {
			var alert = $(this),
				alertClose = alert.find('.g-alert-close');

			if (alertClose) {
				alertClose.click(function(){
					alert.animate({ height: '0', margin: 0}, 400, function(){
						alert.css('display', 'none');
					});
				});
			}
		});
	};
})(jQuery);

jQuery(document).ready(function() {
	"use strict";

	jQuery('.g-alert').gAlert();
});
