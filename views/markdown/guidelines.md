# Coding guidelines

It's an almost impossible task to find a way to write consistent, future-proof and robust CSS. Our process has consisted of adding CSS rules to some sort of file organization.

Tired of being lost among our own bloated code and knowing how big a headache it was to maintain it, we've decided to evolve into a more modular architecture. An architecture that grants considerable improvements on productivity and maintainability. This is how it looks like today

## Tools

We use Sass, using its scss syntax for writing CSS. We find it easier to read and write code faster. We don't use any mixing library, we know that Compass or Bourbon are superpowerful but today working with Autoprefixer is a must for us. Then the combination of libsass + autoprefixer is a winner.

As task manager we use Grunt. Yeah, we know, Gulp is the hipster thing today. But we will be hispter again with next version of Grunt, we are pretty sure.

## Architecture

Organizing our folders and files is an essential task which saves us a lot of time. We prefer components over page level styles, we want our front end to feel like library code. Sass give us the chance to split our code into several folders and files without affecting performance. This is how we make:

- **Core**: This folder holds all sass machinary used in our framework. Variables, functions and mixins goes into this. Any settings belongs to the project will go here too.
- **Base**: The base style for the app. It usually includes any styles that affect to generic tags like html, body, ul, p, headings... Normalize gets inside this category because afftecs to the root of the elements.
- **Helpers**: Utility classes.
- **Objects**: Patterns ready to reuse across the app
- **Layout**: Any style that belongs to an specific view or layout, including an overwrite of an object, goes here. If you find overwritting twice a component, that is a code smell.
- **Vendor**: Any code made outside our app, usually linked to js plugins.

# Naming convention

Naming conventions are a team decision. Currently we are not following strict naming methodologies like BEM because we don't feel confortable enough. Instead we follow a simpler rule: Use hyphens when naming mixins, extends, classes & variables. Not camelCase or underscores.

# Good practices

## Formatting

- Use hyphens when naming `mixins`, `extends`, `classes` & `variables`: use `span-columns` not `span_columns` or `spanColumns`.
- Use space between property and value: `width: 20px` not `width:20px`.
- Use shorthand when appropriate, like `padding: 15px 0;` and not `padding: 15px 0px 15px 0px;`.
- Use a new line for every parameter. Use a blank line between declarations.
- Use 4 spaces, not 2 spaces and not tabs.
- Prefer hex color codes `#000`.
- Use `//` for comment blocks not `/* */`.
- Use single or double quotes consistently. Preference is for double quotes, e.g., `content: ""`.
- Use only lowercase, including colors.
- Don't add a unit specification after 0 values, unless required by a mixin.
- Keep things as short as possible without adding confusion.
- Comments rarely hurt. If you find an answer on Stack Overflow then add the link to a comment so future people know what’s up.

## Units

The favorite unit to use in styleguide is `rem`.
Then, a grun task ([grunt-pixrem](https://github.com/robwierzbowski/grunt-pixrem)) try to convert to `px` in build to be compatible with SocialBro.

The following rules **will no be converted**, so avoid use of `rem` on them:

```
background-size
border-image
border-radius
box-shadow
clip-path
column
grid
mask
object
perspective
scroll
shape
size
stroke
transform
```

Same happens with values that contains `calc` or `gradient`.

## Order

- Place scoped variables, `@extends` and `@includes` (excluding media query stuff) at the top of your declaration list, in that order.
- Use alphabetical order for declarations.
- Place media queries directly after the declaration list.
- Place concatenated selectors second.
- Place pseudo states and elements third.
- Place nested selectors last.

## Selectors

- Use classes over everything else in selectors.
- Don't use `#ids` for style. Just don't. Use `#ids` for javascript.
- Use meaningful names: `$visual-grid-color` not `$color` or `$vslgrd-clr`.
- Use ID and class names that are as short as possible but as long as necessary.
- Use one selector per line.
- If `:hover` pseudo class is styled, `:focus` should also be styled for accessibility.
- Avoid `@extends` as long as you can and embrace composition
- Avoid using the direct descendant selector `>`.
- Avoid nesting more than 3 selectors deep.
- Avoid using the HTML tag in the class name: `.news` not `.news-section`.
- Don't qualify selectors: `.widgets` not `div.widgets`.
- Avoid nesting within a media query.
- Watch the compiled file whenever you are developing a new feature.

## Organization

- Split code to ensure maintenability and mental sanity.
- There is no file small enough. No matter if one file only has 3 lines of code.
- Avoid having files longer than 100 lines as long as you can.

And the most important rule, use the *common sense*. All the styles, rules and approaches described here result from our experience and are what fits our team at the moment. This means to be a living styleguide. So add your opinion to them to improve our workflow as a team.
