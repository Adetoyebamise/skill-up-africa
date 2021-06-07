const slides = document.querySelectorAll(".slide");

const nextBtn = document.querySelector(".button-direction-right");

const prevBtn = document.querySelector(".button-direction-left");

// Target the aside navigation
const introNavClick = document.querySelectorAll(
  ".side-description >  aside > nav > span:nth-child(1)"
);
const aboutNavClick = document.querySelectorAll(
  ".side-description >  aside > nav > span:nth-child(2)"
);
const skillNavClick = document.querySelectorAll(
  ".side-description >  aside > nav > span:nth-child(3)"
);
const projectNavClick = document.querySelectorAll(
  ".side-description >  aside > nav > span:nth-child(4)"
);
const contactNavClick = document.querySelectorAll(
  ".side-description > aside > nav > span:nth-child(5)"
);

// body > div.side-description > aside > nav > span:nth-child(2)
console.log(introNavClick);
console.log(aboutNavClick);
console.log(skillNavClick);
console.log(projectNavClick);
console.log(contactNavClick);

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

// Target each element because querySelector returns an array
introNavClick.forEach((inputNav) => {
  inputNav.addEventListener("click", () => {
    counter = 0;
    carousel();
  });
});

aboutNavClick.forEach((aboutNav) => {
  aboutNav.addEventListener("click", () => {
    counter = 1;
    carousel();
  });
});

skillNavClick.forEach((skillNav) => {
  skillNav.addEventListener("click", () => {
    counter = 2;
    carousel();
  });
});

projectNavClick.forEach((projectNav) => {
  projectNav.addEventListener("click", () => {
    counter = 3;
    carousel();
  });
});

contactNavClick.forEach((contactNav) => {
  contactNav.addEventListener("click", () => {
    counter = 4;
    carousel();
  });
});

// Create an event listener for the next button
nextBtn.addEventListener("click", () => {
  counter++;
  carousel();
});

// Create an event listener for the next button
prevBtn.addEventListener("click", () => {
  counter--;
  carousel();
});

// create carousel function for x-direction translation;
function carousel() {
  if (counter === slides.length) {
    counter = 0;
  }

  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
