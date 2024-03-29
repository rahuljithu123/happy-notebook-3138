// import head from "../components/exp.js";
// document.getElementById("slide").innerHTML = head();


let mensdata = [
  {
    imageUrl:
      "https://www.jcrew.com/s7-img-facade/BL631_PP4063?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
    title: "Heritage 14 oz. fleece retriever graphic hoodie",

    price: "$128.00-$138.00",

    productID: "Item BL631",
    hoverUrl: "https://www.jcrew.com/s7-img-facade/BL631_PP4063_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540"
  },
  {
    imageUrl:
      "https://www.jcrew.com/s7-img-facade/BJ352_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    title: "Heritage 14 oz. fleece sweatshirt",

    price: "$98.00-$108.00",

    productID: "Item BJ352",

    hoverUrl:"https://www.jcrew.com/s7-img-facade/BJ352_BK0001_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540"
  },
  {
    imageUrl:
      "https://www.jcrew.com/s7-img-facade/BJ353_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    title: "Heritage 14 oz. fleece hoodie",

    price: "$128.00-$138.00",

    productID: "Item BJ353",
    hoverUrl:"https://www.jcrew.com/s7-img-facade/BJ353_BK0001_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540"
  },
  {
    imageUrl:
      "https://www.jcrew.com/s7-img-facade/BJ326_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    title: "Heritage 14 oz. fleece sweatpant",

    price: "$98.00",

    productID: "Item BJ326",
    hoverUrl:"https://www.jcrew.com/s7-img-facade/BJ326_BK0001_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540"
  },
  {
    imageUrl:
      "https://www.jcrew.com/s7-img-facade/BL146_PP4032_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    title: "Heritage 14 oz. fleece embroidered oarsman dog sweatshirt",

    price: "$98.00-$108.00",

    productID: "Item BL146",
    hoverUrl:"https://www.jcrew.com/s7-img-facade/BL146_PP4032_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540"
  },
  {
    imageUrl:
      "https://www.jcrew.com/s7-img-facade/BJ349_PP3476?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    title: "Pacific fleece sweatpant",

    price: "$79.50",

    productID: "Item BJ349",
    hoverUrl:"https://www.jcrew.com/s7-img-facade/AT380_WZ0713?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540"
  },
  {
    imageUrl:
      "https://www.jcrew.com/s7-img-facade/AU005_BL8133?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
    title: "Quilted half-zip pullover",

    price: "$69.50",

    productID: "Item AU005",
    hoverUrl:"https://www.jcrew.com/s7-img-facade/BC474_HT1804?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540"
  },
  {
    imageUrl:
      "https://www.jcrew.com/s7-img-facade/BJ325_BL7435_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    title: "Heritage 14 oz. fleece cardigan sweater",

    price: "$118.00",

    productID: "Item BJ325",
    hoverUrl:"https://www.jcrew.com/s7-img-facade/BJ325_BL7435_d3?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540"
  },
  {
    imageUrl:
      "https://www.jcrew.com/s7-img-facade/BJ326_GR5673_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    title: "Heritage 14 oz. fleece sweatpant",

    price: "$98.00",

    productID: "Item BJ326",
    hoverUrl:"https://www.jcrew.com/s7-img-facade/BJ326_GR5673_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540"
  },
  {
    imageUrl:
      "https://www.jcrew.com/s7-img-facade/BJ352_GR5673_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    title: "Heritage 14 oz. fleece sweatshirt",

    price: "$98.00-$108.00",

    productID: "Item BJ352",
    hoverUrl:"https://www.jcrew.com/s7-img-facade/BJ352_GR5673_d3?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540"
  },
  {
    imageUrl:
      "https://www.jcrew.com/s7-img-facade/BL145_PP4033_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    title: "Heritage 14 oz. fleece oarsman graphic sweatshirt",

    price: "$98.00-$108.00",

    productID: "Item BL145",
    hoverUrl:"https://www.jcrew.com/s7-img-facade/BL145_PP4033_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540"
  },
  {
    imageUrl:
      "https://www.jcrew.com/s7-img-facade/BJ353_GR5673_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    title: "Heritage 14 oz. fleece hoodie",

    price: "$128.00-$138.00",

    productID: "Item BJ353",
    hoverUrl:"https://www.jcrew.com/s7-img-facade/BJ353_GR5673_d4?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540"
  },
  {
    imageUrl:
      "https://www.jcrew.com/s7-img-facade/BJ351_PP3479?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    title: "Pacific fleece hoodie",

    price: "$89.50",

    productID: "Item BJ351",
    hoverUrl:"https://www.jcrew.com/s7-img-facade/BJ353_YL5376_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540"
  },
  {
    imageUrl:
      "https://www.jcrew.com/s7-img-facade/BJ350_PP3479?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    title: "Pacific fleece sweatshort",

    price: "$59.50",

    productID: "Item BJ350",
    hoverUrl:"https://www.jcrew.com/s7-img-facade/BJ350_PP3482?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540"
  },
  {
    imageUrl:
      "https://www.jcrew.com/s7-img-facade/BJ211_PP3479_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    title: "Pacific fleece kangaroo-pocket sweatshirt",

    price: "$69.50",

    productID: "Item BJ211",
    hoverUrl:"https://www.jcrew.com/s7-img-facade/BJ352_BK0001_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540"
  },
  {
    imageUrl:
      "https://www.jcrew.com/s7-img-facade/BJ349_PP3479_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    title: "Pacific fleece sweatpant",

    price: "$79.50",

    productID: "Item BJ349",
    hoverUrl:"https://www.jcrew.com/s7-img-facade/BJ349_PP3479_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540"
  },
];


