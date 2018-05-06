---
title: "Why So Secretive?"
date: 2011-09-08T20:44:00+00:00
author: Carlos
layout: post
tags: [UI design, Web design, "We Play NHL", Behind the scenes]
category: Creative
excerpt: "In which I reveal the next, brand-spanking new version of our NHL statistics tracking tool."
---
Well.. it’s been a while since I have posted anything now and some of you might be wondering why? Well, you can all stop wondering now. Yeah, sure I have had a four week vacation, that just ended. And well sure.. one would think that with all that time on my hands I should have been able to squeeze out at least a couple of posts.

But no, here I am.. Two and a half weeks since my last post. So why have I been so busy. Well. Me and some friends like to get together and play NHL on Xbox 360 every now and then.. and well, we are all (to some degree) sucker for statistics. So it makes a lot of sense that we used to have an excel file to keep track of our individual stats.

We called it NHL Stats v. 2.0.. this was about a year ago, coincidently around the same time that I made a joke about how version 3 should be a web-interface with a sql database as backend. So.. I’m guessing you have probably already figured out what happened next. Well.. come spring and summer we started talking having a launch party in honour of NHL 12.. and of course Mr. Cruise (yeah, I’m going call him that now) remembered my little joke from last year. We quickly realised that Microsoft’s Excel just wasn’t going to cut it any more.. mostly because our little group had changed a lot since we first made the excel file, some people simply didn’t play as much any more, whilst others whom had been more absent earlier were now frequently joining our gaming nights. So things needed to change whichever way we were going to go. So there I was with my big mouth again, "Well, I have been dying for an excuse to learn SQL anyway!". Yeah.. I didn’t actually know any SQL before I started this project, but that’s never really stopped me before so..

Still to do, before it’s completely done. "View all matches as table data", "Modify how passing is calculated, because apparently those fuckers at EA Canada changed it from NHL 11 to NHL 12 and I just found out about it", "View all players as table data", "View player rank progression over time". But that’s about it.

