# Menus

Menus are normally navigational elements but we have a section specially dedicated to them due to the amount of variants we have. A menu can go from a simple container show by a user action with arbitrary to a bubble menu specifically positioned and filled list of actions. Let's see some usage examples.

- [Simple menu](#simple-menu)
- [Menu bubble](#menu-bubble)
- [Menu positioning](#menu-positioning)

## Simple menu

The menu is a simple container with a shadow that will be used to compose more complex menus. You will usually give it a custom width and positioning since it will be generally shown by user action. Here is an example with an arbitrary content.

{{ component('components/menus/simple-menu.html') }}

## Menu bubble

Normally if the menu was shown because of a user action there will be a launcher. You may want the menu to point to the launcher. You can use a class with the pattern `menu-bubble-{y}-{x}` where *x* can be `top` or `bottom` and *y* can be `right` or `left`. You can also omit the `y` so the pointer will be centered. Let's see an example:

{{ component('components/menus/menu-bubble.html') }}

## Menu positioning

You can use some helpers to position the menus relative to the parent node. Say you have a structure where a node (being or not the menu shown launcher) is parent of the menu. You can use `.menu-align-{y}-{x}` where *x* can be `top` or `bottom` and *y* can be `right` or `left` to absolute position the child menu as indicated. If you omit the *x* parameter the menu will be centered and, in case it's a bubble menu, it will be centered relative to its pointer. It works for non-bubble menus as well.

{{ component('components/menus/menu-positioning.html') }}
