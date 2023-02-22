(function(ctx) {
	function initNav() {
		$('.section-toggle').click(function(e) {
			e.preventDefault();
			$('.tab-section').hide();
			$('#' + $(this).data('tab')).fadeIn(500);
		});
		$('.section-toggle:first').trigger('click');
	};
	
	$(function() {
		initNav();
		location.hash = "#";
	});
})(window);