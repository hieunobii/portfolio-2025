function emailSend(){

	var userName = document.getElementById('form_name').value;
	var phone = document.getElementById('form_phone').value;
	var email = document.getElementById('form_email').value;
    var message = document.getElementById('form_message').value;

	var messageBody = "Name " + userName +
	"<br/> Phone: " + phone +
	"<br/> Email: " + email +
    "<br/> Message: " + message;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "hieunobii2809@gmail.com",
    Password : "6D63B74E30358CEBF030003C4870BBAD4C5B",
    To : 'hieunobii2809@gmail.com',
    From : "hieunobii2809@gmail.com",
    Subject : "Data from my portfolio website",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "Thank! I will contact you as soon as possible!", "success");
  	}
  	else{
  		swal("Error", "Some thing wrong! Please try other way to contact.", "error");
  	}
  }
);
}