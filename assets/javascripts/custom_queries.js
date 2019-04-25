/* report links popups */
//inspired from http://blog.brianbeck.com/post/30110260/menu-buttons-in-20-lines-of-jquery
jQuery(function($) {

    $('#sidebar').find('a.query').each(function() {
        $(this).on('click', openBox)
    })

    $('#report_popup').detach().appendTo('body')

    function openBox(e) {
        var $popup  = $('#report_popup')
        if ($popup.length == 0) {
            $popup = $('<div id="report_popup" style="display:none;"><h5></h5><p></p></div>')
            $popup.appendTo($('body'))
        }
        var $button = $(this)
        $popup.find('h5').html($button.html())
        var $p = $popup.find('p')
        $p.html('')
        $('<a>').attr({href: $button.attr('href')})
            .html('dans ce projet')
            .appendTo($p)
        $('<a>').attr({href: $button.attr('href').replace(/.*\/issues/, '/issues')})
            .html('dans tous les projets')
            .appendTo($p)
        $popup.show().css({ left: e.pageX-215, top: e.pageY+10 })
            .click(function(e) { e.stopPropagation() })
            .fadeIn(50, function() { $(document).one('click', {button: $button, menu: $(this)}, closeBox) })
        return false
    }
    function closeBox(e) {
        e.data.menu.hide()
    }
});
