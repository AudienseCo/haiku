# Navigation

The components included in this section are intended to make easier to the user to navigate through the application. Some of the components are very generic like the paginator and others are very specific like the dashboard breadcrumb.

- [Pagination](#pagination)
- [Breadcrumbs](#breadcrumbs)
- [Tabs](#tabs)

## Pagination

A simple pagination element. If there are too many pages you can show just the pages that make sense the most. To highlight a page add to the link the class `.is-active`.

{{ component('components/pagination/default.html') }}

## Breadcrumbs

The breadcrumb is intended to make easier the navigation for the user. It shows kind of the steps needed to go to the current page so the user can go forwards and backwards. We have three different flavors for breadcrumbs, one complex and two simple.

### Dashboard

This flavor is shown in Socialbro's dashboard and it's the most important. Apart from showing a breadcrumb it has buttons to change filtering options or a specific step of it.

{{ component('components/breadcrumb/dashboard.html') }}

### Default

The default breadcrumb is intended to use when there is not too much space and it's pretty much a classic breadcrumb. It just shows a path to make easier the navigation to previous pages.

{{ component('components/breadcrumb/default.html') }}


### Simple

The simple breadcrumb is used in the same context that the default but with simpler styling.

{{ component('components/breadcrumb/simple.html') }}


## Tabs

When you need to toggle between different views, consider using tabs. We have different variants depending on the style and alignment of them. By default the tabs text is aligned to left and coming as a block filling the whole element width. You can set an active tab by using `.sb-tab-active` class.

{{ component('components/tabs/default.html') }}

### Tabs block bottom, text align center

To align the tabs at the bottom you need to invert the declaration order with the content and add a class modifier `.sb-tabs--block-bottom`. To center the text tabs you can add the class `align-center` to the `.sb-tabs-group`.

{{ component('components/tabs/bottom-center.html') }}

### Tabs block on left

Another variant is to have the tabs floating to the left instead of filling the whole width. You can use the modifier `.sb-tabs--block-left` to have them on left.

{{ component('components/tabs/block-left.html') }}


### Tabs block on right

Similar to the previous one but the tabs float to the right in this case. You can get it with `.sb-tabs--block-right`.

{{ component('components/tabs/block-right.html') }}

