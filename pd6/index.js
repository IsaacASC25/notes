// select elements
const btn = document.querySelector(".btn");
// use events
function getRGB(event) {
  /* console.log(event);
console.log(event.target); */
const box = document.querySelector(".box");
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  document.querySelector("h1").textContent = `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener("click", getRGB);
