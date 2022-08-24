import head from "../components/exp.js";
document.getElementById('slide').innerHTML = head();

let saveProd = JSON.parse(localStorage.getItem('stored_prod')) || [];
let arr_of_product = [];
let append_prod = (data) => {
    let prod_cont = document.getElementById('prod_cont');
    prod_cont.innerHTML = null;
    data.forEach((el) => {
        let img_div = document.createElement('div');
            let img = document.createElement('img');
            img.src = el.img;
            img_div.append(img);
            
            let des_div = document.createElement('div');
            let title = document.createElement('p');
            title.innerText = el.title;
        
            let price = document.createElement('h4');
            price.innerText = el.price;
        
            let button = document.createElement('button');
            button.innerText = 'ADD TO BAG';
        
            button.addEventListener('click', () => {
                window.location.href = '../cart_page/cart.html';
                //localStorage.setItem('stored_prod', JSON.stringify(arr_of_product.push(el)));
            })
        
            des_div.append(title, price,button);
            prod_cont.append(img_div, des_div);
    })
}
append_prod(saveProd);
