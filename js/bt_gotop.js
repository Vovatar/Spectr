/* Go Top Button Effect AUTO | based on: http://briancray.com/2009/10/06/scroll-to-top-link-jquery-css/ */
jQuery(function () { /* run this code on page load (AKA DOM load) */
 
	/* set variables locally for increased performance */
	var scroll_timer;
	var displayed = false;
	var $message = jQuery('#gotop_message a');
	var $window = jQuery(window);
	var top = jQuery(document.body).children(0).position().top;
 
	/* react to scroll event on window */
	$window.scroll(function () {
		window.clearTimeout(scroll_timer);
		scroll_timer = window.setTimeout(function () { /* use a timer for performance */
			if($window.scrollTop() <= top) /* hide if at the top of the page */
			{
				displayed = false;
				$message.fadeOut(500);
			}
			else if(displayed == false) /* show if scrolling down */
			{
				displayed = true;
				$message.stop(true, true).show().click(function () { $message.fadeOut(500); });
			}
		}, 100);
	});
});

var bt_go_top = jQuery.noConflict();
bt_go_top(document).ready(function() {
    var offset = 220;
    var duration = 500;
    bt_go_top('.back-to-top').click(function(event) {
        event.preventDefault();
        bt_go_top('body,html').animate({scrollTop: 0}, duration);
        return false;
    })
});
