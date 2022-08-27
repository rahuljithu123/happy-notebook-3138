let image_arr = [
  "https://www.jcrew.com/brand_creative/homepage2022/09-Sep2/v2/2022sep_0823_hp_w_img0am.jpg",
  "https://www.jcrew.com/brand_creative/homepage2022/09-Sep2/v2/2022sep_0823_hp_w_img0e.jpg",
  "https://www.jcrew.com/brand_creative/homepage2022/09-Sep2/v2/2022sep_0823_hp_w_img0d.jpg",
  "https://www.jcrew.com/brand_creative/homepage2022/09-Sep2/v2/2022sep_0823_hp_w_img0c.jpg",
  "https://www.jcrew.com/brand_creative/homepage2022/09-Sep2/v2/2022sep_0823_hp_w_img0b.jpg",
];

let count = 0;
let id;
function Start() {
  let container = document.getElementById("slideImg_container");

  container.innerHTML = null;

  let img = document.createElement("img");
  id = setInterval(function () {
    if (count == image_arr.length) {
      count = 0;
    }
    img.src = image_arr[count];
    container.append(img);

    count++;
  }, 2000);
}

function pause() {
  clearInterval(id);
}

window.onload = function () {
  Start();
};
// ......................................................///////////////////

function men() {
  window.location.href = "../mens.html";
}

// .............................................slide part........................................

const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", (e) => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", (e) => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", (e) => (width = carousel.offsetWidth));

// .........................................................

import navbar from "../components/navbar.js";
console.log("navbar:", navbar);
let container = document.getElementById("nav_container");
container.innerHTML = navbar();

import footer from "../components/footer.js";
console.log(footer);
let container1 = document.getElementById("home_footer");
container1.innerHTML = footer();
