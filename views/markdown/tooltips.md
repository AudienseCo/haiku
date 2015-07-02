# Tooltips

You can add a tooltip to nearly any element in the app. It is done **entirely in CSS** except for the show and hide behavior. To use it you need to add an `aria-label` attribute to the element with the message to display in the tooltip and also a couple of classes. First class needed is `.tooltipped` and the second one is `.tooltipped-{position}` which specifies the position.

In this case we specify the position with north (`n`), south (`s`), west (`w`), east (`e`), and combinations such as north-west (`nw`), south-east (`se`) etc. Optionally, if the tooltip has multiple lines, you can add a class `.tooltipped-multiline` to display a tooltip with fixed width. To display the tooltip you need to add a class `tooltip-active`. Here is an example:

{{ component('components/tooltips/tooltips.html') }}
