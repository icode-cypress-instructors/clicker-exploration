const moneyLabel = document.querySelector(".money-label");
const planetImg = document.getElementById('planet');

planetclick(1);
function planetclick(multiplier){
    let moneyValue = parseInt(moneyLabel.innerHTML.substring(1));
    planetImg.addEventListener("click",()=>{
        moneyValue+=1*multiplier;
        console.log(moneyValue);
        moneyLabel.innerHTML = "$" +  moneyValue;
    });
    
    
}    