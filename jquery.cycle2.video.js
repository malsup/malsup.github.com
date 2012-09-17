/*! video plugin for Cycle2;  version: BETA-20120916 */
(function($) {
"use strict";

$.extend($.fn.cycle.defaults, {
    autostart:  true,
    autostop:  true
});    

$(document).on( 'cycle-bootstrap', function( e, opts ) {
    opts.hideNonActive = false;
});

$(document).on( 'cycle-before', function( e, opts ) {
});

$(document).on( 'cycle-after', function( e, opts ) {
});

})(jQuery);
