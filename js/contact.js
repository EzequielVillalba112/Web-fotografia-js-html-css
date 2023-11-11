function sendMessage(){
    (function(){
        emailjs.init("Os-XuWVdt39Zoik9k");
    })();

    var serviceId = "service_wtuis4l";
    var templateId = "template_q45kdsg";

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }

    emailjs.send(serviceId, templateId, params).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });

}