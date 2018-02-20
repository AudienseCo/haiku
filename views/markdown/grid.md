# Grid

The styleguide defines a basic pretty standard grid that can be personalized with different gutter sizes. We have three sizes at the moment and, also, you can have no gutter at all. If you want to use the grid with the gutter it's very important to use it just as a wrapper, not giving any styles to the columns themselves. The standard gutter is 2rem wide and the possible modifiers are:

- `.narrow` that sets a gutter of 1rem.
- `.wide` that sets a gutter of 4rem.
- `.full` that deletes the gutter.

Lets see an example of the grid. The modifiers should be applied on the `grid-row` element.

{{ component('components/grid/grid.html') }}
