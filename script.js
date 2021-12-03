"use script";

const btnLft = document.querySelector(".testimonial-btn__lft");
const btnRgt = document.querySelector(".testimonial-btn__rgt");

const testimonialOne = document.querySelector(".testimonial--one");
const testimonialTwo = document.querySelector(".testimonial--two");

const btns = document.querySelectorAll(".testimonial-btn");

const testimonials = document.querySelectorAll(".testimonial");

const testimonial = [...testimonials];

const btn = [...btns];

btn.forEach((el) => {
  el.addEventListener("click", function () {
    testimonial.forEach((el, i) => {
      el.classList.toggle("hidden");
    });
  });
});
