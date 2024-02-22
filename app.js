let cel = document.querySelector("#cel");
let fah = document.querySelector("#fah");

cel.addEventListener("input", () => {
  let c = parseFloat(cel.value); // Convert input value to a number
  let formula = (c * 9) / 5 + 32;
  fah.value = formula.toFixed(2); // Convert result to fixed decimal places
});

fah.addEventListener("input", function () {
  let f = parseFloat(fah.value); // Convert input value to a number
  let celsius = ((f - 32) * 5) / 9;
  cel.value = celsius.toFixed(2); // Convert result to fixed decimal places
});
