$.event.special.swipe = $.extend($.event.special.swipe, {
	start: function( event ) {
 		var data = event.originalEvent.touches ?
			event.originalEvent.touches[ 0 ] : event;
		return {
			time: ( new Date() ).getTime(),
			coords: [ data.pageX, data.pageY ],
			origin: $( event.target ),
			offset: $('body').scrollTop()
		};
	},

	stop: function( event ) {
 		var data = event.originalEvent.touches ?
			event.originalEvent.touches[ 0 ] : event;
		return {
			time: ( new Date() ).getTime(),
			coords: [ data.pageX, data.pageY ],
			offset: $('body').scrollTop()
		};
	},

	handleSwipe: function( start, stop ) {
		var swipe = $.event.special.swipe,
			x = Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ),
			y = Math.abs( start.coords[ 1 ] - stop.coords[ 1 ] ),
			offset =  Math.abs( start.offset - stop.offset ),
			time = stop.time - start.time;
		if ( time < swipe.durationThreshold && x > swipe.horizontalDistanceThreshold && ( y  + offset )
				< swipe.verticalDistanceThreshold ) {

			start.origin.trigger( "swipe" ).trigger( ( start.coords[ 0 ] - stop.coords[ 0 ] ) ? "swipeleft" : "swiperight" );
		}
	}
});
