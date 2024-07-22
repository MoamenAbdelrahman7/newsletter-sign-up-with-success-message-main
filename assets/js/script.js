// Email Validation
let email_input=document.querySelector("input");
function confirm_email(){
    let isValid=false;
    if (email_input.value.includes("@") && email_input.value.endsWith(".com") || email_input.value === ""){
        email_input.classList.remove("input-error");
        email_error_msg.style.display="none";
        isValid=true;
    }
    else{
        email_input.classList.add("input-error");
        email_error_msg.style.display="block";
        isValid=false;
    }
    return isValid
}
let email_error_msg=document.getElementById("email-error-msg");
email_input.addEventListener("blur",()=>{
    confirm_email();
});

// hide attribution on mobile when success message appear
const attribution =document.querySelector(".attribution");

// subscribe button 
const container= document.querySelector(".container");
const subscribeBt =document.getElementById("subscribeBt");
const success_email=document.getElementById("success-email");
const success_message=document.querySelector(".success-message");
subscribeBt.addEventListener("click",()=>{
    if (confirm_email() && email_input.value !== ""){
        success_email.innerHTML=email_input.value;
        success_message.style.display="flex";
        container.style.display="none";
        attribution.style.display="none";
    }
});

//  dismiss message button
const dismissMessageBt=document.getElementById("dismissMessageBt");
dismissMessageBt.addEventListener("click",()=>{
    success_message.style.display="none";
    container.style.display="flex";
    email_input.value="";
    attribution.style.display="block";

});



