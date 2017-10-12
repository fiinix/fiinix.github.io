/*!
 * Simple-Jekyll-Search v1.4.0 (https://github.com/christian-fei/Simple-Jekyll-Search)
 * Copyright 2015, Christian Fei
 * Licensed under MIT (https://github.com/christian-fei/Simple-Jekyll-Search/blob/master/LICENSE.md)
 */
!function t(e,r,n){function i(o,a){if(!r[o]){if(!e[o]){var c="function"==typeof require&&require;if(!a&&c)return c(o,!0);if(u)return u(o,!0);var s=new Error("Cannot find module '"+o+"'");throw s.code="MODULE_NOT_FOUND",s}var f=r[o]={exports:{}};e[o][0].call(f.exports,function(t){var r=e[o][1][t];return i(r||t)},f,f.exports,t,e,r,n)}return r[o].exports}for(var u="function"==typeof require&&require,o=0;o<n.length;o++)i(n[o]);return i}({1:[function(t,e,r){"use strict";e.exports=function(t,e){var r=e.length,n=t.length;if(n>r)return!1;if(n===r)return t===e;t:for(var i=0,u=0;i<n;i++){for(var o=t.charCodeAt(i);u<r;)if(e.charCodeAt(u++)===o)continue t;return!1}return!0}},{}],2:[function(t,e,r){"use strict";function n(t,e){return function(){if(4===t.readyState&&200===t.status)try{e(null,JSON.parse(t.responseText))}catch(r){e(r,null)}}}function i(){return window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")}e.exports={load:function(t,e){var r=i();r.open("GET",t,!0),r.onreadystatechange=n(r,e),r.send()}}},{}],3:[function(t,e,r){"use strict";e.exports=function n(t){if(!function(t){return!!t&&"undefined"!=typeof t.required&&t.required instanceof Array}(t))throw new Error("-- OptionsValidator: required options missing");if(!(this instanceof n))return new n(t);var e=t.required;this.getRequiredOptions=function(){return e},this.validate=function(t){var r=[];return e.forEach(function(e){"undefined"==typeof t[e]&&r.push(e)}),r}}},{}],4:[function(t,e,r){"use strict";function n(t){return!!t&&"[object Object]"===Object.prototype.toString.call(t)}function i(t){return!!t&&"[object Array]"===Object.prototype.toString.call(t)}function u(t){return p.push(t),p}function o(t){for(var e=[],r=0;r<t.length;r++)n(t[r])&&e.push(u(t[r]));return e}function a(t,e,r,n){for(var i=[],u=0;u<t.length&&i.length<n.limit;u++){var o=c(t[u],e,r,n);o&&i.push(o)}return i}function c(t,e,r,n){for(var i in t)if(!s(t[i],n.exclude)&&r.matches(t[i],e))return t}function s(t,e){var r=!1;e=e||[];for(var n=0;n<e.length;n++){var i=e[n];!r&&new RegExp(t).test(i)&&(r=!0)}return r}e.exports={put:function(t){return n(t)?u(t):i(t)?o(t):undefined},clear:function(){return p.length=0,p},get:function(){return p},search:function(t){return t?a(p,t,h.searchStrategy,h):[]},setOptions:function(t){(h=t||{}).fuzzy=t.fuzzy||!1,h.limit=t.limit||10,h.searchStrategy=t.fuzzy?f:l}};var f=t("./SearchStrategies/FuzzySearchStrategy"),l=t("./SearchStrategies/LiteralSearchStrategy"),p=[],h={};h.fuzzy=!1,h.limit=10,h.searchStrategy=h.fuzzy?f:l},{"./SearchStrategies/FuzzySearchStrategy":5,"./SearchStrategies/LiteralSearchStrategy":6}],5:[function(t,e,r){"use strict";var n=t("fuzzysearch");e.exports=new function(){this.matches=function(t,e){return n(e,t)}}},{fuzzysearch:1}],6:[function(t,e,r){"use strict";e.exports=new function(){this.matches=function(t,e){return"string"==typeof t&&(t=t.trim()).toLowerCase().indexOf(e.toLowerCase())>=0}}},{}],7:[function(t,e,r){"use strict";e.exports={compile:function(t){return n.template.replace(n.pattern,function(e,r){var i=n.middleware(r,t[r],n.template);return void 0!==i?i:t[r]||e})},setOptions:function(t){n.pattern=t.pattern||n.pattern,n.template=t.template||n.template,"function"==typeof t.middleware&&(n.middleware=t.middleware)}};var n={};n.pattern=/\{(.*?)\}/g,n.template="",n.middleware=function(){}},{}],8:[function(t,e,r){!function(e,r){"use strict";function n(t){y.put(t),a()}function i(t){m.load(t,function(e,r){e&&l("failed to get JSON ("+t+")"),n(r)})}function u(){p.resultsContainer.innerHTML=""}function o(t){p.resultsContainer.innerHTML+=t}function a(){p.searchInput.addEventListener("keyup",function(t){if(f(t.which)){u();var e=t.target.value;s(e)&&c(y.search(e))}})}function c(t){var e=t.length;if(0===e)return o(p.noResultsText);for(var r=0;r<e;r++)o(d.compile(t[r]))}function s(t){return t&&t.length>0}function f(t){return-1===[13,16,20,37,38,39,40,91].indexOf(t)}function l(t){throw new Error("SimpleJekyllSearch --- "+t)}var p={searchInput:null,resultsContainer:null,json:[],searchResultTemplate:'<li><a href="{url}" title="{desc}">{title}</a></li>',templateMiddleware:function(){},noResultsText:"No results found",limit:10,fuzzy:!1,exclude:[]},h=["searchInput","resultsContainer","json"],d=t("./Templater"),y=t("./Repository"),m=t("./JSONLoader"),S=t("./OptionsValidator")({required:h}),g=t("./utils");e.SimpleJekyllSearch=function(t){S.validate(t).length>0&&l("You must specify the following required options: "+h),p=g.merge(p,t),d.setOptions({template:p.searchResultTemplate,middleware:p.templateMiddleware}),y.setOptions({fuzzy:p.fuzzy,limit:p.limit}),g.isJSON(p.json)?n(p.json):i(p.json)},e.SimpleJekyllSearch.init=e.SimpleJekyllSearch,"function"==typeof e.SimpleJekyllSearchInit&&e.SimpleJekyllSearchInit.call(this,e.SimpleJekyllSearch)}(window,document)},{"./JSONLoader":2,"./OptionsValidator":3,"./Repository":4,"./Templater":7,"./utils":9}],9:[function(t,e,r){"use strict";e.exports={merge:function(t,e){var r={};for(var n in t)r[n]=t[n],"undefined"!=typeof e[n]&&(r[n]=e[n]);return r},isJSON:function(t){try{return!!(t instanceof Object&&JSON.parse(JSON.stringify(t)))}catch(e){return!1}}}},{}]},{},[8]);
/*! lazyload 1.5.5 by Andrea "verlok" Verlicchi */
var _extends = Object.assign || function (a) {
        for (var b = 1; b < arguments.length; b++) {
            var c = arguments[b];
            for (var d in c)Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
        }
        return a
    }, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
        return typeof a
    } : function (a) {
        return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
    };
!function (a, b) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.LazyLoad = b()
}(this, function () {
    "use strict";
    var a = {
        elements_selector: "img",
        container: window,
        threshold: 300,
        throttle: 150,
        data_src: "original",
        data_srcset: "originalSet",
        class_loading: "loading",
        class_loaded: "loaded",
        class_error: "error",
        class_initial: "initial",
        skip_invisible: !0,
        callback_load: null,
        callback_error: null,
        callback_set: null,
        callback_processed: null
    }, b = !("onscroll" in window) || /glebot/.test(navigator.userAgent), c = function (a, b) {
        a && a(b)
    }, d = function (a) {
        return a.getBoundingClientRect().top + window.pageYOffset - a.ownerDocument.documentElement.clientTop
    }, e = function (a, b, c) {
        return (b === window ? window.innerHeight + window.pageYOffset : d(b) + b.offsetHeight) <= d(a) - c
    }, f = function (a) {
        return a.getBoundingClientRect().left + window.pageXOffset - a.ownerDocument.documentElement.clientLeft
    }, g = function (a, b, c) {
        var d = window.innerWidth;
        return (b === window ? d + window.pageXOffset : f(b) + d) <= f(a) - c
    }, h = function (a, b, c) {
        return (b === window ? window.pageYOffset : d(b)) >= d(a) + c + a.offsetHeight
    }, i = function (a, b, c) {
        return (b === window ? window.pageXOffset : f(b)) >= f(a) + c + a.offsetWidth
    }, j = function (a, b, c) {
        return !(e(a, b, c) || h(a, b, c) || g(a, b, c) || i(a, b, c))
    }, k = function (a, b) {
        var c = new a(b), d = new CustomEvent("LazyLoad::Initialized", {detail: {instance: c}});
        window.dispatchEvent(d)
    }, l = function (a, b) {
        var c = a.parentElement;
        if ("PICTURE" === c.tagName)for (var d = 0; d < c.children.length; d++) {
            var e = c.children[d];
            if ("SOURCE" === e.tagName) {
                var f = e.dataset[b];
                f && e.setAttribute("srcset", f)
            }
        }
    }, m = function (a, b, c) {
        var d = a.tagName, e = a.dataset[c];
        if ("IMG" === d) {
            l(a, b);
            var f = a.dataset[b];
            return f && a.setAttribute("srcset", f), void(e && a.setAttribute("src", e))
        }
        if ("IFRAME" === d)return void(e && a.setAttribute("src", e));
        e && (a.style.backgroundImage = "url(" + e + ")")
    }, n = function (b) {
        this._settings = _extends({}, a, b), this._queryOriginNode = this._settings.container === window ? document : this._settings.container, this._previousLoopTime = 0, this._loopTimeout = null, this._boundHandleScroll = this.handleScroll.bind(this), this._isFirstLoop = !0, window.addEventListener("resize", this._boundHandleScroll), this.update()
    };
    n.prototype = {
        _reveal: function (a) {
            var b = this._settings, d = function d() {
                b && (a.removeEventListener("load", e), a.removeEventListener("error", d), a.classList.remove(b.class_loading), a.classList.add(b.class_error), c(b.callback_error, a))
            }, e = function e() {
                b && (a.classList.remove(b.class_loading), a.classList.add(b.class_loaded), a.removeEventListener("load", e), a.removeEventListener("error", d), c(b.callback_load, a))
            };
            "IMG" !== a.tagName && "IFRAME" !== a.tagName || (a.addEventListener("load", e), a.addEventListener("error", d), a.classList.add(b.class_loading)), m(a, b.data_srcset, b.data_src), c(b.callback_set, a)
        }, _loopThroughElements: function () {
            var a = this._settings, d = this._elements, e = d ? d.length : 0, f = void 0, g = [], h = this._isFirstLoop;
            for (f = 0; f < e; f++) {
                var i = d[f];
                a.skip_invisible && null === i.offsetParent || (b || j(i, a.container, a.threshold)) && (h && i.classList.add(a.class_initial), this._reveal(i), g.push(f), i.dataset.wasProcessed = !0)
            }
            for (; g.length > 0;)d.splice(g.pop(), 1), c(a.callback_processed, d.length);
            0 === e && this._stopScrollHandler(), h && (this._isFirstLoop = !1)
        }, _purgeElements: function () {
            var a = this._elements, b = a.length, c = void 0, d = [];
            for (c = 0; c < b; c++) {
                a[c].dataset.wasProcessed && d.push(c)
            }
            for (; d.length > 0;)a.splice(d.pop(), 1)
        }, _startScrollHandler: function () {
            this._isHandlingScroll || (this._isHandlingScroll = !0, this._settings.container.addEventListener("scroll", this._boundHandleScroll))
        }, _stopScrollHandler: function () {
            this._isHandlingScroll && (this._isHandlingScroll = !1, this._settings.container.removeEventListener("scroll", this._boundHandleScroll))
        }, handleScroll: function () {
            var a = this._settings.throttle;
            if (0 !== a) {
                var b = function () {
                    (new Date).getTime()
                }, c = b(), d = a - (c - this._previousLoopTime);
                d <= 0 || d > a ? (this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null), this._previousLoopTime = c, this._loopThroughElements()) : this._loopTimeout || (this._loopTimeout = setTimeout(function () {
                        this._previousLoopTime = b(), this._loopTimeout = null, this._loopThroughElements()
                    }.bind(this), d))
            } else this._loopThroughElements()
        }, update: function () {
            this._elements = Array.prototype.slice.call(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)), this._purgeElements(), this._loopThroughElements(), this._startScrollHandler()
        }, destroy: function () {
            window.removeEventListener("resize", this._boundHandleScroll), this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null), this._stopScrollHandler(), this._elements = null, this._queryOriginNode = null, this._settings = null
        }
    };
    var o = window.lazyLoadOptions;
    return o && function (a, b) {
        var c = b.length;
        if (c)for (var d = 0; d < c; d++)k(a, b[d]); else k(a, b)
    }(n, o), n
});


