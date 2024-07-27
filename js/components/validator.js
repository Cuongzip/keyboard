const validator = ({ selectorForm, selectorMessage, options }) => {
  const formElement = document.querySelector(selectorForm);
  //   const submitBtnElement = formElement.querySelector("button[type='submit']");
  const validate = (inputElement, rules) => {
    let messageError = "";
    for (let rule of rules) {
      if (!rule.test(inputElement.value)) {
        messageError = rule.message;
        break;
      }
    }
    return messageError;
  };
  for (let selectorInput in options) {
    const inputElement = formElement.querySelector(selectorInput);
    switch (inputElement.type) {
      case "text":
      case "password":
        const messageElement =
          inputElement.parentElement.querySelector(selectorMessage);

        inputElement.onblur = () => {
          const rules = options[selectorInput];
          messageElement.innerText = validate(inputElement, rules);
        };
        inputElement.oninput = () => {
          messageElement.innerText = "";
        };
      case "checkbox":
      // inputElement.oninput = () => {
      //   console.log("a");
      // };
    }
  }
  formElement.onsubmit = (e) => {
    e.preventDefault();
    let isSuccess = true;
    for (let selectorInput in options) {
      const inputElement = formElement.querySelector(selectorInput);
      const messageElement =
        inputElement.parentElement.querySelector(selectorMessage);

      if (inputElement.type === "checkbox") {
        if (!inputElement.checked) {
          alert("Vui lòng tích vào để chấp nhập các chính sách của chúng tôi");
          isSuccess = false;
        }
        continue;
      }

      const rules = options[selectorInput];

      const messageError = validate(inputElement, rules);
      messageElement.innerText = messageError;
      if (messageError) isSuccess = false;
    }
    if (isSuccess) {
      const data = {};
      const inputElements = formElement.querySelectorAll("[name]");
      for (let inputElement of inputElements) {
        data[inputElement.name] = inputElement.value;
      }
      console.log(data);
    }
  };
};

export default validator;
