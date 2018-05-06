---
layout: about
title: Styleguide
category: content
permalink: /styleguide/
excerpt: "A styleguide is a set of standards for the writing and design of documents, either for general use or for a specific publication, organization, or field."
---
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Bland [x] itiis hic doloribus temporibus sequi <code>ipsum esse</code>. Quae ex sed, minus dolor molestiae nemo <code>deserunt perspiciatis</code> maiores incidunt quisquam vero neque ducimus. Libero pariatur eum fugit, delectus [wiki link][wiki]. Aperiam tempore totam repellat dicta.

## Table of content


Layout
Canon

Colours
Tropical Rain Forest
Surf's Up Blue
Eastern Blue
Jade

Typography
Body copy
Headings

Elements
Abbreviations
Sup and sub
Code

Codeblock
Blockquotes
Pull quotes
Figures
Prose (figure)
Semantic break
Unordered list
Ordered list
Definition list
Footnotes
Topics
Tables
Sparkicons

## Layout

When faced with actually designing the

This time, I’m looking at the work of Raúl M Rosarivo, Jan Tschichold, etc. and their canons of page construction.

> The canons of page construction are a set of principles in the field of book design used to describe the ways that page proportions, margins and type areas (print spaces) of books are constructed. <cite>Canons of page construction, [Wikipedia](https://en.wikipedia.org/wiki/Canons_of_page_construction)</cite>

But of course this isn’t print.

This is the web and we can’t apply the limitations of a fixed immutable medium to one that is flexible at its very core.

Or can we?

If the method and rules which has been developed for centuries, and have yet to be improved, can guide the production of perfect books then perhaps the same methods and rules can guide harmonious design for the web?

Building on the work by Jan Tschichold who in turn based his on the work of J. A. van de Graaf, Raúl M. Rosarivo, Hans Kayser, and others.

The notion of canons, or laws of form, of book page construction

the canons of page construction Jan Tschichold

<button class="button button--primary js-add-class">Enable canon overlay</button>

<script>
document.addEventListener("DOMContentLoaded", function() {
  var canonToggler = document.getElementsByClassName('js-add-class');
  var canonParent = document.getElementsByTagName('html')[0];
  for (var i = 0; i < canonToggler.length; i++) {

    canonToggler[i].addEventListener('click', function() {

     if (canonParent.classList.contains('has-canon')) {
       canonParent.classList.remove('has-canon');
        console.log("remove faq display!");
     } else {
       canonParent.classList.add('has-canon');
        console.log("add faq display!");
     }

    });
  }


});
</script>

## Colors

Brands and colour are inextricably linked because colour offers an instantaneous method for conveying meaning and message without words.

### Tropical Rain Forest

<figure class="aside-image">
    <div class="sg__swatch bg bg--primary"></div>
</figure>

A calming and harmonious colour, Tropical Rain Forest is the colour of balance and growth. As much as it's the colour of my eyes, it has consistently been a favourite colour of mine.

Hex: #00834D

Tropical Rain Forest set against white text has a contrast of 1:4.82 and passes AAA for fonts over 18 points.

### Surf's Up Blue

<figure class="aside-image">
    <div class="sg__swatch bg bg--secondary"></div>
</figure>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Bland [x] itiis hic doloribus temporibus sequi <code>ipsum esse</code>. Quae ex sed, minus dolor molestiae nemo <code>deserunt perspiciatis</code> maiores incidunt quisquam vero neque ducimus. Libero pariatur eum fugit, delectus [wiki link][wiki]. Aperiam tempore totam repellat dicta.

Hex: #0F768A

Surf's Up Blue set against white text has a contrast of 1:5.28 and passes AAA for fonts over 18 points.

### Eastern Blue

<figure class="aside-image">
    <div class="sg__swatch bg bg--tertiary"></div>
</figure>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Bland [x] itiis hic doloribus temporibus sequi <code>ipsum esse</code>. Quae ex sed, minus dolor molestiae nemo <code>deserunt perspiciatis</code> maiores incidunt quisquam vero neque ducimus. Libero pariatur eum fugit, delectus [wiki link][wiki]. Aperiam tempore totam repellat dicta.

Hex: #1E9AB0

### Jade

<figure class="aside-image">
    <div class="sg__swatch bg bg--accent"></div>
</figure>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Bland [x] itiis hic doloribus temporibus sequi <code>ipsum esse</code>. Quae ex sed, minus dolor molestiae nemo <code>deserunt perspiciatis</code> maiores incidunt quisquam vero neque ducimus. Libero pariatur eum fugit, delectus [wiki link][wiki]. Aperiam tempore totam repellat dicta.

Hex: #00B86B

## Typography

### Body text

> Lora is a well-balanced contemporary serif with roots in calligraphy. It is a text typeface with moderate contrast well suited for body text.

### Headings

> Cooper Hewitt, is a contemporary sans serif, with characters composed of modified-geometric curves and arches. <cite>Chester Jenkins</cite>

The headings are set in incremental size ranges following a scale that's been carefully calibrated to work in a device agnostic environment. The font-size range illustrates how the font-size changes as the device context changes. By using relative sizes, visitors are free to zoom in or out and the design will always change to accommodate this.

All headings have a line-heights carefully selected to ensure that a line’s descenders don’t intersect with the following line’s ascenders.

#### Titling

<div class="table-wrapper">
	<table>
		<caption>Heading 1 sizes</caption>
		<thead>
			<tr>
				<th>Breakpoints</th>
				<th>Sizes</th>
				<th>Line-heights</th>
			</tr>
		</thead>
		<tbody>
		<tr>
                <td>Default</td>
                <td>2.25em</td>
                <td>1.22474</td>
        			</tr>
			<tr>
				<td>26.72em and up</td>
				<td>3.375em</td>
				<td>1.10668</td>
			</tr>
			<tr>
				<td>42.72em and up</td>
				<td>5.063em</td>
				<td>1.05</td>
			</tr>
		</tbody>
	</table>
</div>

<p class="h1">Pack my box with five dozen liquor jugs</p>

#### Subheadings

<div class="table-wrapper">
	<table>
		<caption>Heading 2 sizes</caption>
		<thead>
			<tr>
				<th>Breakpoints</th>
				<th>Sizes</th>
				<th>Line-heights</th>
			</tr>
		</thead>
		<tbody>
		<tr>
                <td>Default</td>
                <td>2.25em</td>
                <td>1.22474</td>
        			</tr>
			<tr>
				<td>26.72em and up</td>
				<td>-</td>
				<td>-</td>
			</tr>
			<tr>
				<td>42.72em and up</td>
				<td>3.375em</td>
				<td>1.10668</td>
			</tr>
		</tbody>
	</table>
</div>

<p class="h2">Pack my box with five dozen liquor jugs</p>
<p class="h3">Pack my box with five dozen liquor jugs</p>
<p class="h4">Pack my box with five dozen liquor jugs</p>
<p class="h5">Pack my box with five dozen liquor jugs</p>
<p class="h6">Pack my box with five dozen liquor jugs</p>

## Elements

### Abbreviations

An abbreviation (from Latin <i lang="la">brevis</i>, meaning <i>short</i>) is a shortened form of a word or phrase. Usually, but not always, it consists of a letter or group of letters taken from the word or phrase. For example, the word <i>abbreviation</i> can itself be represented by the abbreviation <abbr title="abbreviation">abbr</abbr>.

Some abbreviations, such as the initialism <abbr title="HyperText Markup Language" class="small-caps">HTML</abbr> can also have a <code>.small-caps</code> added to the element to simulate small-caps.

Some times abbreviations occur inside of link.

### Superscript and subscript text

The <code>sup</code> element represents a superscript and the sub element represents a <code>sub</code>. These elements must be used only to mark up typographical conventions with specific meanings, not for typographical presentation. As a guide, only use these elements if their absence would change the meaning of the content. Example:

On the 1st day he had already ran out of H<sub>2</sub>O. The letters in ordinal numbers should not appear as superscripts (e.g., 122nd not 122<sup>nd</sup>).

Lorem ipsum dolor sit amet, [media link][media]. Nisi facere, eius suscipit ipsa.

### Code and something

Lorem ipsum dolor sit amet, <code>consectetur adipisicing</code> elit. Tempora voluptatum, laboriosam nemo <code>commodi earum</code> provident quaerat, unde distinctio temporibus ratione totam quibusdam aperiam corrupti.

### Codeblock

{% highlight javascript %}
// Put in <head>
if ( 'querySelector' in document && 'addEventListener' in window ) {
    document.documentElement.className += 'js';
}
{% endhighlight %}

### Blockquote

> 95% of the information on the web is written language. <cite>Oliver Reichenstein, [Web Design is 95% Typography][quote]</cite>

[quote]: https://ia.net/know-how/the-web-is-all-about-typography-period

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta placeat, dolor. *Modi dolorem assumenda* incidunt rerum, sint velit, saepe earum iure vitae, eos, in!

Lorem ipsum dolor sit amet, **consectetur adipisicing elit**. Officiis error, incidunt saepe cupiditate!

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis minima quam, impedit [basic outbound link][outbound] ad praesentium voluptates laudantium ducimus. Tempore similique deserunt quod.

### Pull quote

A [pull quote][pullquote] is a <q>quotation or excerpt from an article that is typically placed in a larger or distinctive typeface on the same page, serving to entice readers into an article or to highlight a key topic</q>.

<p data-pullquote="By using HTML5’s data-attribute and CSS’s content to include a pull quote in the page, it isn’t a repetition of content."></p>

By using HTML5’s data-attribute and CSS’s pseudo content to include a pull quote in the page, it isn’t a repetition of content.

### Figures

Figures are usually used for images. Images are always resized to 1280&times;853 and compressed using the best freely available tools. Currently this is [TinyPNG](https://tinypng.com/).

<figure>
	<img class="js-lazy-load" data-original="http://placehold.it/640x427&text=3:2" alt="this is the alt">
	<noscript>
        <img src="http://placehold.it/640x427&text=3:2" alt="this is the alt">
    </noscript>
	<figcaption>Optional caption for images.</figcaption>
</figure>

<figure class="aside-image">
	<img class="js-lazy-load" data-original="http://placehold.it/640x427&text=3:2" alt="this is the alt">
	<noscript>
        <img src="http://placehold.it/640x427&text=3:2" alt="this is the alt">
    </noscript>
	<figcaption>Optional caption for images.</figcaption>
</figure>

Some times an image doesn't need to take up the entire content width. For these situations we use the <code>aside-image</code> class to allow the image to float on the right-hand side of the content. The image is then allowed to break out of the content canon, and is aligned to the.

#### Abreasted media

Some times images need to be displayed side-by-side, if there for instance are a lot of them. For this the abreasted modifier is excellent.

<figure class="abreasted">
	<img class="js-lazy-load" data-original="http://placehold.it/640x427&text=3:2" alt=""><img class="js-lazy-load" data-original="http://placehold.it/640x427&text=3:2" alt="">
	<noscript>
        <img src="http://placehold.it/640x427&text=3:2" alt="this is the alt"><img src="http://placehold.it/640x427&text=3:2" alt="this is the alt">
    </noscript>
	<figcaption>Optional caption for images.</figcaption>
</figure>

<figure class="montage">
	<img class="js-lazy-load" data-original="http://placehold.it/640x427&text=3:2" alt=""><img class="js-lazy-load" data-original="http://placehold.it/640x427&text=3:2" alt=""><img class="js-lazy-load" data-original="http://placehold.it/640x427&text=3:2" alt="">
	<noscript>
        <img src="http://placehold.it/640x427&text=3:2" alt="this is the alt"><img src="http://placehold.it/640x427&text=3:2" alt="this is the alt"><img class="js-lazy-load" data-original="http://placehold.it/640x427&text=3:2" alt="">
    </noscript>
	<figcaption>Optional caption for images.</figcaption>
</figure>

Sometimes, images are missing for reasons unknown. When that happens, wouldn't it be nice if we could style that a bit more?

<figure>
	<img class="js-lazy-load" data-original="/assets/images/broken.jpg" alt="Intentionally missing image to test styling the pseudo elements of missing images with a long text alternative.">
	<noscript>
        <img src="http://placehold.it/640x427&text=3:2" alt="this is the alt">
    </noscript>
	<figcaption>Optional caption for images.</figcaption>
</figure>

Here, a part of a poem is marked up using figure:

<figure>
	<pre>
Once upon a midnight dreary, while I pondered, weak and weary,
Over many a quaint and curious volume of forgotten lore,
While I nodded, nearly napping, suddenly there came a tapping,
As of some one gently rapping, rapping at my chamber door.
"'T is some visiter," I muttered, "tapping at my chamber door–Only this, and nothing more."
	</pre>
	<cite>The Raven (first verse)Edgar Allan Poe, January 1845</cite>
</figure>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, iusto sapiente debitis voluptas!

### Semantic break

It used to be horizontal ruler, now it's a semantic break

***

### Unordered list

- The Dream-Quest of Unknown Kadath
- At the Mountains of Madness
- The Shadow Over Innsmouth
- The Shadow Out of Time

### Ordered list

1. 1954 The Fellowship of the Ring
2. 1954 The Two Towers
3. 1955 The Return of the King

### Definition list

<dl>
   <dt>Definition list</dt>
   <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
commodo consequat.</dd>
   <dt>Lorem ipsum dolor sit amet</dt>
   <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
commodo consequat.</dd>
</dl>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident esse eveniet tempore, sunt amet eaque, fuga impedit hic earum dolorem, tenetur error tempora asperiores!

### Footnotes

Thanks to the power of[^1], we can now have footnotes as well.

They're written in markdown \[^1] which in turns automatically creates a note at the end of the entry.

### Topics

Topics are always written in the indeterminate plural form.

<ul class="tag-list"> <li><a class="tag tag--doubledigit" rel="tag" href="/topics/#Health"><span class="tag-count">14</span><span class="tag-label">Health</span></a> </li> <li><a class="tag tag--singledigit" rel="tag" href="/topics/#On+Turning+Thirty"><span class="tag-count">5</span><span class="tag-label">On Turning Thirty</span></a> </li> <li><a class="tag " rel="tag" href="/topics/#Meditation"><span class="tag-label">Meditation</span></a> </li> <li><a class="tag " rel="tag" href="/topics/#Yoga"><span class="tag-label">Yoga</span></a> </li> <li><a class="tag " rel="tag" href="/topics/#Cambridge+Buddhist+Centre"><span class="tag-label">Cambridge Buddhist Centre</span></a> </li> <li><a class="tag " rel="tag" href="/topics/#Fierce+Grace"><span class="tag-label">Fierce Grace</span></a> </li> </ul>

### Tables

To allow tables to expand beyond the wrapping container we need to give it its own wrapper. Sorted.

<div class="table-wrapper">
  <table>
    <caption>Vimto Original Fizzy, Result break-down</caption>
    <thead>
      <tr>
        <th>Participant</th>
        <th>Appearance</th>
        <th>Carbonation</th>
        <th>Taste</th>
      </tr>
    </thead>
    <tfoot>
       <tr><td>Total</td><td>16</td><td>13</td><td>8</td></tr>
    </tfoot>
    <tbody>
    <tr><td>Carlos</td><td>3</td><td>0</td><td>0</td></tr>
    <tr><td>Rebecka</td><td>5</td><td>5</td><td>5</td></tr>
    <tr><td>Nina</td><td>5</td><td>3</td><td>0</td></tr>
    <tr><td>Lucien</td><td>3</td><td>5</td><td>3</td></tr>
    </tbody>
  </table>
</div>

## Sparkicons

> A Sparkicon as a small, inline icon with additional link meta data to describe either the content and/or the behaviour when the user clicks the link.

### Examples

- [Youtube trailer for the Daniel Radcliffe film Horns (2014)][media]
- [Spotify link to Sonata Arctica's Draw Me][song]
- [Wikiepedia article on Stouts][wiki]
- [Link within the same domain][journal]
- [Link to another domain][outbound]

[pullquote]: http://en.wikipedia.org/wiki/Pull_quote
[wiki]: http://en.wikipedia.org/wiki/Stout
[media]: http://www.youtube.com/watch?v=B8s_1UcdoNI
[song]: spotify:track:7pdYri7sRHIbo8nQuh8frw
[outbound]: http://www.google.com
[journal]: /journal

[^1]: This is a footnote.