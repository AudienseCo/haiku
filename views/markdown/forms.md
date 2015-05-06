# Forms

This sections lists all components related to forms except for [buttons](/docs/buttons) that have their own section. We have complex form elements but also style for the most basic ones.

## Base inputs

Here we list some classes to use with basic input elements. Inputs for text and numbers and select buttons have a similar style that can be applied with the class `.input-base`. If it's a select or a trigger button for a dropdown you can add a caret with the modifier `.with-caret`. Note that in order overlap browser styles we need a wrapper for the `select` node as shown below.

{{ component('components/forms/general-inputs.html') }}

## Input groups

This allows to attach a label or a button action to a text input. There are some styles in the browser that cannot be overwritten so an extra DOM node is needed in the case of an attached button.

{{ component('components/forms/input-groups.html') }}
