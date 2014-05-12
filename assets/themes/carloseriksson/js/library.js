!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function j(){var b=0;g.each(function(){var c=a(this);if(!i.skip_invisible||c.is(":visible"))if(a.abovethetop(this,i)||a.leftofbegin(this,i));else if(a.belowthefold(this,i)||a.rightoffold(this,i)){if(++b>i.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,g=this,i={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJAQMAAAAB5D5xAAAABGdBTUEAALGPC/xhBQAAAANQTFRF////p8QbyAAAAAtJREFUCNdjYMAJAAAbAAFSROSpAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(i,f)),h=i.container===d||i.container===b?e:a(i.container),0===i.event.indexOf("scroll")&&h.bind(i.event,function(){return j()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",i.placeholder),c.one("appear",function(){if(!this.loaded){if(i.appear){var d=g.length;i.appear.call(b,d,i)}a("<img />").bind("load",function(){var d=c.attr("data-"+i.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[i.effect](i.effect_speed),b.loaded=!0;var e=a.grep(g,function(a){return!a.loaded});if(g=a(e),i.load){var f=g.length;i.load.call(b,f,i)}}).attr("src",c.attr("data-"+i.data_attribute))}}),0!==i.event.indexOf("scroll")&&c.bind(i.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){j()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&g.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){j()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);
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

    //Lazy load images
    $("img.lazy").lazyload({
        threshold: 100,
        skip_invisible : false
    });

    //Disqus loader

    function loadDisqus() {
        if(! disqusLoaded) {
            disqusToggler.addClass('is-disabled');
            var disqus_shortname = 'fiinix';
            var dsq = document.createElement('script');
            dsq.type = 'text/javascript';
            dsq.async = true;
            dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            disqusLoaded = true;
        }
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

    if(window.location.hash.indexOf('#comment-') >= 0) {
        html.add(body).animate({
            scrollTop: disqusComments.offset().top
        }, 0);
        loadDisqus();
    };

    disqusToggler.click(function() {
            loadDisqus();
    });

});