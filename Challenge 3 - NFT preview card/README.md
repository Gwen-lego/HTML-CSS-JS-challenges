# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/Gwen-lego/html-Css-challenges/blob/main/Challenge%203%20-%20NFT%20preview%20card/index.html)
- Live Site URL: [Add live site URL here](https://gwen-lego.github.io/html-Css-challenges/Challenge%203%20-%20NFT%20preview%20card/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox


**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

It gave me the opportunity to learn the pseudo elements ::before and ::after to add a layout and icon on top of the image when you hover on it.
```css
.img-container::before {
    content: '';
    background: hsla(178, 100%, 50%, 0.5);
    width: 100%;
    height: 99%;
    position: absolute;
    opacity: 0;
    z-index: 1;
    transition: 0.5s ease-in-out;
    border-radius: 0.8em;
}
```

### Useful resources

I watched Kevin Powell's videos about ::before & ::after:
- [Before and After pseudo elements explained - part one: how they work](https://www.youtube.com/watch?v=zGiirUiWslI)
- [CSS Before and After pseudo elements explained - part two: the content property](https://www.youtube.com/watch?v=xoRbkm8XgfQ)
- [CSS Before and After pseudo elements explained - part three: as design elements](https://www.youtube.com/watch?v=djbtPnNmc0I)

## Acknowledgments

Frontend Mentor for the challenge
Kevin Powell for his awesome tutorials

