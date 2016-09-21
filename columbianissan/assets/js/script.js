// DICK SMITH COLUMBIA NISSAN

// HEADER - RESPONSIVE MENU FUNCTION
$(function() {
	var $menuButton = $("#header-mobile-button");
	var $list = $("#header-nav-list");

	$menuButton.on("click", function(e) {
		$list.toggleClass("active");
		e.preventDefault();
	});
});