"use strict";

const btnScrolTo = document.querySelector(".btn--scroll-to");
const scetion1 = document.querySelector("#section--1");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
const nav = document.querySelector(".nav");
///////////////////////////////////////
/* Modal window */

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
// ^^^ Simpler way of writing the function below
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
///////////////////////////////////////////
/* Button Scrolling */
/*
btnScrolTo.addEventListener("click", function () {
  // GetBoundingClientRect method gives you the coordinates and dimensions of an element
  const s1coords = scetion1.getBoundingClientRect();
  console.log(s1coords);

  // Scrolling
  // Outdated methods of scrolling
  // window.scrollTo( s1coords.left + wondow.pageXOffset, s1coords.top + window.pageYOffset)
  // window.scrollTo({ left: s1coords.left + wondow.pageXOffset, top: s1coords.top + window.pageYOffset, behavior: 'smooth'})
  // More modern way of scrolling
  scetion1.scrollIntoView({ behavior: "smooth" });
});
*/
///////////////////////////////////////////
/* Page Navigation/ Event Delegation */
// One way to fo it but it slows down performannce, think slower loading
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });
///////////////////////////////////////////
/* Button scrolling with improved performance */
// 1. Add event listener to commmon parent elememt
// 2. Determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  // Matching element
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
///////////////////////////////////////////
/* Tabbed Component */
// Bad practice below, if there were 100s of tabs it would have 100s of copies of that same function which slows down speed of page
// tabs.forEach((t) => t.addEventListener("click", () => console.log("TAB")));
// The better practice is the below function
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  // Guard clause
  if (!clicked) return;
  // Remove active class from tab/tab content
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));
  // Active tab
  clicked.classList.add("operations__tab--active");
  // Active content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
///////////////////////////////////////////
/* Menu fade animation */
// mouseover bubbles and mouseenter does not

const handleHover = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelector(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    // Find a way to make it work, current saying forEach not a function in console
    // siblings.forEach((el) => {
    //   if (el !== link) {
    //     el.style.opacity = opacity;
    //   }
    // });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener("mouseover", function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener("mouseout", function (e) {
  handleHover(e, 1);
});
///////////////////////////////////////////
/* Sticky Navigation */
// Below is one way to create a fixed navigation but not something you'd want to use if you want your page to be fast
// const initialCoords = scetion1.getBoundingClientRect();

// window.addEventListener("scroll", function (e) {
//   console.log("Scrolling");
//   if (this.window.scrollY > initialCoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });
///////////////////////////////////////////
/* Reveal Sections */
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
///////////////////////////////////////////
/* Lazy Loading Images */
const imgTargets = document.querySelectorAll("img[data-src]");
console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));
///////////////////////////////////////////
/* Slider */
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  // Slides positioning 0, 100%, 200%, 300%
  const goToSlide = function (slide) {
    slides.forEach(
      (slde, index) =>
        (slde.style.transform = `translateX(${100 * (index - slide)}%)`)
    );
  };
  // Want to call it right away so when your code starts the first slide is in position 0 so they're not overlapping
  goToSlide(0);

  let curSlide = 0;
  const maxSlides = slides.length;
  // Next Slide
  const nextSlide = function () {
    if (curSlide === maxSlides - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activeDot(curSlide);
  };
  // Previous Slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlides - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activeDot(curSlide);
  };
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
  // Slider using the arrow keys
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });
  // Dots of Slider
  const dotsContainer = document.querySelector(".dots");

  const createDots = function () {
    slides.forEach(function (slde, index) {
      dotsContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${index}"></button>`
      );
    });
  };
  createDots();

  const activeDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide='${slide}']`)
      .classList.add("dots__dot--active");
  };
  dotsContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const slide = e.target.dataset.slide;
      goToSlide(slide);
      activeDot(slide);
    }
  });
  // Called here so it starts on first slide when page is loaded
  activeDot(0);
};
slider();
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
/* Selecting elements */

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
const header = document.querySelector(".header");
console.log(header);
console.log(document.getElementById("section--1"));
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);
console.log(document.getElementsByClassName("btn"));

/* Creating  and inserting elements(Cookie Message) */
// How to create a cookie message
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  'We use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
// Before is the same thing as Prepend
header.before(message);
// header.append(message);
// After is the same thing as append
// header.after(message);

/* Deleting an element */

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });

/* Styles */
message.style.backgroundColor = "#37383d";

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
// Grab the height then add px to height using getComputedStyle method and changing it to a string using Number.parseFloat in order to add more px
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";
// Using setProperty you can add styles throughtout your webpage
// document.documentElement.style.setProperty("--color-primary", "lime");

/* Attirbutes */
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// Non standard way of setting an attribute
logo.setAttribute("game", "chess");
// If you add a non standard attribute using dot notation to get value will return undefined so use getAttribute to get value
console.log(logo.game);
console.log(logo.getAttribute("game"));

// Data attributes
console.log(logo.dataset.versionNumber);

// Class methods
// logo.classList.add()
// logo.classList.remove()
// logo.classList.toggle()
// logo.classList.contains()

// Can set className this way but will remove all other classes (Don't use)
// logo.className = 'hey'

/* Event handlers adn tyoe of events */
/*
const h1 = document.querySelector("h1");
// Benefits of addEventListener is you can add mulitply event listeners to an event and remove an event listener as well
const alertH1 = function (e) {
  alert("AddEventListener: Its working!");

  h1.removeEventListener("mouseenter", alertH1);
  // The event will be removed after 3 seconds using the setTimeout
  // setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);
};
h1.addEventListener("mouseenter", alertH1);
// Another way to remove an event listener

// Alternate way to add event listener

// h1.onmouseenter = function (e) {
//   alert("AddEventListener: Its working again!");
// };
*/
/* Propagation (capturing & bubbling) */
/*
// The event will start at the document and go to the target element(capturing) and go back through all its parent elements(bubbling)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) - min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK", e.target, e.currentTarget);

  // How to stop propagation, not good practice but can be used in complex situations
  // e.stopPropagation();
});
document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK", e.target, e.currentTarget);
});
document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK", e.target, e.currentTarget);
});
*/

/* Tranversing the DOM */
/*
// QuerySelector works with the document object and elements

// Tranversing downward: child elements
const h1 = document.querySelector("h1");
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "red";

// Tranversing upward: parent elements
console.log(h1.parentNode);
console.log(h1.parentElement);
// The closest method is like the opposite of the querySElector method. It finds the closest parent where as querySelector finds a child element no matter how far its nested
h1.closest("header").style.background = "yellow";

// Traversing side to side: sibling elements
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);
// Returns an HTML collection
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = "scale(.5)";
});
*/
