import head from "../components_1/exp.js";
document.getElementById("slide").innerHTML = head();



let arr_of_prod = [
  {
    img: "https://www.jcrew.com/s7-img-facade/BJ596_NA6157?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
    title: "Scalloped squareneck pointelle sweater",
    price: "2300",
  },
  {
    img: "https://www.jcrew.com/s7-img-facade/BF521_DM6042?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",

    title: "vintage slim-straight jean in Gemma wash",
    price: "2300",
  },
  {
    img: "https://www.jcrew.com/s7-img-facade/BJ079_PT1299?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
    title: "vintage slim-straight jean in Gemma wash",
    price: "2300",
  },
  {
    img: "https://www.jcrew.com/s7-img-facade/BH968_WT0002?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
    title: "vintage slim-straight jean in Gemma wash",
    price: "2300",
  },
  {
    img: "https://www.jcrew.com/s7-img-facade/BH436_HT0902?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
    title: "vintage slim-straight jean in Gemma wash",
    price: "2300",
  },
  {
    img: "https://www.jcrew.com/s7-img-facade/BF389_BL8133?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
    title: "vintage slim-straight jean in Gemma wash",
    price: "2300",
  },
  {
    img: "https://www.jcrew.com/s7-img-facade/BH437_NA6434?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
    title: "vintage slim-straight jean in Gemma wash",
    price: "1400",
  },
  {
    img: "https://www.jcrew.com/s7-img-facade/BA610_DM4764?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
    title: "vintage slim-straight jean in Gemma wash",
    price: "2300",
  },
  {
    img: "https://www.jcrew.com/s7-img-facade/BC107_BL8133?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
    title: "vintage slim-straight jean in Gemma wash",
    price: "2300",
  },
  {
    img: "https://www.jcrew.com/s7-img-facade/BF179_BL8133?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
    title: "vintage slim-straight jean in Gemma wash",
    price: "1200",
  },
  {
    img: "https://www.jcrew.com/s7-img-facade/BF192_YD0801?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
    title: "vintage slim-straight jean in Gemma wash",
    price: "2300",
  },
  {
    img: "https://www.jcrew.com/s7-img-facade/BF179_BL7535?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
    title: "vintage slim-straight jean in Gemma wash",
    price: "1200",
  },
  {
    img: "https://www.jcrew.com/s7-img-facade/BG316_BL8486?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
    title: "vintage slim-straight jean in Gemma wash",
    price: "2300",
  },
  {
    img: "https://www.jcrew.com/s7-img-facade/BI499_PT1329?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
    title: "vintage slim-straight jean in Gemma wash",
    price: "1300",
  },
  {
    img: "https://www.jcrew.com/s7-img-facade/BH439_GR6112?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
    title: "vintage slim-straight jean in Gemma wash",
    price: "2300",
  },
];

let arr_of_product = [];
let append_prod = (data) => {
  let prod_cont = document.getElementById("prod_cont");
  prod_cont.innerHTML = null;

  data.forEach((el) => {
    let img = document.createElement("img");
    img.src = el.img;

    let title = document.createElement("p");

    title.innerText = el.title;

    let price = document.createElement("h4");

    price.innerText = `INR ${el.price}`;
    let box = document.createElement("div");
    box.setAttribute("class", "prod");
    box.append(img, title, price);

    box.onclick = () => {
      saveProd(el);
    };

    prod_cont.append(box);
  });
};
let saveProd = (data) => {
  arr_of_product.push(data);
  localStorage.setItem("stored_prod", JSON.stringify(arr_of_product));
  window.location.href = "des_page.html";
};
append_prod(arr_of_prod);

//FILTER
document.getElementById("showFilters").addEventListener("change", () => {
  let showFilters = document.getElementById("showFilters").value;
  if (showFilters === "Filters: Price <= 1200") {
    let filter_1 = arr_of_prod.filter((el) => {
      return el.price <= 1200;
    });
    append_prod(filter_1);
  }
  if (showFilters === "Filters: Price < 1400") {
    let filter_2 = arr_of_prod.filter((el) => {
      return el.price < 1400;
    });
    append_prod(filter_2);
  }
});

//SORT
document.getElementById("featured").addEventListener("change", () => {
  let featured = document.getElementById("featured").value;
  if (featured === "LTH") {
    let sortLTH = arr_of_prod.sort((a, b) => {
      return a.price - b.price;
    });
    append_prod(sortLTH);
  }
  if (featured === "HTL") {
    let sortHTL = arr_of_prod.sort((a, b) => {
      return b.price - a.price;
    });
    append_prod(sortHTL);
  }
});
