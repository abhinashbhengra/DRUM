//select body
const body = document.body;
const list = document.querySelector(".keysName ul");
console.log(list);
// audio
const kick = new Audio("./sounds/kick.wav");
const snare = new Audio("./sounds/snare.wav");
const hi = new Audio("./sounds/hi.wav");
const tom = new Audio("./sounds/tom.wav");
const cymbal = new Audio("./sounds/cymbal.wav");
// button
const kickButton = document.querySelector(".kick");
const snareButton = document.querySelector(".snare");
const hiButton = document.querySelector(".hi");
const tomButton = document.querySelector(".tom");
const cymbalButton = document.querySelector(".cymbol");
// console.log(kickButton.textContent);

//button color
const buttonColor = `rgb(0, 0, 0, .1)`;
const backColor = `rgb(0, 0, 0)`;

// for change the background color --- but not using this
setInterval(() => {
  const red = Math.floor(Math.random() * 120);
  const green = Math.floor(Math.random() * 120);
  const blue = Math.floor(Math.random() * 120);
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  //   console.log(rgb);
  //   body.style.background = rgb;
}, 500);

// Keyboard Event
document.addEventListener(
  "keydown",
  (e) => {
    if (e.key === "a" || e.key === "A") {
      kick.currentTime = 0.01;
      kick.play();
      kickButton.style.background = buttonColor;
      setTimeout(() => {
        kickButton.style.background = backColor;
      }, 100);
    }
    if (e.key === "s" || e.key === "S") {
      snare.currentTime = 0.01;
      snare.play();
      snareButton.style.background = buttonColor;
      setTimeout(() => {
        snareButton.style.background = backColor;
      }, 200);
    }
    if (e.key === "t" || e.key === "T") {
      hi.currentTime = 0.01;
      hi.play();
      hiButton.style.background = buttonColor;
      setTimeout(() => {
        hiButton.style.background = backColor;
      }, 200);
    }
    if (e.key === "f" || e.key === "F") {
      tom.currentTime = 0.01;
      tom.play();
      tomButton.style.background = buttonColor;
      setTimeout(() => {
        tomButton.style.background = backColor;
      }, 200);
    }
    if (e.key === "y" || e.key === "Y") {
      cymbal.currentTime = 0.01;
      cymbal.play();
      cymbalButton.style.background = buttonColor;
      setTimeout(() => {
        cymbalButton.style.background = backColor;
      }, 200);
    }
  },
  false
);
