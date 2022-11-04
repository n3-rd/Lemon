import './style.css'
import vidim from 'vidim'

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import {gsap} from 'gsap';

Splitting();

const tl = gsap.timeline();
const enterButton = document.querySelector('.enter-button');
const backToCoverButton = document.querySelector('.cover-nav');

const mainTextAnimation = () =>{
  tl.from(".main-text .char", {
    y: 300,
    duration: 1,
    delay: 1,
    skewX: 7,
    stagger: 0.3
  })
}

const revealAnimation = gsap.timeline({
  paused: true,
}).to(enterButton, {
  duration: 1,
  opacity : 0,
})
.to(".main-text .char", {
  y: -300,
  duration: 1,
  delay: 1,
  skewX: 7,
  stagger: 0.3
})
.to('.main-desc-text', {
  opacity: 0,
  duration: 1,
  delay: 1,
})
.to('.reveal-box', {
  duration: 2,
  top: '0',
  delay: 1,
})
.to('.main-screen', {
  duration: 1,
  display: 'none',
})
.to('.reveal-box', {
  duration: 1,
  display: 'none',
})
.to('.reveal-screen',{
  display: 'block',
  opacity: 1,
  duration: 1,

})

mainTextAnimation()

enterButton.addEventListener('click', ()=>{
  revealAnimation.play()
})
backToCoverButton.addEventListener('click', ()=>{
  revealAnimation.reverse()
})