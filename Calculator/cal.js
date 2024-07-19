document.addEventListener("DOMContentLoaded", (event) => {
  const inputBox = document.getElementById("inputBox");
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.textContent;
      if (value === "=") {
        try {
          inputBox.value = eval(inputBox.value);
        } catch (e) {
          inputBox.value = "Error";
        }
      } else if (value === "AC") {
        inputBox.value = "";
      } else if (value === "Del") {
        inputBox.value = inputBox.value.slice(0, -1);
      } else {
        inputBox.value += value;
      }
    });
  });
});
