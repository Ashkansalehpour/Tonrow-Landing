"use strict";

/**
 ** timeLine
 *? When we reached the breakMotor section, then the animation we gave this sequel to the CSS section would get rid of it.
 *@param entries {object}
 *@param observer {object}
 **/

export default function timeLine(animationElement) {
  const startAnimation = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animationElement.animate(
          [
            { transform: "translateX(0)" },
            { transform: "translateX(1280px)" },
            { transform: "translateX(1280px)" },
          ],
          { duration: 4000, fill: "forwards" }
        );
        observer.disconnect(); // Stop observing once animation starts
      }
    });
  };

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(startAnimation, observerOptions);

  observer.observe(animationElement);
}
