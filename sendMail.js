
const sendMail = () => {


  var params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  }

  const serviceID = "service_41kec3f"
  const templateID = "template_o5xoxtk"

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("name").value = ""
      document.getElementById("email").value = ""
      document.getElementById("message").value = ""

      console.log('email sent')
      alert("your message sent successfully")
    })
    .catch((error) => {
      alert("your message sent failed")
      console.log(error)
    })
}




const sentEmailBtn = document.getElementById("send-email-button")
console.log("sentEmailBtn")
console.log(sentEmailBtn)

sentEmailBtn.addEventListener("click", () => {
  sendMail();
})

