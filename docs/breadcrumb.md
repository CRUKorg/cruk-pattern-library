---
layout: page
title: Breadcrumb
---

This pattern is used for a breadcrumb element.

A breadcrumb trail should always include the highest level (home) link, as well as the current page link. Those
can be hidden later if required, although that reduces usability.

A breadcrumb trail should not be output if user is on the home page, or one level under... there should be at least
three items in every breadcrumb.

## Standard Breadcrumb

Includes home link and current page, to make it clear "where we are".

{% example html %}
<nav id="breadcrumb" aria-label="You are here">
    <ol itemscope itemtype="http://schema.org/BreadcrumbList">
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <a href="/" aria-level="1" itemprop="item">Home</a>
            <meta itemprop="position" content="1" />
        </li>
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <a href="/foo" aria-level="2" itemprop="item">Foo</a>
            <meta itemprop="position" content="2" />
        </li>
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <a href="/foo/bar" aria-level="3" itemprop="item">Bar</a>
            <meta itemprop="position" content="3" />
        </li>
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <a href="/foo/bar/baz" aria-level="4" aria-current="page" itemprop="item">Baz</a>
            <meta itemprop="position" content="4" />
        </li>
    </ol>
</nav>
{% endexample %}

## Shortened Breadcrumb

Less usable, but reduces horizontal space usage on very deep pages.

{% example html %}
<nav id="breadcrumb" aria-label="You are here" class="breadcrumb--hide-current breadcrumb--hide-top">
    <ol itemscope itemtype="http://schema.org/BreadcrumbList">
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <a href="/" aria-level="1" itemprop="item">Home</a>
            <meta itemprop="position" content="1" />
        </li>
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <a href="/foo" aria-level="2" itemprop="item">Foo</a>
            <meta itemprop="position" content="2" />
        </li>
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <a href="/foo/bar" aria-level="3" itemprop="item">Bar</a>
            <meta itemprop="position" content="3" />
        </li>
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <a href="/foo/bar/baz" aria-level="4" aria-current="page" itemprop="item">Baz</a>
            <meta itemprop="position" content="4" />
        </li>
    </ol>
</nav>
{% endexample %}
