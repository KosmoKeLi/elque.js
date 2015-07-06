# elque.js
Element Queries using jQuery and CSS. Minimalistic code (~900 bytes minified).

## Usage
Just add attribute 'data-elq="{ m: 600, l: 1000 }"' on any element.
Elque will add a state attribute 'data-elq-state="m"' according to break-points defined in the 'data-elq'-attribute.
The 'data-elq-state'-attribute can be used in CSS to style elements.
Smallest screen size will have no 'data-elq-state'-attribute.
Custom values can be defined in 'data-elq' ex.: { small: 100, medium: 200, large: 300, xl: 400 }.

## Bonus
Included is a sass-folder that contains a grid system that can be used together with elque.

## Sample
Checkout the sample page: index.html.

Sorry for the short project description, I will provide a better explanation when there's time. :)
