document.querySelector("#checkout").addEventListener("click",checkOut);
 
 function checkOut(){
    window.location.href="checkout.html"
 }

let indexArr=JSON.parse(localStorage.getItem("loginData")) || [];

console.log(indexArr)

if(localStorage.getItem("flag_sta")){
    document.querySelector("#emptylog").innerHTML="Hi"+" "+ indexArr.name;
   

    document.querySelector("#emptyjoin").innerHTML="";
}
    let aCartArr=JSON.parse(localStorage.getItem("addTCart")) || [];

    

    


    displayProduct(aCartArr);

    if(aCartArr.length==0){
        let div1=document.createElement("div");
        div1.style.height="200px";
        let para1=document.createElement("h3");
        
        para1.innerText = "Why Don't You Go On Product Page And Add Something In Cart"
        
        let butto=document.createElement("button")
        butto.setAttribute("id","productbutt")
        butto.addEventListener("click",emptyCart);
        butto.innerText = "GO TO PRODUCT PAGE"
        div1.append(para1,butto);
        document.querySelector("#cartpage").append(div1)
        function emptyCart(){
            window.location.href="mens.html"
        }
    }

  

    function displayProduct(aCartArr){
        document.querySelector("#cartpage").innerHTML="";

        let sum=0;
        aCartArr.forEach(function(elem,ind){
            let pro=document.createElement("div");
            pro.setAttribute("id","cart1");

            let imgdiv=document.createElement("div");
            imgdiv.setAttribute("id","immg")
            let proimg=document.createElement("img");
            proimg.setAttribute("src",elem.image_url);
            imgdiv.append(proimg)
            let proName=document.createElement("p");
            proName.innerText=elem.name;

            // let quantity=document.createElement("div");
            // quantity.setAttribute("id","qty");
            // let qttl=document.createElement("p");
            // qttl.innerText="Qty";

            // let sel=document.createElement("select");
          
            // for(var i=1;i<=10;i++){
            //     let opt=document.createElement("option");
            //     opt.setAttribute("value",i)
            //     opt.innerText=i;
            //     sel.append(opt)
            // }

            // quantity.append(qttl,sel);

            

            let proPrice=document.createElement("h4");
            proPrice.innerText="$"+elem.cost

            
           
                sum=sum+elem.cost
                let total_price= document.querySelector("#total_price");
               total_price.innerText="Total = $"+sum;
               let tp=localStorage.setItem("total_price_cart",JSON.stringify(total_price.innerText))

            
           

            let btn=document.createElement("button");
            btn.setAttribute("id","remove");
            btn.innerText="Remove";
            btn.addEventListener("click",function(){
                deletePro(ind);
                window.location.reload();
            })




            pro.append(imgdiv,proName,proPrice,btn);

            document.querySelector("#cartpage").append(pro);

           document.querySelector("#cartlogo>p").innerText=aCartArr.length;
            

        })
        
    }

    function deletePro(ind){
        aCartArr.splice(ind,1);
        console.log(aCartArr)
        localStorage.setItem("addTCart",JSON.stringify(aCartArr));
        if(aCartArr.length==0){
           
            localStorage.setItem("total_price_cart",JSON.stringify(0))
            let total_price= document.querySelector("#total_price");
               total_price.innerText="Total = $"+0;
        }
        displayProduct(aCartArr);
        
    }