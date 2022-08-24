let productDatah=[{   img:"https://www.jcrew.com/s7-img-facade/BN383_PT3603?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
title:"Limited-edition Recess Pickleball X J.Crew paddle",
price:"9,879",
},
{   img:"https://www.jcrew.com/s7-img-facade/BN383_PT3608?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
title:"Limited-edition Recess Pickleball X J.Crew paddle",
price:"9,879",},
{  img:"https://www.jcrew.com/s7-img-facade/BN383_PT3609?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
title:"Limited-edition Recess Pickleball X J.Crew paddle",
price:"9,879"},
{ img:"https://www.jcrew.com/s7-img-facade/BK160_PT0877?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
title:"Limited-edition twin XL sheet set in Liberty® Garden of Life print",
price:"26,433",
},
{  img:"https://www.jcrew.com/s7-img-facade/BK162_PT0876?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
title:"Limited-edition twin XL sheet set in Liberty® Club Nouveau print",
price:"26,433",
},
{  img:"https://www.jcrew.com/s7-img-facade/BK163_PT0878?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
title:"Limited-edition twin XL sheet set in Liberty® Meadow Song print",
price:"26,433",
},
{ img:"https://www.jcrew.com/s7-img-facade/BK171_PT0878?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
title:"Limited-edition queen sheet set in Liberty® Meadow Song print",
price:"33,108",
},
{  img:"https://www.jcrew.com/s7-img-facade/BK174_PT0876?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
title:"Limited-edition king sheet set in Liberty® Club Nouveau print",
price:"34,443",
},
{  img:"https://www.jcrew.com/s7-img-facade/BK180_PT0877?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
title:" Limited-edition twin XL duvet set in Liberty® Garden of Life print",
price:"30,438",
},
{  img:"https://www.jcrew.com/s7-img-facade/BK165_PT0875?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
title:"Limited-edition full sheet set in Liberty® Giorgia Duke print",
price:"31,773",
},
{  img:"https://www.jcrew.com/s7-img-facade/BK166_PT0876?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
title:"Limited-edition full sheet set in Liberty® Club Nouveau print",
price:"31,773",
},
{  img:"https://www.jcrew.com/s7-img-facade/BK164_PT0877?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
title:" Limited-edition full sheet set in Liberty® Garden of Life print",
price:"31,773",
},]


productDatah.forEach(displayh);
function displayh(elem){
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src",elem.img);
    let name = document.createElement("h5");
    name.innerText = elem.title
    let price = document.createElement("h4");

    
    price.innerText = "INR"+" "+elem.price;
    document.querySelector("#containerh").append(div)
    div.append(img,name,price);
    
}