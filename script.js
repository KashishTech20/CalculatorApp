 const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "AC") {
      display.value = "";
    } else if (value === "=") {
      try {
        display.value = Function("return " + display.value)();
      } catch (error) {
        display.value = "Error";
      }
    } else {
      display.value += value;
    }
  });
});
 
