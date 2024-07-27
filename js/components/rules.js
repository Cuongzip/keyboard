const rules = {
  required(message) {
    return {
      message: message || "Vui lòng nhập trường này",
      test(value) {
        return !!value.trim();
      },
    };
  },
  isEmail(message) {
    return {
      message: message || "Vui nhập email chính xác",
      test(value) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
      },
    };
  },
  handleMinLength(message, minLength) {
    return {
      message: message || "Vui lòng nhập nhiều kí tự hơn",
      test(value) {
        return value.trim().length >= minLength;
      },
    };
  },
  isChecked(message) {
    return {
      message: message || "Vui lòng nhập nhiều kí tự hơn",
      test(value) {
        return value;
      },
    };
  },
};

export default rules;
