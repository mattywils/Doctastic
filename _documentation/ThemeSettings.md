---
layout: page
title: Theme Configurations
categories: [Doctastic Theme Settings, Color, Fonts, Paging, Navigation]
excerpt: Doctastic Theme Configurations.
---

There are several Doctastic specific configurations that allow you to customize the Doctastic theme.  The configurations are in the _cofig.yml file under the Doctastic Theme Settings comment.  Below is a short description of each setting and it's purpose.

{% highlight liquid %}
# Doctastic Theme Settings
doctastic-logo: /images/Doctastic.png
doctastic-page-type: single

doctastic-primary-color: rgb(96,188,216)
doctastic-primary-color-active: rgb(102,199,229)
doctastic-secondary-color: rgb(245,161,7)
doctastic-secondary-color-active: rgb(250,215,87)

doctastic-main-font: Open Sans
doctastic-accent-font: Open Sans
{% endhighlight %}

#### doctastic-logo

A link to your logo.  Be sure to include the full path to the logo relative to the themes main directory.  For instance if the logo is in the images folder it should be something like /images/your-logo.png.  If you do not wish to use a logo this item may be left blank.  When blank your title configuration will be used in place of the logo on the documentation side bar.

#### doctastic-page-type

Allows you to change between a single-page layout and a multi-page layout.  For a single-page layout set to **single** and for a multi-page layout set to **multi**.

#### doctastic-primary-color, doctastic-primary-color-active, doctastic-secondary-color, and doctastic-secondary-color-active

Theme colors.  The active color is used when the item is hovered over as well as active.

#### doctastic-main-font, doctastic-accent-font

Theme fonts.  The main font is used for paragraphs while the accent font is used for the header tags and navigation.  These can be set to any font found on the [Google Fonts](https://www.google.com/fonts) website.