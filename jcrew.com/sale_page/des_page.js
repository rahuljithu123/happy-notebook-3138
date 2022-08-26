import head from "../components/exp.js";
document.getElementById("slide").innerHTML = head();

let saveProd = JSON.parse(localStorage.getItem("stored_prod")) || [];

let arr_of_product = [];
let append_prod = (data) => {
  let prod_cont = document.getElementById("prod_cont");
  prod_cont.innerHTML = null;
  data.forEach((el) => {
    let img_div = document.createElement("div");
    img_div.setAttribute("class", "img_div");
    let img = document.createElement("img");
    img.src = el.img;
    img_div.append(img);

    let des_div = document.createElement("div");
    des_div.setAttribute("class", "des_div");
    let title = document.createElement("p");
    title.innerText = el.title;

    let price = document.createElement("h4");
    price.innerText = `INR ${el.price}`;
    let ssImg = document.createElement("img");
    ssImg.setAttribute("id", "ssImg");
    ssImg.src = "mushtaq.png";

    des_div.append(title, price, ssImg);
    prod_cont.append(img_div, des_div);

    let button = document.createElement("button");
    button.setAttribute("id", "addToBagBtn");
    button.innerText = "ADD TO BAG";

    button.addEventListener("click", () => {
      window.location.href = "../cart_page/cart.html";
      //localStorage.setItem('stored_prod', JSON.stringify(arr_of_product.push(el)));
      alert("Added To Bag");
    });
    let addToBagCont = document.getElementById("addToBagCont");
    addToBagCont.append(button);
  });
};
append_prod(saveProd);
