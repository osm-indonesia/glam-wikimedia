//email send
function sendMail() {
	var params = (
		document.getElementById("first-name").value,
		document.getElementById("last-name").value,
		document.getElementById("email").value,
		document.getElementById("message").value,
	);

const serviceID = "service_efzvvyi"
const templateID = "template_qf1hvap"

emailjs.send(serviceID,templateID,params).then
	res => {
		document.getElementById("first-name").value = "";
		document.getElementById("last-name").value = "";
		document.getElementById("email").value = "";
		document.getElementById("message").value = "";
		console.log(res);
		alert("your message sent succesfully");
}
}