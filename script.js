



const textEl = document.getElementById("changingText");

const texts = [
  "Become a Professional MERN Stack Developer in 1 Year",
  "Learn HTML CSS JavaScript React and much more",
  "Start Freelancing and earn online easily",
  "Build real projects from day one"
];

let current = 0;

function splitWords(text){
  return text.split(" ").map(word => `<span class="word">${word}</span>`).join(" ");
}

function showText(){
  textEl.innerHTML = splitWords(texts[current]);
  const words = textEl.querySelectorAll(".word");

  words.forEach((word, i) => {
    setTimeout(() => {
      word.classList.add("show");
    }, i * 100); // stagger delay
  });
}

function changeText(){
  const words = textEl.querySelectorAll(".word");

  words.forEach((word, i) => {
    setTimeout(() => {
      word.classList.remove("show");
      word.classList.add("hide");
    }, i * 50);
  });

  setTimeout(() => {
    current = (current + 1) % texts.length;
    showText();
  }, 600);
}

// first load
showText();

// loop
setInterval(changeText, 4000);




const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
  item.querySelector(".accordion-btn").addEventListener("click", () => {

    // close others
    items.forEach(el => {
      if (el !== item) {
        el.classList.remove("active");
      }
    });

    // toggle current
    item.classList.toggle("active");
  });
});


let count = 40;
let counter = document.getElementById("counter");

setInterval(() => {
  if (count > 30) {
    count--;
    counter.innerText = count;
  }
}, 10000);









const track = document.querySelector(".track");
const cards = document.querySelectorAll(".card");

const leftBtn = document.querySelector(".arrow-left");
const rightBtn = document.querySelector(".arrow-right");

let slidePos = 0; // renamed variable
const visibleCards = 3;

function updateSlider() {
  const cardWidth = cards[0].offsetWidth + 20;
  track.style.transform = `translateX(-${slidePos * cardWidth}px)`;
}

// RIGHT
rightBtn.addEventListener("click", () => {
  if (slidePos < cards.length - visibleCards) {
    slidePos++;
  } else {
    slidePos = 0;
  }
  updateSlider();
});

// LEFT
leftBtn.addEventListener("click", () => {
  if (slidePos > 0) {
    slidePos--;
  } else {
    slidePos = cards.length - visibleCards;
  }
  updateSlider();
});

// AUTO SLIDE
setInterval(() => {
  if (slidePos < cards.length - visibleCards) {
    slidePos++;
  } else {
    slidePos = 0;
  }
  updateSlider();
}, 3000);




function studentsGuide() {
  document.getElementById("faq-section").scrollIntoView({
    behavior: "smooth"
  });
}




document.addEventListener("DOMContentLoaded", function(){

  const elements = document.querySelectorAll(".animated_heading");

  function checkScroll(){
    const triggerBottom = window.innerHeight * 0.7;

    elements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;

      if(boxTop < triggerBottom){
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();

});




document.addEventListener("DOMContentLoaded", function(){

  const elements = document.querySelectorAll(".animate-left, .animate-right");

  function reveal(){
    const trigger = window.innerHeight * 0.85;

    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;

      if(top < trigger){
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", reveal);
  reveal();

});




const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

const mobileLinks = document.querySelectorAll(".mobile-nav a");

mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});
