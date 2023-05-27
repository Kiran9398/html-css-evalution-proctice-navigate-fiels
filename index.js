let counterEl = document.getElementById("counter");
let incEl = document.getElementById("inc");
let resEl = document.getElementById("res");
let desEl = document.getElementById("des");

incEl.onclick = function () {
  let counterValue = parseInt(counterEl.innerHTML);
  console.log(counterValue)
  counterEl.value = parseInt(counterValue + 1);
};
