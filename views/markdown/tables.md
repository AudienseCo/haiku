# Tables

We have a simple table design that accepts some modifiers to build more complex. The content is, by default, aligned to the left but you can use generic helpers to change the alignment. In the example, the second column is centered with `align-center` helper class. There are also modifiers specific for the table component. You can highlight a column adding a `numeral-highlight` class to the table as seen in the example. If you want to use composed titles you can use `.table-cell-title` and `.table-cell-subtitle` classes.

{{ component('components/tables/simple-table.html') }}
