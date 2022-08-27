

async function getdata(url){

   


    try{
        let res=await fetch(url);

        let data=await res.json();
    
        console.log("data:",data);
    }
    catch(error){
       console.log("error:",error)
    }
}

