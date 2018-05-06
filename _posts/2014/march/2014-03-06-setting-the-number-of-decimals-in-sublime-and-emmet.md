---
layout: post
title: "Setting the Number of Decimals in Sublime and Emmet"
date: 2014-03-06T11:00:00Z
tags : [Emmet, Sublime, IDE, "Tips and tricks"]
category: Technology
excerpt: "In which I modify the number of decimals Emmet, formerly Zen Coding, rounds to when evaluating expressions in Sublime Text 2."
---
One of the things I plan on/want to do more this year is write design and/or development related posts. And what better way to start then with this little useful nugget I found myself needing just the other day.

Technically I needed it last year as well---which is when I first researched it---but as I just got a---much needed---upgrade at work I found myself reinstalling software, browser plugins and the usual things a Designer might need. And once I had installed Sublime and its packages again, I quickly remembered that I always found the default decimal rounding in Emmet (formerly: Zen Coding) to be a bit lacking in precision.

Whilst there’s nothing inherently wrong with:

`15/16 = 0.94`

I would keep going back to the system calculator to get results with more decimals, especially when dealing with font-sizes set in EMs and fluid grids for responsive designs.

What I wanted was something more like:

`15/16 = 0.9375`

The first time I encountered this problem I ended up spending quite a lot of time searching the Wild Web before finding a solution. And once I did find a solution, I completely forgot how to do it by the time I needed it again. Rewind to Monday and there I was, remembering that I had already solved this problem once and cursing Google for not giving me the results I so desperately craved.

But to make an already long story significantly shorter, using only the faintest memory of a function called “prettify” and GREP I managed to find the file I had changed the first time around. And because I would curse myself should I ever repeat this mistake again, I decided that I should write down the instructions.

## Setting the number of decimals

You could of course change it to as many decimals as you like but---for now---I’ve settled on 4 decimals instead of the default 2, because it feels like a happy compromise between precision and readability.

I’ll assume you have already installed Sublime Text 2---or possibly Sublime Text 3 at some point---as well as the package Emmet, which is actually where we are going to change the default number of decimals.

First up, find the “emmet” folder located in the “Emmet” folder. Easy enough, right?

<figure>
	<img class="js-lazy-load" data-original="/assets/posts/2014/march/setting-the-number-of-decimals-in-sublime-and-emmet/finding-the-sublime-folder-in-appdata.png" alt="Browsing a folder called emmet.">
	<figcaption>“Easy to find” can be highly subjective.</figcaption>
</figure>

Windows

`/Users/{user}/Library/Application Support/Sublime Text 2/Packages/Emmet/emmet/`

Mac

`Users\{user}\AppData\Roaming\Sublime Text 2\Packages\Emmet\emmet\`

Linux

`~/.config/sublime-text-2/Packages/Emmet/emmet/`

Quick tip: By typing `%appdata%` into the “Search programs and files” field in the start menu on Windows 7 you can quickly open up the Roaming folder and find the Sublime folder from there.

Inside the “emmet” folder you will locate the file “emmet-app.js”. Open this file in your favourite text editor---which reasonably should be Sublime, shouldn’t it?---and find line `3819`. Change the number that reads “2” to whatever number you prefer. Like I already mentioned, I went for “4” as my happy medium but yours isn’t necessarily the same.

<figure>
	<img class="js-lazy-load" data-original="/assets/posts/2014/march/setting-the-number-of-decimals-in-sublime-and-emmet/sublime-prettify-math-expressions-with-emmet.png" alt="Prettify section in emmet-app.js">
	<figcaption>Set it to your happy medium, whether it’s 4 or 42.</figcaption>
</figure>

Restart Sublime and there you have it. Now your beautifully responsive designs using fluid layouts with fonts sized in EMs will be as precise as you need them to be.