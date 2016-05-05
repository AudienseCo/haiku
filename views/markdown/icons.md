# Icons

Using SVG icons, an image format for vector graphics, we make our CSS more and more modular, structured and flexible. Instead of a icon font, we go for SVG sprite maps. To use an icon you just have to declare an `svg` node with a class `.icon` to inherit the base icon properties. Then, inside the node include a `use` tag with a reference to the sprite map and the shape you want to use. For example, to include *socialbro* icon you need to write:

```html
<svg class="icon">
  <use xlink:href="/svg-defs.svg#icon-socialbro"></use>
</svg>
```

Or the tpl helper
```html
{% raw %}
<svg class="icon">{{%svg:icon-close}}</svg>
{% endraw %}
```

Here we have a list with all the icons we have so far so it's easy to identify and use anyone.

{% include "partial/icons.html" %}

## Icon Styling

The best thing about using SVG is styling. As we saw, with `icon` class you inherit all icon base properties but actually it's enough having a class that starts with `icon`. Then, you can add as many properties as you want to give specific styles. To give specific properties for an icon type, please, use the name of the icon. For example, **twitter** icon has the corporative color if you use the class `.icon-twitter`.

Consider using helpers to give a the size of an icon. By default `40px` is the square size of the icon but you have a group of classes named `.icon-size-<size>` where size can be 20, 30, 35, 40, 45, 50, 55 or 60 pixels.

In case your icon is integrated with text you can use the class `.icon-text` which will give you a sizing and alignment proportional to the text in which is integrated.

You can use the `.spin` class to make any icon spin.

## Adding a new shape

To add a new shape you just have to copy the svg source file at `/assets/svg` with the name you want, for example `bubble.svg`. Then run `grunt svg` from the command line to update the sprite map located at `/public` folder. Now you can reference the shape with `#icon-name` in the `use` tag. In the `bubble.svg` example it would be `#icon-bubble`.