/*
 * Google Analytics
 *
 */
(function (G, o, O, g, l) {
    G.GoogleAnalyticsObject = O;
    G[O] || (G[O] = function () {
        (G[O].q = G[O].q || []).push(arguments)
    });
    G[O].l = +new Date;
    g = o.createElement("script"), l = o.scripts[0];
    g.src = "//www.google-analytics.com/analytics.js";
    l.parentNode.insertBefore(g, l)
}(this, document, "ga"));
ga("create", "UA-37451007-1");
ga("send", "pageview");


/* Does it dijon? */
if ("querySelector" in document
    && "addEventListener" in window
    && "classList" in document.createElement("_")) {

    /* Map $ to querySelector */
    function $(target) {
        return document.querySelectorAll(target);
    }

    /* ready() */
    document.addEventListener("DOMContentLoaded", function (event) {

        var html = $("html");
        html[0].className = html[0].className.replace(/(?:^|\s)no-js(?!\S)/g, "js");

        SimpleJekyllSearch({
            searchInput: document.getElementById('search-input'),
            resultsContainer: document.getElementById('results-container'),
            json: '/search.json',
            searchResultTemplate: '<li><h3 class="h4 no-margin"><a href="{url}">{title}</a></h3></li>',
        });

        var verlokLazyLoad = new LazyLoad({

            elements_selector: ".js-lazy-load",
            show_while_loading: true

        });


        function getRand(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }


        var greetingHello = $(".js-hello"),
            greetingPhonetic = $(".js-phonetic"),
            greetingLanguage = $(".js-lang");

        if (greetingHello.length > 0) {

            var greetings = [
                {
                    "greeting": "Hej",
                    "phonetic": "heɪ",
                    "language": "Swedish",
                    "iso-639-1": "sv"
                },
                {
                    "greeting": "Terve",
                    "phonetic": "ˈterʋe",
                    "language": "Finnish",
                    "iso-639-1": "fi"
                },
                {
                    "greeting": "Bonjour",
                    "phonetic": "bɔ̃.ʒuʁ",
                    "language": "French",
                    "iso-639-1": "fr"
                }
            ];


            switch (getRand(1, 3)) {
                case 1:
                    /* console.log("1"); */
                    greetingHello[0].textContent = greetings[0]["greeting"];
                    greetingHello[1].textContent = greetings[0]["greeting"];
                    greetingHello[0].setAttribute("lang", greetings[0]["iso-639-1"]);
                    greetingPhonetic[0].textContent = greetings[0]["phonetic"];
                    greetingLanguage[0].textContent = greetings[0]["language"];
                    greetingLanguage[1].textContent = greetings[0]["language"];
                    break;
                case 2:
                    /* console.log("2"); */
                    greetingHello[0].textContent = greetings[1]["greeting"];
                    greetingHello[1].textContent = greetings[1]["greeting"];
                    greetingHello[0].setAttribute("lang", greetings[1]["iso-639-1"]);
                    greetingPhonetic[0].textContent = greetings[1]["phonetic"];
                    greetingLanguage[0].textContent = greetings[1]["language"];
                    greetingLanguage[1].textContent = greetings[1]["language"];
                    break;
                default:
                    /* console.log("3"); */
                    greetingHello[0].textContent = greetings[2]["greeting"];
                    greetingHello[1].textContent = greetings[2]["greeting"];
                    greetingHello[0].setAttribute("lang", greetings[2]["iso-639-1"]);
                    greetingPhonetic[0].textContent = greetings[2]["phonetic"];
                    greetingLanguage[0].textContent = greetings[2]["language"];
                    greetingLanguage[1].textContent = greetings[2]["language"];
            }

        }
        /* end of undefined check */


    });
    /* End of ready() */

}
/* End of dijon */