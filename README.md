# elque.js
Element Queries using jQuery and CSS. Minimalistic code (~900 bytes minified).

## Requires
This library requires jQuery (any version).

## Usage
Just add attribute with break-points to any element 'data-elq="{ m: 600, l: 1000 }"'.

```html
<div data-elq="{ m: 600, l: 1000 }"></div>
```

Elque will add a state attribute 'data-elq-state="m"' according to break-points defined in the 'data-elq'-attribute.

```html
<div data-elq="{ m: 600, l: 1000 }" data-elq-state="m"></div>
```

The 'data-elq-state'-attribute can be used in CSS to style elements.

```css
<style>
    div {
      background-color: yellow;
    }

    div[data-elq-state$="m"] {
      background-color: red;
    }
    
    div[data-elq-state$="l"] {
      background-color: green;
    }
</style>
```

Smallest screen size will have no 'data-elq-state'-attribute.
Any custom keys can be defined in 'data-elq' ex.:

```html
<div data-elq="{ small: 100, medium: 200, large: 300, xl: 400 }"></div>
```

## Bonus
Included is a sass-folder that contains a grid system that can be used together with elque.

## Sample
Checkout the sample page: index.html.

Sorry for the short project description, I will provide a better explanation when there's time. :)
