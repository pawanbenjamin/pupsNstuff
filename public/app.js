const toggle = document.getElementById("toggle");
const body = document.querySelector("body");
const code = document.querySelectorAll("code");
console.log(toggle);
console.log(body);
toggle.addEventListener("click", () => {
  console.log("toggled!");
  body.classList.toggle("dark");
  for (const tag of code) {
    tag.classList.toggle("dark-code");
  }
});

console.log("hei");
