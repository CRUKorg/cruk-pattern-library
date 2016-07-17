---
layout: page
title: HTML5 inline elements
---

## Examples

_See the [Mozilla Developer Network HTML element reference](https://developer.mozilla.org/en/docs/Web/HTML/Element#Inline_text_semantics)_ for more information about using inline elements.

{% example html %}
<dl>
<dt>&lt;a&gt;</dt>
<dd>The HTML anchor element defines a hyperlink, the named target destination for a hyperlink, or both.</dd>
<dd><i>Example:</i> Please visit to our <a href="#">help page</a> for further information.</dd>

<dt>&lt;abbr&gt;</dt>
<dd>The HTML abbreviation element represents an abbreviation and optionally provides a full description for it in the title attribute.</dd>
<dd><i>Example:</i> The largest cancer charity in this country is <abbr title="Cancer Research UK">CRUK</abbr></dd>

<dt>&lt;b&gt;</dt>
<dd>The HTML bold element represents a span of text stylistically different from normal text, without conveying any special importance or relevance.</dd>
<dd><i>Example:</i> A new event called <b>Shine</b> has been announced by CRUK.</dd>

<dt>&lt;br&gt;</dt>
<dd>The HTML line break element produces a line<br/>break<br/>in the text (carriage-return).</dd>

<dt>&lt;cite&gt;</dt>
<dd>The HTML citation element represents a reference to a creative work. It must include the title of a work or a URL reference, which may be in an abbreviated form according to the conventions used for the addition of citation metadata.</dd>
<dd><i>Example:</i> Her line was a quote from <cite>Romeo and Juliet</cite>.</dd>

<dt>&lt;code&gt;</dt>
<dd>The HTML code element represents a fragment of computer code.</dd>
<dd><i>Example:</i> <code>x = 12.5;</code></dd>

<dt>&lt;data&gt;</dt>
<dd>The HTML data element links a given content with a machine-readable translation. If the content is time- or date-related, the &lt;time&gt; element should be used.</dd>
<dd><i>Example:</i> <data value="89847892">Shine event ID</data></dd>

<dt>&lt;del&gt;</dt>
<dd>The HTML deleted text element marks text that is to be deleted from the content.</dd>
<dd><i>Example:</i> The man was wearing <del datetime="2012-09-14T10:21:44+09:00">brown shoes, </del>a brown hat and a grey overcoat.</dd>

<dt>&lt;dfn&gt;</dt>
<dd>The HTML definition element represents the defining instance of a term.</dd>
<dd><i>Example:</i> <dfn id="cruk-def">Cancer Research UK</dfn> is the largest cancer charity outside of the US.</dd>

<dt>&lt;em&gt;</dt>
<dd>The HTML emphasis element marks text that has stress emphasis.</dd>
<dd><i>Example:</i> This is an <em>important</em> idea!</dd>

<dt>&lt;i&gt;</dt>
<dd>The HTML italic element represents a range of text that is set off from the normal text for some reason, for example, technical terms, foreign language phrases, or fictional character thoughts.</dd>
<dd><i>Example:</i> She presented the change as a <i>fait accompli</i> &mdash; there was nothing to be done!</dd>

<dt>&lt;ins&gt;</dt>
<dd>The HTML inserted text element marks text that has been inserted into the content.</dd>
<dd><i>Example:</i> The man was wearing <ins datetime="2012-09-14T10:21:44+09:00">brown shoes, </ins>a brown hat and a grey overcoat.</dd>

<dt>&lt;kbd&gt;</dt>
<dd>The HTML keyboard input element represents user input and produces an inline element displayed in the browser's default monospace font.</dd>
<dd><i>Example:</i> Type <kbd>ctrl-S</kbd> to save.</dd>

<dt>&lt;mark&gt;</dt>
<dd>The HTML mark element represents highlighted text, i.e., a run of text marked for reference purpose, due to its relevance in a particular context. For example it can be used in a page showing search results to highlight every instance of the searched-for word.</dd>
<dd><i>Example:</i> Here is some <mark>highlighted text</mark> to remind me to look it up.</dd>

<dt>&lt;q&gt;</dt>
<dd>The HTML quote element indicates that the enclosed text is a short inline quotation. This element is intended for short quotations that don't require paragraph breaks; for long quotations use &lt;blockquote&gt;.</dd>
<dd><i>Example:</i> I think the line starts <q cite="Hamlet">To be or not to be&hellip;</q>.</dd>

<dt>&lt;s&gt;</dt>
<dd>The HTML strikethrough element renders text with a strikethrough, or a line through it. Use the &lt;s&gt; element to represent things that are no longer relevant or no longer accurate. However, &lt;s&gt; is not appropriate when indicating document edits; for that, use the &lt;del&gt; and &lt;ins&gt; elements , as appropriate.</dd>
<dd><i>Example:</i> Price: <s>&pound;30.00</s> &pound;35.00</dd>

<dt>&lt;samp&gt;</dt>
<dd>The HTML sample output element is intended to identify sample output from a computer program. It is usually displayed in the browser's default monotype font (such as Lucida Console).</dd>
<dd><i>Example:</i> The program spewed out thousands of lines saying &mdash; <samp>Error: Does not compute</samp>.</dd>

<dt>&lt;small&gt;</dt>
<dd>The HTML small element makes the text font size one size smaller and represents side-comments and small print, including copyright and legal text, independent of its styled presentation.</dd>
<dd><i>Example:</i> This is fairly important. <small>But this text is not so important</small>.</dd>

<dt>&lt;span&gt;</dt>
<dd>The HTML &lt;span&gt; element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. &lt;span&gt; is very much like a &lt;div&gt; element, but &lt;div&gt; is a block-level element whereas a &lt;span&gt; is an inline element.</dd>
<dd><i>Example:</i> Every occurence of the words <span class="cruk-text" style="color: magenta">Cancer Research UK</span> should be rendered in magenta text.</dd>

<dt>&lt;strong&gt;</dt>
<dd>The HTML strong element gives text strong importance, and is typically displayed in bold.</dd>
<dd><i>Example:</i> This is a <strong>very important</strong> idea!</dd>

<dt>&lt;sub&gt;</dt>
<dd>The HTML subscript element defines a span of text that should be displayed, for typographic reasons, lower, and often smaller, than the main span of text.</dd>
<dd><i>Example:</i> The chemical formula for water is H<sub>2</sub>O.</dd>

<dt>&lt;sup&gt;</dt>
<dd>The HTML superscript element defines a span of text that should be displayed, for typographic reasons, higher, and often smaller, than the main span of text.</dd>
<dd><i>Example:</i> The area of a circle is &pi;r<sup>2</sup></dd>

<dt>&lt;time&gt;</dt>
<dd>The HTML time element represents either a time on a 24-hour clock or a precise date in the Gregorian calendar (with optional time and timezone information).</dd>
<dd><i>Example:</i> The event took place on <time datetime="2001-05-15 19:00">May 15 at 7.00pm</time>.</dd>

<dt>&lt;u&gt;</dt>
<dd>The HTML underline element renders text with an underline, a line under the baseline of its content.</dd>
<dd><i>Example:</i> This text is <u>underlined</u>, but be careful not to confuse it with a link!</dd>

<dt>&lt;var&gt;</dt>
<dd>The HTML variable element represents a variable in a mathematical expression or a programming context.</dd>
<dd><i>Example:</i> In this program we are representing the area of the circle with the variable <var>area_of_circle</var>.</dd>

</dl>
{% endexample %}
