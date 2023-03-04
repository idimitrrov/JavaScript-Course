const validateName = () => {
  const name = document.getElementById("name");
  const reName = /^[a-zA-Z\s]{1,20}$/;
  const reSymbols = /[\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  if (name.value === "") {
    name.classList.remove("is-invalid");
    let invalidName = () => {
      let newValue = document.getElementById("invalid-name");
      newValue.innerHTML = "";
    };
    invalidName();
    return;
  } else if (reSymbols.test(name.value)) {
    name.classList.add("is-invalid");
    let invalidName = () => {
      let newValue = document.getElementById("invalid-name");
      newValue.innerHTML = "Name cannot contain special characters!";
    };
    invalidName();
    throw new Error("Name cannot contain special characters or numbers!");
  } else if (!reName.test(name.value)) {
    name.classList.add("is-invalid");
    let invalidName = () => {
      let newValue = document.getElementById("invalid-name");
      newValue.innerHTML = "Please enter a name of maximum 20 characters!";
    };
    invalidName();
    throw new Error("Please enter a name of maximum 20 characters!");
  } else {
    name.classList.remove("is-invalid");
  }
};
const validateZip = () => {
  const zip = document.getElementById("zipcode");
  const re = /^[0-9]{5}(-[0-9]{4})?$/;

  if (zip.value === "") {
    zip.classList.remove("is-invalid");
    let invalidName = () => {
      let newValue = document.getElementById("invalid-zip");
      newValue.innerHTML = "";
    };
    invalidName();
    return;
  } else if (!re.test(zip.value)) {
    zip.classList.add("is-invalid");
    let invalidZip = () => {
      let newValue = document.getElementById("invalid-zip");
      newValue.innerHTML = "Zipcode is not valid. Enter a new one.";
    };
    invalidZip();
    throw new Error("Zipcode is not valid. Enter a new one.");
  } else {
    zip.classList.remove("is-invalid");
  }
};
const validateEmail = () => {
  const email = document.getElementById("email");
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (email.value === "") {
    email.classList.remove("is-invalid");
    let invalidEmail = () => {
      let newValue = document.getElementById("invalid-email");
      newValue.innerHTML = "";
    };
    invalidEmail();
    return;
  } else if (!re.test(email.value)) {
    email.classList.add("is-invalid");
    let invalidEmail = () => {
      let newValue = document.getElementById("invalid-email");
      newValue.innerHTML = "Enter a valid email";
    };
    invalidEmail();
    throw new Error("Email is not valid.");
  } else {
    email.classList.remove("is-invalid");
  }
};
const validatePhone = () => {
  const phone = document.getElementById("phone");
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  if (phone.value === "") {
    phone.classList.remove("is-invalid");
    let invalidPhone = () => {
      let newValue = document.getElementById("invalid-phone");
      newValue.innerHTML = "";
    };
    invalidPhone();
    return;
  } else if (!re.test(phone.value)) {
    phone.classList.add("is-invalid");
    let invalidPhone = () => {
      let newValue = document.getElementById("invalid-phone");
      newValue.innerHTML = "Enter a valid phone";
    };
    invalidPhone();
  } else {
    phone.classList.remove("is-invalid");
  }
};

// Form Blur Event Listeners
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zipcode").addEventListener("blur", validateZip);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);