Anyway. Enough talk, you didn’t come here after all this time to read my rambling. You came here hoping to see some glory shots.. and trust, there will be glory shots.. and by God, they are glorious. I am really pleased with how everything turned out. And many, many thanks to [Beije](https://benjaminhorn.io/) for always kindly answering my sometimes odd questions about database management. And to Timo, who has had as much a part in this project even though he didn’t code it.. or did the design. But Timo knows hockey.. which I don’t as much, and many great ideas that you see here came from his mouth and mind first, then we both just fine-tuned it.. and tweaked it.. until it was awesome! Although I have to give him credit when he solved my issue of not being able to access multidimensional arrays in a SELECT statement.

**EDIT:** Also big thanks to Dan who so graciously provided hosting again. It’s awesome mate, so thanks!

But now.. seriously.. no more talking.. it’s picture time! And first, a picture of where it all started.. a long, long time.. I give you. Version 1.0

<figure>
    <img class="js-lazy-load" data-original="/assets/posts/2011/09/00_letThereBeLight.jpg" alt="A sepia tinted Excel document with very little statistics."><img class="js-lazy-load" data-original="/assets/posts/2011/09/0_prequel.jpg" alt="An Excel document with lots of colours and custom IF functions pushing Excel to its limits.">
  <noscript>
    <img src="/assets/posts/2011/09/00_letThereBeLight.jpg" alt="A sepia tinted Excel document with very little statistics."><img src="/assets/posts/2011/09/0_prequel.jpg" alt="An Excel document with lots of colours and custom IF functions pushing Excel to its limits.">
  </noscript>
  <figcaption>Figure 1. The Sepia tone has not been added later, for some reason we made it look like this.<br>Figure 2. Then there was version 2.0. The one that was pretty to look at but difficult to add players to.</figcaption>
</figure>

<figure>
    <img class="js-lazy-load" data-original="/assets/posts/2011/09/1_main_page.jpg" alt="A website dedicated to tracking our NHL statistics."><img class="js-lazy-load" data-original="/assets/posts/2011/09/2_main_page_flipped_cards.jpg" alt="Every play has their own hockey card with their statistics, showing the back side of the cards.">
  <noscript>
    <img src="/assets/posts/2011/09/1_main_page.jpg" alt="A website dedicated to tracking our NHL statistics."><img src="/assets/posts/2011/09/2_main_page_flipped_cards.jpg" alt="Every play has their own hockey card with their statistics, showing the back side of the cards.">
  </noscript>
  <figcaption>Figure 1. Version 3.0 a.k.a. Project Creampie. Because I’m a pervert. This the main-page.<br>Figure 2. Main page..with the cards flipped for more stats.</figcaption>
</figure>

<figure>
    <img class="js-lazy-load" data-original="/assets/posts/2011/09/3_main_page_slideToNextGroup.jpg" alt="Showing the next group of four players."><img class="js-lazy-load" data-original="/assets/posts/2011/09/4_adding_match_error.jpg" alt="Alerting and highlighting missing fields when trying to add a match.">
  <noscript>
    <img src="/assets/posts/2011/09/3_main_page_slideToNextGroup.jpg" alt="Showing the next group of four players."><img src="/assets/posts/2011/09/4_adding_match_error.jpg" alt="Alerting and highlighting missing fields when trying to add a match.">
  </noscript>
  <figcaption>Figure 1. The next group of players slide in..<br>Figure 2. Someone missed a field when trying to add a match. Don’t worry, all incorrect field are highlighted.</figcaption>
</figure>

<figure>
    <img class="js-lazy-load" data-original="/assets/posts/2011/09/5_match_added.jpg" alt="Confirmation screen to show someone they’ve successfully added a match."><img class="js-lazy-load" data-original="/assets/posts/2011/09/6_sorted_players.jpg" alt="Player cards in the order according to who played most recently.">
  <noscript>
    <img src="/assets/posts/2011/09/5_match_added.jpg" alt="Confirmation screen to show someone they’ve successfully added a match."><img src="/assets/posts/2011/09/6_sorted_players.jpg" alt="Player cards in the order according to who played most recently.">
  </noscript>
  <figcaption>Figure 1. Much better.. Now if you only hadn’t lost.<br>Figure 2. The cards are auto-sorted according to who played most recently.</figcaption>
</figure>

<figure>
    <img class="js-lazy-load" data-original="/assets/posts/2011/09/7_1vs1_menu.jpg" alt="It’s possible for two players to see how well they play against just each other."><img class="js-lazy-load" data-original="/assets/posts/2011/09/8_1vs1_comparing_two_players.jpg" alt="Comparing two player and their re-calculated statistics.">
  <noscript>
    <img src="/assets/posts/2011/09/7_1vs1_menu.jpg" alt="It’s possible for two players to see how well they play against just each other."><img src="/assets/posts/2011/09/8_1vs1_comparing_two_players.jpg" alt="Comparing two player and their re-calculated statistics.">
  </noscript>
  <figcaption>Figure 1. It’s also possible to see how you compare to a player with just the games between you two.<br>Figure 2. All the stats are re-calulated according to just your games. With the exception of rank title and class.</figcaption>
</figure>

<figure>
    <img class="js-lazy-load" data-original="/assets/posts/2011/09/9_1vs1_comparing_two_players_flipped_cards.jpg" alt="Comparing two players against each other, with their cards flipped to reveal their additional statistics."><img class="js-lazy-load" data-original="/assets/posts/2011/09/10_ranks_and_trophies.jpg" alt="Viewing the Ranks & Trophies screen to see what opportunities lies ahead.">
  <noscript>
    <img src="/assets/posts/2011/09/9_1vs1_comparing_two_players_flipped_cards.jpg" alt="Comparing two players against each other, with their cards flipped to reveal their additional statistics."><img src="/assets/posts/2011/09/10_ranks_and_trophies.jpg" alt="Viewing the Ranks & Trophies screen to see what opportunities lies ahead.">
  </noscript>
  <figcaption>Figure 1. Again.. flippable cards here too.<br>Figure 2. By going to the RANKS & TROPHIES Menu you get a good overview of the possibilities out there.</figcaption>
</figure>

<figure>
    <img class="js-lazy-load" data-original="/assets/posts/2011/09/11_adding_a_player.jpg" alt="Adding a new player is easy in the Add Player screen."><img class="js-lazy-load" data-original="/assets/posts/2011/09/12_player_added_feedback.jpg" alt="Confirmation screen to show someone they’ve successfully added a new player.">
  <noscript>
    <img src="/assets/posts/2011/09/11_adding_a_player.jpg" alt="Adding a new player is easy in the Add Player screen."><img src="/assets/posts/2011/09/12_player_added_feedback.jpg" alt="Confirmation screen to show someone they’ve successfully added a new player.">
  </noscript>
  <figcaption>Figure 1. It’s easier to add a new player than it is to change your privacy settings on Facebook.com.<br>Figure 2. Feedback message so you know that what you did went well.</figcaption>
</figure>

<figure>
    <img class="js-lazy-load" data-original="/assets/posts/2011/09/13_edit_player.jpg" alt="Editing an existing player is easy in the Edit Player screen."><img class="js-lazy-load" data-original="/assets/posts/2011/09/14_editing_my_own_team.jpg" alt="Showing the card design which reflects a change from Phoenix Coyotes to Nashville Predators.">
  <noscript>
    <img src="/assets/posts/2011/09/13_edit_player.jpg" alt="Editing an existing player is easy in the Edit Player screen."><img src="/assets/posts/2011/09/14_editing_my_own_team.jpg" alt="Showing the card design which reflects a change from Phoenix Coyotes to Nashville Predators.">
  </noscript>
  <figcaption>Figure 1. You can freely edit a player as well. In case you ever decide to change your default team colour..or something.<br>Figure 2. Here, I have changed my team to Nashville Predators instead, to show you how the card changes accordingly.</figcaption>
</figure>

<figure>
    <img class="js-lazy-load" data-original="/assets/posts/2011/09/15_add_game.jpg" alt="Adding a new NHL game is easy in the Add Game screen."><img class="js-lazy-load" data-original="/assets/posts/2011/09/16_closeup_cards.jpg" alt="Showing a close up of the details in each player’s hockey card.">
  <noscript>
    <img src="/assets/posts/2011/09/15_add_game.jpg" alt="Adding a new NHL game is easy in the Add Game screen."><img src="/assets/posts/2011/09/16_closeup_cards.jpg" alt="Showing a close up of the details in each player’s hockey card.">
  </noscript>
  <figcaption>Figure 1. At some point, there will be a new NHL game.. and when that happens. We’ll just add it here.<br>Figure 2. The dots turn into UP or DOWN arrow icons depending on if your recent stats improves or declines.</figcaption>
</figure>

<figure>
    <img class="js-lazy-load" data-original="/assets/posts/2011/09/17_another_closeup.jpg" alt="Close up showing how unearned trophies aren’t visible until they’ve been earned.">
  <noscript>
    <img src="/assets/posts/2011/09/17_another_closeup.jpg" alt="Close up showing how unearned trophies aren’t visible until they’ve been earned.">
  </noscript>
  <figcaption>Figure 1. Once you have earned a trophy you can hover to see why.</figcaption>
</figure>