$(function() {

    //Create variables

    var html = $('html');
    var body = $('body');
    var nav = $('nav');
    var navToggler = $('#js-toggle-nav');
    var modeToggler = $('#js-toggle-mode');

    var disqusComments = $('.js-disqus-comments');
    var disqusLoaded = false;
    var disqusToggler = $('.js-request-disqus');

    html.addClass('js');

    //Disqus loader

    function loadDisqus() {
        var disqus_shortname = 'fiinix';
        var dsq = document.createElement('script');
        dsq.type = 'text/javascript';
        dsq.async = true;
        dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        disqusLoaded = true;
    }

    navToggler.click(function() {
        navToggler.toggleClass('toggle-nav--is-active');
        nav.toggleClass('nav--is-active');
        return false;
    });

    modeToggler.click(function() {
        modeToggler.toggleClass('toggle-mode--is-nightmode');
        body.toggleClass('body--is-nightmode');
        return false;
    });

    //Load Disqus on visitor request

    if(window.location.hash.indexOf('#comments') > 0)
    loadDisqus();

    disqusToggler.click(function() {
        if(! disqusLoaded) {
            $(this).addClass('is-disabled');
            console.log('Load Disqus');
            loadDisqus();
        }
    });

});