---
title: "Javascript Select Parser, part III"
date: 2012-05-25T20:42:00+00:00
author: Carlos
layout: post
tags: [Design, "Web Design"]
category: professional
excerpt: "In which I continue Benjamin's work on his Javascript select parser by adding"
---
Why part III you might be asking yourself. Well.. [beije](http://www.beije.fi/) already so nicely did [part I](http://www.beije.fi/post/javascript-select-parser/) and [part II](http://www.beije.fi/post/javascript-select-parser-part-ii/). And well.. whilst prototyping for NHL v.4 I wanted to see if I could get form elements to behave nicer.. in other words.. to _actually_ style them. At which point I blatantly stole (expect beije gives out everything without a license, so not technically not stealing..) his Javascript select parser.

<figure>
    <img class="js-lazy-load" data-original="/assets/posts/2012/05/Untitled-6.jpg" alt="Example of styled checkboxes and radio buttons.">
  <noscript>
    <img src="/assets/posts/2012/05/Untitled-6.jpg" alt="Example of styled checkboxes and radio buttons.">
  </noscript>
  <figcaption>Testing out styling checkboxes and radio buttons for NHL v.4.</figcaption>
</figure>

"Select" not pictured because I haven't gotten around to that yet.

So far I haven't actually gotten around to doing much about beije's select parser, but after mucking around with checkboxes and radiobuttons in my own prototype I came to thinking.. I should share the stuff too. But the NHL v.4 prototype is ugly, semi-commented at best and filled with unused codes because.. well.. it's a rough prototype.. it's me playing around with codes for the fuck of it. It also uses .svg graphics a lot.

So instead of sharing my complete mess of a code I thought I could re-write the checkbox/radiobutton parts and add it to beije's Javascript select parser.

<figure>
    <img class="js-lazy-load" data-original="/assets/posts/2012/05/Untitled-5.jpg" alt="The styled checkboxes and radio buttons added to Benjamin's example.">
  <noscript>
    <img src="/assets/posts/2012/05/Untitled-5.jpg" alt="The styled checkboxes and radio buttons added to Benjamin's example.">
  </noscript>
  <figcaption>Aren’t they perty?</figcaption>
</figure>

It's still pretty quick and dirty. Tested and working in Firefox, Chrome and Safari. Not as much in Explorer (hover state doesn't work), but then again beije's was a bit _iffy_ there too. Just like beije's though it retains some backwards compatibility, any browser that doesn't support opacity probably won't support pseudo selectors either and thus it falls back to normal checkboxes and radiobuttons.. I think.. Perfectly semantic though, as there are no extra containers or shit like that.

I put in a dropbox share for now. Here you go (Link expired). And like I said, all the kudos goes to beije for the select part, I had nothing to do with that. I just expanded on it.

Being Friday and all, I thought I'd give you one last reference to the original author. And I just did.