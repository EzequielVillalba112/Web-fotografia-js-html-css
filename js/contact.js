const nameContact = document.getElementById("name");
const emailContact = document.getElementById("email");
const messageContact = document.getElementById("message");
const buttonSendMessage = document.querySelector(".btn-send-email");
const alertContact = document.querySelector(".alert");


const validEmptyField = () =>{
    if(nameContact.value == "" || emailContact.value == "" || messageContact.value == ""){

        if(nameContact.value == ""){
            nameContact.classList.add("error");
        }
        if(emailContact.value == ""){
            emailContact.classList.add("error");
        }
        if(messageContact.value == ""){
            messageContact.classList.add("error");
        }

        alertContact.innerHTML = `Empty fields!!!`;

        setTimeout(()=>{
           nameContact.classList.remove("error");
           emailContact.classList.remove("error");
           messageContact.classList.remove("error");
           alertContact.innerHTML = " ";
        },2000);
    
        return false;
    }else if(validFielContent() == 1){
        return false;
    }else{
        return true;
    }
}


const validFielContent = () =>{
    const nameValid = /^[a-zA-Z\s]+$/;
    const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    let bande = 0;

    if(!nameValid.test(nameContact.value)){
        const spanName = document.querySelector(".span-name");
        nameContact.classList.add("error");
        spanName.innerHTML = `Invalid name!!!`;
       setTimeout(()=>{
            spanName.innerHTML = "";
            nameContact.classList.remove("error");
       },3000);
       bande = 1;
    }

    if(!emailValid.test(emailContact.value)){
        const spanEmail = document.querySelector(".span-email");

        emailContact.classList.add("error");
        spanEmail.innerHTML = `Invalid email!!!`;

       setTimeout(()=>{
            spanEmail.innerHTML = "";
            emailContact.classList.remove("error");
       },3000);
       bande = 1;
    }

    return bande;
}

const clearInput = () => {
    nameContact.value = "";
    emailContact.value = "";
    messageContact.value = "";
}

buttonSendMessage.addEventListener("click", ()=>{
    if(validEmptyField){
        sendMessage();
        clearInput()
        alert("send message");
    }
})




function sendMessage(){
    (function(){
        emailjs.init("Os-XuWVdt39Zoik9k");
    })();

    var serviceId = "service_wtuis4l";
    var templateId = "template_q45kdsg";

    var params = {
        name: nameContact.value,
        email: emailContact.value,
        message: messageContact.value
    }

    emailjs.send(serviceId, templateId, params).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });

}