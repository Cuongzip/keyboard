const handleQuantity = (quantityElement) => {
  const inputQuantityElement = quantityElement.querySelector("input");
  const buttonIncrease = quantityElement.querySelector(".increase");
  const buttonReduce = quantityElement.querySelector(".reduce");
  inputQuantityElement.oninput = (e) => {
    let value = e.target.value;
    if (!Number(value[value.length - 1])) {
      e.target.value = value.slice(0, value.length - 1);
    } else if (!Number(value[0])) {
      e.target.value = value.slice(1, value.length);
    }
  };
  inputQuantityElement.onblur = (e) => {
    if (!e.target.value) e.target.value = "1";
  };
  buttonIncrease.onclick = () => {
    const value = Number(inputQuantityElement.value) + 1;
    if (value <= 999) inputQuantityElement.value = value;
  };
  buttonReduce.onclick = () => {
    const value = Number(inputQuantityElement.value) - 1;
    if (value > 0) inputQuantityElement.value = value;
  };
};

export default handleQuantity;
