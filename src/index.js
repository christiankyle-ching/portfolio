import "./firebase";

var elementsToAnimate = document.querySelectorAll(
  '[class^="box-"], .skills-grid > a'
);

elementsToAnimate.forEach((el) => {
  const min = 200;
  const max = 1500;
  const randomTime = Math.floor(Math.random() * (max - min) + min);

  setTimeout(() => {
    el.style.opacity = 1.0;
  }, randomTime);
});
