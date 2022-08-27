import head from "../components_1/exp.js";
document.getElementById("slide").innerHTML = head();

let stored_prod = JSON.parse(localStorage.getItem("stored_prod")) || [];
let count = +document.getElementById("bag_count").innerText;

let append_prod = (data) => {
  let bag_cont = document.getElementById("bag_prod");
  bag_cont.innerHTML = null;

  data.forEach((el, index) => {
    let img_div = document.createElement("div");
    img_div.setAttribute('class', 'img_div');
    let img = document.createElement("img");
    img.src = el.img;
    img_div.append(img);

    let des_div = document.createElement("div");
    let title = document.createElement("p");
    title.innerText = el.title;

    let button = document.createElement("button");
    button.innerText = "Remove";
    button.setAttribute('id', 'remove');
    button.addEventListener("click", () => {
      removeProd(index);
    });
    let saveLater = document.createElement("button");
    saveLater.innerText = "Save for Later";
    saveLater.setAttribute('id', 'saveLater');

    des_div.append(title, button, saveLater);

    let price_div = document.createElement("div");
    let price = document.createElement("h4");
    price.innerText = el.price;

    let subtotal = document.getElementById('subtotal');
    subtotal.innerText = `Item Subtotal- INR:-${el.price}`;
    let estimated = document.getElementById('estimated');
    estimated.innerText = `Estimated Total- INR:-${el.price}`;

    price_div.append(price);

    bag_cont.append(img_div, des_div, price_div);
    count++;
    document.getElementById("bag_count").innerText = `${count} Item`;
  });
};
let removeProd = (id) => {
  stored_prod.splice(id, 1);
  localStorage.setItem("stored_prod", JSON.stringify(stored_prod));
  window.location.reload();
};

append_prod(stored_prod);
