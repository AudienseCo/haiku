# Colors

We have a color palette to unify the look and feel and to represent our brand. Right now it consists of ten base colors with multiple variations of those. There can be three variants: *primary*, *secondary* and *tertiary* colors and, for each variant three hues which are *regular*, *dark* and *light*. You can use a color with a SCSS function named `color` that accepts a mandatory string parameter (base color name) and two optional string parameters (variant and hue). We encourage you to **name always** the optional parameters to be more semantic.

{% include "partial/color-palette.html" %}

Here is an *example* illustrating how to use the function. The first parameter can be not named but the rest should be if you want to alter the order.

```scss
.component {
  color:        color("socialbro", $variant: "primary", $hue: "dark");
  background:   color("background", $hue: "light");
  border-color: color($name: "border", $variant: "secondary");
}
```
