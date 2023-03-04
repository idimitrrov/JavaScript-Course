const validateName = () => {
  const name = document.getElementById("name");
  const re = /^[A-Za-z\s]*$/;

  if (!re.test(name.value)) {
    validateField("name", re, "Name cannot contain special characters!");
  } else {
    validateField(
      "name",
      /^[a-zA-Z\s]{1,20}$/,
      "Name cannot exceed 20 characters."
    );
  }
  console.log(!re.test(name.value));
};

const validateField = (type, re, error) => {
  const element = document.getElementById(type);
  let errorTextContainer = document.getElementById(`invalid-${type}`);
  if (element.value === "") {
    element.classList.remove("is-invalid");
    errorTextContainer.innerHTML = "";
  } else if (!re.test(element.value)) {
    element.classList.add("is-invalid");
    errorTextContainer.innerHTML = error;
  } else {
    element.classList.remove("is-invalid");
  }
};

// Form Blur Event Listeners
document.getElementById("name").addEventListener("blur", validateName);
document
  .getElementById("zipcode")
  .addEventListener("blur", () =>
    validateField("zipcode", /^[0-9]{5}(-[0-9]{4})?$/, "Enter a valid zipcode")
  );
document
  .getElementById("email")
  .addEventListener("blur", () =>
    validateField(
      "email",
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
      "Enter a valid email"
    )
  );
document
  .getElementById("phone")
  .addEventListener("blur", () =>
    validateField(
      "phone",
      /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/,
      "Enter a valid phone"
    )
  );
