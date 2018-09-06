$(document).foundation()

$(function(){
	// We don't want main menu top links to be 'active' as links
	// We can't replace the <a> because foundation uses them for collapsible menu on mobile
	// and we can't set href="#" since the travis build fails.
	$("#main-menu .has-submenu>a").click(event => event.preventDefault());
});
