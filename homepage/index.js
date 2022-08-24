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
