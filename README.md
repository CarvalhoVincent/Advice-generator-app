# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [https://github.com/CarvalhoVincent/Advice-generator-app]
- Live Site URL: [https://carvalhovincent.github.io/Advice-generator-app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript
- API



### What I learned

I didn't learn anything new in this project, but I tried to do as many things as possible from memory, like using variables, or the hover effect on the button, adding the blur.

```css
.button::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: hsl( var(--clr-green) );
    border-radius: 50%;
    opacity: 0;
    transition: opacity 500ms linear, filter ease, transform 500ms ease-in-out;
}

.button:hover::after {
    opacity: .2;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    transform: scale(1.5);
}
```

A second project in a row using an API to consolidate my knowledge.

I didn't notice the images with the quotes, so I created them myself.


### Continued development

Grid and Flexbox skills, responsive efficiency, JavaScript, refactoring code ?

### Useful resources

- [https://www.w3schools.com] - Used it for some reminders about CSS and JS.


## Author

- Frontend Mentor - [@CarvalhoVincent](https://www.frontendmentor.io/profile/CarvalhoVincent)


# Advice-generator-app
