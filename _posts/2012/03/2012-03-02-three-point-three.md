---
title: "Three Point Three"
date: 2012-03-02T12:44:00+00:00
author: Carlos
layout: post
tags: [Web design, UI design, "We Play NHL"]
category: Creative
excerpt: "In which I update We Play NHL to 3.3."
---
I just finished updating our NHL Stats website to 3.3. What does that mean I hear you ask? Awesomeness a plenty, that's what.. and to shed some light on the matter here's a couple of new features (long awaited mind you) that has managed to finally become a part of our intricate obsessive statistical analysis.

## Features added

**All Stats** added, including (not available anywhere else) statistics like e.g. Away/Home Win Ratios and Shots Against/Game. All of them displayed nicely in sortable tables, made possible by Stuart Langridge's [sorttable.js](http://www.kryogenix.org/code/browser/sorttable/).

<figure>
    <img class="js-lazy-load" data-original="/assets/posts/2012/03/all-stats.png" alt="Screenshot illustrating the new All Stats view, giving players a table-overview of all possible statistics.">
  <noscript>
    <img src="/assets/posts/2012/03/all-stats.png" alt="Screenshot illustrating the new All Stats view, giving players a table-overview of all possible statistics.">
  </noscript>
  <figcaption>It might look simple, but it’s quite powerful.</figcaption>
</figure>

**Edit Match** added.

<figure>
    <img class="js-lazy-load" data-original="/assets/posts/2012/03/edit-match.png" alt="Screenshot illustrating the Edit Match view which allows players to edit a match.">
  <noscript>
    <img src="/assets/posts/2012/03/edit-match.png" alt="Screenshot illustrating the Edit Match view which allows players to edit a match.">
  </noscript>
  <figcaption>Let’s face it, sometimes we get things wrong. Good thing we can edit things then ey?</figcaption>
</figure>

**In the Zone** indicator added. The player's avatar becomes entangled with mathematical symbols one hour every day to signal that this is the hour when the player has won most of their games. **Edit:** Thanks to [beije](http://www.benjaminhorn.io/) for guiding me in the right direction when I was trying to extrapolate the new data (number of wins correlating to time stamp) from our db, `GROUP BY` is the shit in this case!

<figure>
    <img class="js-lazy-load" data-original="/assets/posts/2012/03/in-the-zone.png" alt="Screenshot illustrating the math symbols hovering over a player who is In the Zone.">
  <noscript>
    <img src="/assets/posts/2012/03/in-the-zone.png" alt="Screenshot illustrating the math symbols hovering over a player who is In the Zone.">
  </noscript>
  <figcaption>One hour every day, someone is In the Zone!</figcaption>
</figure>

And finally, rank symbol **Unranked** added.
