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
-  Mobile-first workflow
-  CSS Grid
-  Flexbox
-  JavaScript

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

The most challenging aspect of the project's design were the form inputs and the icons positioned within them. My first solution involved absolutely positioning the icons, but I was unable to apply `position: relative;` to the inputs and the icons lost their alignment when my border hover state was applied.

I then added the icons as background images to the inputs since they would stay centred when the layout re-adjusted. I did however position the dynamic error messages in order to prevent my top-level wrapper from responding and becoming either too wide or tall when they were dynamically inserted into the DOM.

Additionally, I learned about the `appearance` property in CSS which allows us to modify the default visual appearance of certain input fields. Here I used the property to remove the default dial that appears on number inputs and make it more like a text field instead.

```css
.input:hover {
   border: 2px solid #80ada8;
}
```

I applied a border while hovering over each input to keep in line with the original design, however doing so caused all other content around the input to respond from its increased height. To solve this problem I applied a default border to each input with the aplha channel set to 0 which was then toggled to 1 on hover, rendering it fully visible without causing any external content re-adjustment.

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

form.addEventListener('change', (e) => inputValidate(e.target))
```

I decided to use an object to store the user's input which would dynamically store each value added to it with a key name matching the id of the input. This contrasts to my previous method of using three separate variables instead, ultimtately taking up unnecessary lines of code.

The final calculation performed by the function above would only occur if all three keys were present, and based on a `change` event firing from any desired input. I'm aware that the `input` event would have been another appropriate event to listen for, since the user could receive live updated results as they entered new data.

### Continued development

I look forward to learning about other ways to validate numbers in Javascript, since the most common method `Number.isNaN()` only attempts to compare a value if the value is of a number type.

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis](https://www.linkedin.com/in/joshua-jameson-wallis/)
