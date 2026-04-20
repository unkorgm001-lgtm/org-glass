let cards = document.querySelectorAll(".box-glass-3d");
let values = document.querySelectorAll(".numbers .box .box-value");
let asideNav = document.querySelectorAll("aside ul li a");
cards.forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    let r = el.getBoundingClientRect();
    // Calc Percentage
    let xPre = (e.clientX - r.left) / r.width - 0.5;
    let yPre = (e.clientY - r.top) / r.height - 0.5;
    // Calc Degree
    let rx = xPre * -30;
    let ry = -yPre * -25;
    // Put Effect
    el.style.transform = `translateZ(10px) perspective(1000px) rotateX(${ry}deg) rotateY(${rx}deg)`;
  });
  el.addEventListener("mouseleave", (e) => {
    el.style.transform = `translateZ(10px) perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  });
});
values.forEach((e) => {
  let number = +e.innerText
    .split("")
    .filter((e) => e !== ",")
    .join("");
  let counter = 0;
  let addition = number / (5000 / 16);
  let set = setInterval(() => {
    if (counter < number) {
      counter += addition;
      e.innerText = Math.ceil(counter).toLocaleString();
    } else {
      e.innerText = number.toLocaleString();
      clearInterval(set);
    }
  }, 16.6);
});
document.getElementById("switch").onclick = function () {
  if (
    document.getElementsByTagName("html")[0].getAttribute("data-theme") ===
    "dark"
  ) {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("data-theme", "light");
    document.querySelector(".fa-sun").style.display = "none";
    document.querySelector(".fa-moon").style.display = "inline-block";
  } else {
    document.getElementsByTagName("html")[0].setAttribute("data-theme", "dark");
    document.querySelector(".fa-sun").style.display = "inline-block";
    document.querySelector(".fa-moon").style.display = "none";
  }
};
document.getElementById("aside-switch").onclick = function () {
  if (document.getElementById("aside").style.transform === "translateX(0px)")
    document.getElementById("aside").style.transform = "translateX(-100%)";
  else document.getElementById("aside").style.transform = "translateX(0)";
};
asideNav.forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".background").style.animation =
      "on-load var(--transition-normal) forwards linear running";
  });
});
