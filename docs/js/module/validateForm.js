/*export function validateForm(formSelector, submitButtonSelector) {
  const form = document.querySelector(formSelector);
  if (!form) return;

  const submitButton = form.querySelector(submitButtonSelector);
  const requiredFields = form.querySelectorAll("input[placeholder*='*']");
  const checkbox = form.querySelector("input[name='personal_data']");

  function formatName(value) {
    return value
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  function formatPhone(value) {
    return value.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "+$1($2) $3-$4-$5");
  }

  function validateField(field) {
    const name = field.getAttribute("name");
    let isValid = false;
    let value = field.value.trim();

    if (name === "fio") {
      isValid = /^[A-Za-zА-Яа-яЁё]{2,}(\s[A-Za-zА-Яа-яЁё]{2,})*$/.test(value);
      field.value = formatName(value);
    } else if (name === "company") {
      isValid = value.length >= 2;
    } else if (name === "business-mail") {
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    } else if (name === "phone") {
      isValid = /^\d{11}$/.test(value);
      if (isValid) field.value = formatPhone(value);
    } else if (name === "product") {
      isValid = value.length > 0;
    }

    field.style.borderColor = isValid ? "" : "red";
    return isValid;
  }

  function checkFormValidity() {
    let allValid = true;
    requiredFields.forEach(field => {
      if (!validateField(field)) {
        allValid = false;
      }
    });

    if (!checkbox.checked) {
      allValid = false;
    }

    submitButton.classList.toggle("disabled", !allValid);
  }

  requiredFields.forEach(field => {
    field.addEventListener("blur", () => validateField(field));
    field.addEventListener("input", checkFormValidity);
  });

  checkbox.addEventListener("change", checkFormValidity);

  form.addEventListener("submit", event => {
    if (submitButton.classList.contains("disabled")) {
      event.preventDefault();
    }
  });
}*/

export function validateForm(formSelector) {
  const form = document.querySelector(formSelector);
  if (!form) return;

  const submitButton = form.querySelector(".form-submit");
  const requiredInputs = form.querySelectorAll("input[placeholder*='*']");
  const checkbox = form.querySelector("input[name='personal_data']");

  function validateField(input) {
    let isValid = true;
    let value = input.value.trim();
    const name = input.getAttribute("name");

    if (name === "fio") {
      isValid = /^[A-Za-zА-Яа-яЁё\s]+$/.test(value) && value.length >= 2;
      if (isValid) {
        input.value = value
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(" ");
      }
    } else if (name === "company") {
      isValid = value.length >= 2;
    } else if (name === "business-mail") {
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    } else if (name === "phone") {
      value = value.replace(/\D/g, "");
      isValid = value.length === 11;
      if (isValid) {
        input.value = `+7(${value.slice(1, 4)}) ${value.slice(4, 7)}-${value.slice(7, 9)}-${value.slice(9)}`;
      }
    } else if (name === "product") {
      isValid = value.length > 0;
    }

    input.style.borderColor = isValid ? "" : "red";
    return isValid;
  }

  requiredInputs.forEach(input => {
    input.addEventListener("input", () => {
      validateField(input);
    });

    input.addEventListener("blur", () => {
      validateField(input);
    });
  });

  function checkFormValidity() {
    const allValid = [...requiredInputs].every(input => validateField(input)) && checkbox.checked;
    submitButton.classList.toggle("disabled", !allValid);
  }

  form.addEventListener("input", checkFormValidity);
  checkbox.addEventListener("change", checkFormValidity);
}
