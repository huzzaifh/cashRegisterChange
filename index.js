var billAmount=document.querySelector("#bill-amount");
var cashGiven=document.querySelector("#cash-given");
var buttonClick=document.querySelector("#button-click");
var errorMessage=document.querySelector("#error-message");
var noOfNotes=document.querySelectorAll(".no-of-notes");
const arrayNotes = [2000,500,100,20,10,5,1];


buttonClick.addEventListener("click" , function validateBill() {
    showMessageNull();
    if (billAmount.value > 0 ) {
        if (parseInt(cashGiven.value) >= parseInt(billAmount.value)) {
            console.log("clicked")
            var amountReturned = cashGiven.value - billAmount.value;
            calculateChange(amountReturned);


        } else {
            showMessage("The cash should be greater than or equal to bill amount");
        }



    }else {
        showMessage("invalid bill amount");
    }

});

function calculateChange(amountReturned){
    for(let i=0;i<arrayNotes.length;i++){
    const changeAmount=Math.trunc(amountReturned/arrayNotes[i]);
    amountReturned %=arrayNotes[i];
    noOfNotes[i].innerText=changeAmount;
}}



function showMessage(msg){
    errorMessage.style.display ="block";
    errorMessage.innerText=msg;

}
function showMessageNull(){
errorMessage.style.display="none";
}