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
```

The most challenging aspect of the project's design were the form inputs, particularly regarding the icons present within. My solution was to position those icons over the inputs, but I quickly ran into the problem of not being able to apply `position: relative` to the inputs, as well as the icons loosing their alignment when my border hover state was applied.

To solve this problem, I decided to try adding the icons as background images to the inputs which worked successfully. Not only did they stay centred when the inputs re-adjusted, but positioning them was much easier as well. I did however position the dynamic error messages in order to prevent my top-level wrapper from responding and becoming either too wide or tall.

Additionally, I learned about the `appearance` property in CSS which allows us to modify the default visual appearance of certain input fields. In this particular project, I used the property to experiment with removing the default dial that appears on number inputs to make it more like a traditional text input instead. However, browser support for this property is still quite limited, so one shouldn't rely on it too heavily.

```css
.input:hover {
   border: 2px solid #80ada8;
}
```

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
