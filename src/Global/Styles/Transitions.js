import { css } from "styled-components"

export const TransitionStyles = css`
  /* Fade up */
  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }
  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }
  /* Fade down */
  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }
  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }
  /* Fade */
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms var(--easing);
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms var(--easing);
  }

  /* Slide */
  .slide-enter-active {
    animation: slide ease-in 400ms calc((var(--delay) - 1.5) * 100ms - 150ms) reverse both;
  }

  .slide-exit-active {
    animation: slide ease-out 400ms calc((var(--delay) - 1.5) * 100ms - 150ms) both;
  }

  .slide-enter-done {
    animation: none;
    translate: 0 !important;
  }

  @keyframes slide {
    0% {
      translate: 0;
    }

    100% {
      translate: calc(var(--container-width) * var(--direction, 1));
    }
  }

  /* Sqeeze */


  .sqeeze-enter {
    height: 0 !important;
    opacity: 0.01;
    transition: height 300ms var(--easing), opacity 300ms var(--easing);

    @media (max-width: 768px) {
      height: 1px !important;
      width: 0 !important;
      transition: width 300ms var(--easing), opacity 300ms var(--easing);
    }
  }
  .sqeeze-enter-active {
    opacity: 1;
    height: 100% !important;
    transition: height 300ms var(--easing), opacity 300ms var(--easing);

    @media (max-width: 768px) {
      height: 1px !important;
      width: 100% !important;
      transition: width 300ms var(--easing), opacity 300ms var(--easing);
    }
  }

  .loader-animation-enter {
    .left-door {
      transform: translateX(-55vw);
      transition: transform 1000ms var(--easing)
    }
    .right-door {
      transform: translateX(55vw);
      transition: transform 1000ms var(--easing)
    }
    span.left{
      transform: translateX(-55vw) !important;
      transition: transform 1000ms var(--easing);
    }
    span.right{
      transform: translateX(55vw) !important;
      transition: transform 1000ms var(--easing);
    }
  }

  .loader-animation-enter-active {
    .left-door {
      transform: translateX(0);
      transition: transform 1000ms var(--easing)
    }
    .right-door {
      transform: translateX(0);
      transition: transform 1000ms var(--easing)
    }
    span.left{
      transform: translateX(0vw) !important;
      transition: transform 1000ms var(--easing);
    }
    span.right{
      transform: translateX(0vw) !important;
      transition: transform 1000ms var(--easing);
    }
    .image-container {
      animation: rotate-animation 2s var(--easing) 1000ms infinite both;
    }
  }

  .loader-animation-enter-done {
    .image-container {
      animation: rotate-animation 2s var(--easing) 1000ms infinite both;
    }
  }

  .loader-animation-exit {
    .image-container {
      animation: rotate-animation 2s var(--easing) infinite both;
    }
  }

  .loader-animation-exit-active {
    .left-door {
      transform: translateX(-55vw);
      transition: transform 1000ms var(--easing)
    }
    .right-door {
      transform: translateX(55vw);
      transition: transform 1000ms var(--easing)
    }
    .image-container {
      animation: none;
    }
    span.left{
      transform: translateX(-55vw);
      transition: transform 1000ms var(--easing);
    }
    span.right{
      transform: translateX(55vw);
      transition: transform 1000ms var(--easing);
    }
  }
  

  @keyframes rotate-animation {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default TransitionStyles