// Web Animations API entrance keyframes, extracted from the original vanilla
// landing page. Each entry is a { keyframes, options } pair ready to hand to
// Element.animate(). The staggered delays sequence the reveal:
// header (0ms) → cards (1000ms / 2000ms) → footer (3000ms).
export const entrances = {
  fromTop: {
    keyframes: [
      { offset: 0, transform: 'translateX(-100vw)', opacity: 0 },
      { offset: 1, transform: 'translateY(0)', opacity: 1 },
    ],
    options: { duration: 1000, easing: 'linear', delay: 0, iterations: 1, fill: 'forwards' },
  },
  fromBottom: {
    keyframes: [
      { offset: 0, transform: 'translateZ(-1400px) translateY(800px)', opacity: 0 },
      { offset: 1, transform: 'translateZ(0) translateY(0)', opacity: 1 },
    ],
    options: { duration: 1000, easing: 'linear', delay: 3000, iterations: 1, fill: 'forwards' },
  },
  fromLeft: {
    keyframes: [
      { offset: 0, transform: 'translateZ(-1400px) translateX(-1000px)', opacity: 0 },
      { offset: 1, transform: 'translateZ(0) translateX(0)', opacity: 1 },
    ],
    options: { duration: 1000, easing: 'linear', delay: 1000, iterations: 1, fill: 'forwards' },
  },
  fromRight: {
    keyframes: [
      { offset: 0, transform: 'translateZ(-1400px) translateX(1000px)', opacity: 0 },
      { offset: 1, transform: 'translateZ(0) translateX(0)', opacity: 1 },
    ],
    options: { duration: 1000, easing: 'linear', delay: 2000, iterations: 1, fill: 'forwards' },
  },
};
