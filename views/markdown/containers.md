# Containers

Here we will be listing all elements that acts as simple wrappers to hold specific content.

## Panel

A simple container with a title

{{ component('components/containers/panel.html') }}

## Cards

### Status Card

The status card should be used to display information about items having a lifespan or that are actionable. For example
a monitoring campaign or a Twitter Ads campaign will run for a specific duration and can be paused and resumed.

States of the card can be toggled with the class `currently-running` and `currently-paused` which
will show certain elements or not.

Header menus can be made visible by adding the class `active` to the parent of the clicked button.

{{ component('components/containers/card-status.html') }}
