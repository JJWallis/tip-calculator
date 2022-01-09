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
-  Javascript

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

The most challenging aspect of the project's design were the form inputs, particularly regarding the icons positioned within them. My solution was to position those icons over the inputs, but I quickly ran into the problem of not being able to apply `position: relative;` to the inputs, as well as the icons loosing their alignment when my border hover state was applied.

To solve this problem, I added the icons as background images to the inputs which worked successfully since they stay centred when the layout re-adjusted. I did however position the dynamic error messages in order to prevent my top-level wrapper from responding and becoming either too wide or tall.

Additionally, I learned about the `appearance` property in CSS, which allows us to modify the default visual appearance of certain input fields. In this project, I used the property to experiment with removing the default dial that appears on number inputs to make it more like a traditional text input instead.

```css
.input:hover {
   border: 2px solid #80ada8;
}
```

As explained above, I toggled a border on each input when hovering over to keep in line with the original design. However, when I first implemented this feature it caused all the content around the input to respond from its increased height, which I ultimately realised was because the border is part of the box-model for each element on the page. Therefore, in order to solve this problem I applied a default border to each input with the aplha channel set to 0. This was then toggled to 1 on hover, rendering it fully visible without causing any external content movement.

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

On the contrary to multiple other solutions, I decided to use an object to store the user's input which would dynamically store each value added to it with a key name matching the id of the input. This contrasted to other solutions because many used three individual variables to store the corresponding data, which took up more lines of code.

The final calculation performed by the function above would only occur if all three keys were present, and based on a `change` event firing from any of the inputs. Having examined other solutions, a more appropiate event to listen for would have been the `input` event, so the user could receive live updated results as they entered new data.

### Continued development

I look forward to learning about other ways to validate numbers in Javascript, since the most common method `Number.isNaN()` can sometimes incorrectly compare data types and return an incorrect boolean result.

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis](https://www.linkedin.com/in/joshua-jameson-wallis/)
