function Submit() {
  let name = document.getElementById("name");
  console.log(name.value);
  let email = document.getElementById("email");
  console.log(email.value);
  let message = document.getElementById("message");
  console.log(message.value);
  if (name.value == "" || email.value == "" || message.value == "") {
    return SwalAlerts(
      "Error!",
      "You have to fill all the required field!",
      "error"
    );
  }
  SwalAlerts(
    "Successfull!",
    "Your form is successfully submitted!",
    "Successfully"
  );
}
