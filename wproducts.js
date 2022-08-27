let productDataw=[
    { img:"https://www.jcrew.com/s7-img-facade/BJ571_NA6157_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    title:"Ruffleneck merino wool sweater",
    price:8614},
    {  img:"https://www.jcrew.com/s7-img-facade/BJ987_BL7755_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    title:"Louisa lady jacket in maritime tweed",
    price:37127},
    {  img:"https://www.jcrew.com/s7-img-facade/BF013_NA7183_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    title:"Cecile relaxed sweater-blazer",
    price:22436
    },
    { img:"https://www.jcrew.com/s7-img-facade/BA400_GR7105_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    title:"Cashmere classic-fit crewneck sweater",
    price:17095
    },
    {  img:"https://www.jcrew.com/s7-img-facade/AS297_BL7755_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    title:"Vintage cotton crewneck long-sleeve T-shirt",
    price:3005
    },
    {  img:"https://www.jcrew.com/s7-img-facade/BJ930_WY9641_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    title:" Leighton blazer-jacket in double-faced wool",
    price:35791
    },
    { img:"https://www.jcrew.com/s7-img-facade/BA551_SU7517_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    title:"Cocoon sweater-blazer",
    price:23772
    },
    {  img:"https://www.jcrew.com/s7-img-facade/BK266_WZ2457_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    title:"Willa cropped flare pant in Italian city wool",
    price:26443
    },
    {  img:"https://www.jcrew.com/s7-img-facade/BK668_BL7505_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    title:" New quilted cocoon puffer coat",
    price:22436
    },]
    let arr_of_product1=[];
    displayw(productDataw);
    function displayw(productDataw){
        document.querySelector("#wproducts").innerHTML = "";
        productDataw.forEach(function (elem){
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src",elem.img);
        let name = document.createElement("h5");
        name.innerText = elem.title
        let price = document.createElement("h4");
    
        
        price.innerText = "INR"+" "+elem.price;
        div.append(img,name,price);
        div.onclick = () => {
          saveProd(elem);
        };
    
        document.querySelector("#wproducts").append(div)
        
        }) 
    }
    
    let saveProd = (data) => {
      arr_of_product1.push(data);
      localStorage.setItem("stored_prod", JSON.stringify(arr_of_product1));
      window.location.href = "./jcrew.com/sale_page/des_page.html";
    };
    
    
    document.getElementById("showFilters2").addEventListener("change", () => {
      let showFilters = document.getElementById("showFilters2").value;
      if (showFilters === "Filters: Price < 30000") {
        let filter_1 = productDataw.filter((el) => {
          return el.price < 30000;
        });
        displayw(filter_1);
      }
      if (showFilters === "Filters: Price > 30000") {
        let filter_2 = productDataw.filter((el) => {
          return el.price>30000;
        });
        displayw(filter_2);
      }
    });
    
    //SORT
    document.getElementById("featured2").addEventListener("change", () => {
      let featured = document.getElementById("featured2").value;
      if (featured === "LTH") {
        let sortLTH = productDataw.sort((a, b) => {
          return a.price - b.price;
        });
        displayw(sortLTH);
      }
      if (featured === "HTL") {
        let sortHTL = productDataw.sort((a, b) => {
          return b.price - a.price;
        });
        displayw(sortHTL);
      }
    });
    