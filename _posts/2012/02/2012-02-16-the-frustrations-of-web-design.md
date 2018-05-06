---
title: "The Frustrations of Web Design"
date: 2012-02-16T23:49:00+00:00
author: Carlos
layout: post
tags: [Web design, Behind the scenes]
category: Creative
excerpt: "In which I've started hunting for a job in the UK."
---
Yes, it's been quite a while. And this will alas not be a very long post. So basically here's the <strike>short</strike> long story..

Got some very nice feedback on my website, and some not so nice.. well actually.. the feedback was still nice, the website, not so much. Yes, it was a bit rushed — coincidently the revised version turned a bit rushed at the end too — and so I it didn't scale very well. In fact, it didn't scale at all. Browsing on pretty much anything smaller than 1680×1050 cut parts of the content of and you couldn't scroll. A pretty piss poor web design job from a web designer in other words. So what did I learn from that? A lot as it turns out. But mostly the importance of planning, as always. So I decided to revise my website, which in this case meant, more or less starting over from scratch, as far as coding was concerned. So I did, with a clear goal in mind. I had to be responsive — a bit of a buzzword I know — and it had to be more awesome. So what was my glorious battle plan you ask? Simple.

Re-design it so that Fiinix Design will scale and flow from the smallest of handheld (but mostly smart phones) to the largest of FullHD desktop displays.

Design it so it will also scale in that particular order.. from small to large. Many responsive design advocates show you how to add media-queries so that a website will scale down and re-position itself, hiding elements as the viewport shrinks. My idea (but I am not alone in this idea) was to design a website that scales up instead. Add things, like a huge background image whenever the viewport is so big that the added http request is negligible.

If you can't see it, you shouldn't have to load it. I forbade myself from using `display: none` anywhere.  
Use as much semantic HTML as possible. Use things like Adjacent Sibling Selectors to target elements instead of classes and id's.

I also considered using SVG images wherever possible, but the size difference was minimal [^1] and at least my smart phones browser doesn't seem to support SVG. But I will keep my eyes open for it anyway. If there's support enough for it, the increased quality is reason alone to make the transition.

A part of the base grid was built from the foundation of [the work](http://cssgrid.net/) of Andy Taylor, kudos to him, although not much remains of his code.

So, how did my plan pan out? Pretty nicely actually, apart from the IE's refusal to work with min-width's and such, rectified using Scott Jehl's awesomely light [respond.js](http://respond.js/) and some minor hiccups I still have to resolve like my hosts iframe **versus** something. I'm going to test it on other mobiles too, like Windows Phone 7 (please, beije?) and Iphone 4 but.. well.. so far, so good.

For those of you how are curious, the address is as usual fiinixdesign.eu (not available), but for mobile users you are going to have to go straight to http://asphinx.danmed.co.uk (not available) until I have resolved whatever the issue is.

[^1]: 43.3 KB for an SVG image **versus** 47.4 KB for a web-optimized PNG. SVGZ clocked in at a minuscule 17.6 KB but I couldn't even get it to show up in Firefox.