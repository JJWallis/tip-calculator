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
.input {
   appearance: textfield;
}

.dollar-icon,
.person-icon {
   position: absolute;
   left: 10px;
   bottom: 16%;
}

.input:hover {
   border: 2px solid #80ada8;
}
```

Bg-img for icons on input vs positioning | positioned error msgs | appearance prop - hide number input dials

Border on hover - if present before but colour alpha 0 - don't get other content responding on hover | when btn selected - colour fill stays post click (to show active amount)

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
```

Obj - store values usr would add as they inputted info (matched keys with type of input so would dynamically add to whatever one usr selected vs individual vars) | converting input to number (validation 1st) | Number.isNaN() vs isFinite()

Great basic maths + logic practice - at result using all obj values if all 3 present (truthy - `Object.Keys()`) - arrow func to calculate + interpolate corresponding values into equation in readable manner (vs using array to store user data)

```js
form.addEventListener('change', (e) => inputValidate(e.target))
```

Input event vs change

### Continued development

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis]()
