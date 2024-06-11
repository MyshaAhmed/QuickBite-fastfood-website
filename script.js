

function handleContact(event)
{
     event.preventDefault(); 
     const email=event.target.email.value;
     console.log(email);

     const successContainer= document.getElementById("success_container") ;
     const emailParagraph=document.createElement("p");
     emailParagraph.innerText="Successful Submission!";
     console.log(emailParagraph);
     successContainer.appendChild(emailParagraph);
    

}


const araryImage= [
    {
        url : "./images/morefoodproducts/Chicken Pot Pie.png"  // object
    },
    {
        url : "./images/morefoodproducts/Enchilade.png"
    },
    {
        url : "./images/morefoodproducts/Green Beans.png"
    },
    {
        url : "./images/morefoodproducts/Green Salad.png"
    },
    {
        url : "./images/morefoodproducts/Gyro Sandwhic.png"
    },
    {
        url : "./images/morefoodproducts/Pizza (1).png"
    },
];


function handleShowMoreProduct(){
    const productContainer=document.getElementById("popular-poroducts");

    for (const item of araryImage) {
        const productDivImage=document.createElement("div");  // creating a new div to contain images from arrayImage
        productDivImage.classList.add("popular-food-items");
        productDivImage.innerHTML=`
        <img src="${item.url}" alt=""> `;// backtick
         
        
          // console.log(productDivImage)
          productContainer.appendChild(productDivImage); //kono kichu k UI te dekhate amader k append korte hobe
    }

}