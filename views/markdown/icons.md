# Icons

Using SVG icons, an image format for vector graphics, to make our CSS more and more modular, structured and flexible. We have a `grunt` task to generate sprites of svg so you just need to include your svg in the proper folder and run `grunt svg`. Then, a partial already included already in the document will be updated and you can link your icon like so:

```html
<svg viewBox="0 0 100 100" class="icon-large st-icon">
  <use xlink:href="#icon-bubble"></use>
</svg>
```

In the previous case the SVG file would be named `bubble.svg`. The `icon-` prefix is added automatically and you can add custom classes to style the icon or to modify the size. Some icon examples:

{% include "partial/icons.html" %}
