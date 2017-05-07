---
layout: about
title: Styleguide
category: content
permalink: /styleguide/
excerpt: "A styleguide is a set of standards for the writing and design of documents, either for general use or for a specific publication, organization, or field."
---
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Bland [x] itiis hic doloribus temporibus sequi <code>ipsum esse</code>. Quae ex sed, minus dolor molestiae nemo <code>deserunt perspiciatis</code> maiores incidunt quisquam vero neque ducimus. Libero pariatur eum fugit, delectus [wiki link][wiki]. Aperiam tempore totam repellat dicta.

## Table of content

a list of everything.

## Colors

Brands and colour are inextricably linked because colour offers an instantaneous method for conveying meaning and message without words.

<div class="sg__swatches">
	<div class="sg__swatch bg--primary">
		<div class="sg__swatch__label">
			Crimson<br>
			#CD0E3E (5.1:1)</div>
	</div>
	<div class="sg__swatch bg--secondary">
		<div class="sg__swatch__label">
			Shamrock<br>
			#37D795 (1.7:1)</div>
	</div>
	<div class="sg__swatch bg--tertiary">
		<div class="sg__swatch__label">
			Eucalyptus<br>
			#1C8D5E (3.2:1)</div>
	</div>
	<div class="sg__swatch bg--accent">
		<div class="sg__swatch__label">
			Fuel-yellow<br>
			#EFAD1F (1.8:1)</div>
	</div>
</div>

## Typography

### Body text

> Lora is a well-balanced contemporary serif with roots in calligraphy. It is a text typeface with moderate contrast well suited for body text.

### Headings

> Cooper Hewitt, is a contemporary sans serif, with characters composed of modified-geometric curves and arches. <cite>Chester Jenkins</cite>

The headings are set in incremental size ranges following a scale that's been carefully calibrated to work in a device agnostic environment. The font-size range illustrates how the font-size changes as the device context changes. By using relative sizes, visitors are free to zoom in or out and the design will always change to accommodate this.

All headings have a line-heights carefully selected to ensure that a line’s descenders don’t intersect with the following line’s ascenders.

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
				<td>3.375em</td>
				<td>1.10668</td>
			</tr>
			<tr>
				<td>641 and up</td>
				<td>5.063em</td>
				<td>1.05</td>
			</tr>
		</tbody>
	</table>
</div>

<p class="h1">The quick brown fox jumps over the lazy dog</p>

<p class="h2">Heading 2</p>
<p class="h3">Heading 3</p>
<p class="h4">Heading 4</p>
<p class="h5">Heading 5</p>
<p class="h6">Heading 6</p>

##Elements

### Abbreviations

An abbreviation (from Latin <i lang="la">brevis</i>, meaning <i>short</i>) is a shortened form of a word or phrase. Usually, but not always, it consists of a letter or group of letters taken from the word or phrase. For example, the word <i>abbreviation</i> can itself be represented by the abbreviation <abbr title="abbreviation">abbr</abbr>.

Some abbreviations, such as the initialism <abbr title="HyperText Markup Language" class="small-caps">HTML</abbr> can also have a <code>.small-caps</code> added to the element to simulate small-caps.

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

// Does it dijon?
if ( 'querySelector' in document && 'addEventListener' in window && 'classList' in document.createElement('_') ) {
	
	//Map $ to querySelector
	function $(target){
		return document.querySelector(target);
	}
 
 	//ready()
	document.addEventListener('DOMContentLoaded', function() {
 
		// Traverse DOM and create variables
		var html = $('html'),
		nav = $('.js-navigation'),
		navToggler = $('.js-nav-toggler');
		
		// Replace the default `.no-js` with `.js`
		html.className = html.className.replace( /(?:^|\s)no-js(?!\S)/g , 'js' );
		
		// Listen for click event, toggle class names
		navToggler.addEventListener('click', function(e) {
			nav.classList.toggle('is-active');
			navToggler.classList.toggle('is-active');
		}, false);
 
	});
	//End of ready()
 
}
// End of dijon

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

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident tenetur sint temporibus ipsa recusandae iure deleniti praesentium alias. Obcaecati rem necessitatibus quis aspernatur nobis ipsum voluptatem, reprehenderit eaque dolorem, ad suscipit molestiae, cupiditate pariatur aliquid! Dolores?

### Figures

Figures are usually used for images.

<figure>
	<img class="js-lazy-load" data-original="http://placehold.it/640x360&text=16:9" alt="">
	<figcaption>Optional caption for images.</figcaption>
</figure>

<figure>
	<img class="js-lazy-load" data-original="http://placehold.it/640x360&text=16:9" alt=""><img class="js-lazy-load" data-original="http://placehold.it/640x360&text=16:9" alt="">
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

### Tables

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

A media link such as Youtube or Spotify, like a [trailer for the Daniel Radcliffe film Horns (2014)][media].    

[pullquote]: http://en.wikipedia.org/wiki/Pull_quote
[wiki]: http://en.wikipedia.org/wiki/Stout
[media]: http://www.youtube.com/watch?v=B8s_1UcdoNI
[outbound]: http://www.google.com