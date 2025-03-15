const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const button = document.getElementById("button");
const h1 = document.getElementById("h1");

button.addEventListener("click", () => {
  h1.innerText = +input1.value + +input2.value;
});