let mens_data = JSON.parse(localStorage.getItem("stored_prod"))||[];
function appenddata(data) {
  let m5_div = document.querySelector("#m5");
  m5_div.innerHTML=null;
  data.forEach((elem) => {

    let div=document.createElement("div");
    div.setAttribute("class", "prod");
    
    let image = document.createElement("img");
    image.src = elem.imageUrl;

    let title = document.createElement("h3");
    title.innerText = elem.title;


    let price = document.createElement("h3");
    price.innerText = elem.price;

    let productID = document.createElement("h3");
    productID.innerText = elem.productID;



    div.addEventListener("mouseover", mouseOn);
    function mouseOn() {
      div.style.cursor = "pointer";
      image.setAttribute("src", elem.hoverUrl);
    }
    div.addEventListener("mouseout", mouseoff);
    function mouseoff() {
      image.setAttribute("src", elem.imageUrl);
    }

    image.addEventListener("click", redirect);
    title.addEventListener("click", redirect);

    function redirect() {
      localStorage.setItem("desciption", JSON.stringify(elem));
      window.location.href = "mens.html";
    }
    

    div.append(image, title, price, productID);
    

    div.onclick=()=>{
      saveProd(elem);
    };
    m5_div.append(div);
  });
};
appenddata(mensdata);
let saveProd=(data)=>{
  mens_data.push(data);
  localStorage.setItem("stored_prod",JSON.stringify(mens_data));
  window.location.href="des_page.html"
};





//FILTER
document.getElementById("creature").addEventListener("change", () => {
  let creature = document.getElementById("creature").value;
  if (creature === "Filters: Price <= 90") {
    let filter_1 = mensdata.filter((el) => {
      return el.price <= 90;
    });
    appenddata(filter_1);
  }
  if (creature === "Filters: Price < 100") {
    let filter_2 = mensdata.filter((el) => {
      return el.price < 100;
    });
    appenddata(filter_2);
  }
});

//SORT
document.getElementById("featured").addEventListener("change", () => {
  let featured = document.getElementById("featured").value;
  if (featured === "LH") {
    let sortLH = mensdata.sort((a, b) => {
      return a.price - b.price;
    });
    appenddata(sortLH);
  }
  if (featured === "HL") {
    let sortHL = mensdata.sort((a, b) => {
      return b.price - a.price;
    });
    appenddata(sortHL);
  }
});








// // let sortIt=document.getElementById("featured").value;
// document.getElementById("featured").addEventListener("change",sorted);

// function sorted(getvalue,mensdata){
//     if (getvalue == "LH") {
//       sortbyLH(mensdata);
//     } else if (getvalue == "HL") {
//       sortbyHL(mensdata);
//     }
//   }

//   function sortbyLH(mensdata) {
//   let sort = mensdata.sort(function (a, b) {
//     return a.price - b.price;
//   });
//   appenddata(sort);
//   console.log(sort);
// }
// function sortbyHL(mensdata) {
//   let sort = mensdata.sort(function (a, b) {
//     return b.price - a.price;
//   });
//   appenddata(sort);
//   console.log(sort);
// }
    // let btn=document.createElement("button")
    // btn.innerText="Add To Cart";
    // btn.style.color="grey"
    // btn.style.backgroundColor="black";

    // btn.addEventListener('click',function(){
    //     console.log("ankit")
    //     if(check_cart()){
    //         alert("Already Added To Cart")
    //     }else{
    //         cart.push(elem);
    //         localStorage.setItem("cartdata",JSON.stringify(cart));
    //         window.location.href="cart.html";
    //     };
    // });
    // function check_cart(){
    //     for(let i=0;i<cart.length;i++){
    //         if(cart[i].productID==elem.productID){
    //             return true;
    //         }
    //     }
    //     return false;
    // }