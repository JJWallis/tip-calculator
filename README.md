# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX) on Frontend Mentor

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
   -  [Continued development](#continued-development)
-  [Author](#author)

## Overview

### The challenge

Your users should be able to:

-  View the optimal layout for the app depending on their device's screen size
-  See hover states for all interactive elements on the page
-  Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./Screenshot.png)

### Links

-  Live Site URL:

## My process

### Built with

-  Semantic HTML5 markup
-  CSS custom properties
-  Flexbox
-  CSS Grid
-  Mobile-first workflow
-  Vanilla JS

### What I learned

```css
.input:hover {
   transition: 400ms;
}
/* 1st use - inneficient as transitioning al properties */
.error {
   border: 1px solid #b38578;
}
/* 1st use of utlity + functional colours */
```

```js
let values = {}

function calculate() {
   const arr = Object.keys(values)
   if (arr.length === 3) {
      const tipPerPerson = () =>
         (values['input-bill'] / values['input-ppl']) *
         (values['input-tip'] / 100)
      const tip = tipPerPerson()
      const totalPerPerson = () =>
         values['input-bill'] / values['input-ppl'] + tip
      element(tipTotal, 'innerText', `$${tip}`)
      element(total, 'innerText', `$${totalPerPerson()}`)
      classList(btnReset, 'add', 'selected')
   }
}

// Object.keys() + dynamic calculate func
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis]()

###### TODO

HTML:

Buttons as direct children of grid container (showing power of Grid)

CSS:

Autoprefixer usage - bloated CSS with prefixes | compiler better for readability

Grid layout used tip amount btns + flex for general layout | fluid grid tracks which stop from max-width on parent flex wrapper

Border on hover - if present before but colour alpha 0 - don't get other content responding on hover | when btn selected - colour fill stays post click (to show active amount)

Transition - 1st project using these | much smoother than static

Bg-img for icons on input vs positioning | positioned error msgs | appearance prop - hide number input dials | txt-alignment in imgs - to right-hand side

JS:

Obj - store values usr would add as they inputted info (matched keys with type of input so would dynamically add to whatever one usr selected vs individual vars) | resetting to empty obj when reset btn clicked | converting input to number (validation 1st)

Great basic maths + logic practice - at result using all obj values if all 3 present (truthy) - arrow func to calculate + interpolate corresponding values into equation

Building final number output format of str to match preset one in html (template literals)

Number.isNaN() vs isFinite()

Input event vs change
