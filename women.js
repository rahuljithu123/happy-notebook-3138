
    let imgarr=["https://www.jcrew.com/brand_creative/2022/202209-Sep/w_remix/v3/2022sept_0816_w_workremix_img7.jpg","https://www.jcrew.com/brand_creative/2022/202209-Sep/w_remix/v3/2022sept_0816_w_workremix_img5.jpg","https://www.jcrew.com/brand_creative/2022/202209-Sep/w_remix/v3/2022sept_0816_w_workremix_img12.jpg","https://www.jcrew.com/brand_creative/2022/202209-Sep/w_remix/v3/2022sept_0816_w_workremix_img15.jpg"]
  
let counter=0;
let id;
function start() {
    let container=document.getElementById('sildeimages');

    container.innerHTML=null;


    let img=document.createElement("img");
    id=setInterval(function(){
        if(counter==imgarr.length){
            counter=0;
        }
img.src=imgarr[counter];
container.append(img);

counter++; 
    },2000)
}

document.querySelector("#im2").addEventListener("click",redirectw);
function redirectw(){
    window.location.href="wproducts.html";
}
