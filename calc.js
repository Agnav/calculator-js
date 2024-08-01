// const display = document.getElementById("display");
// const specialcharacter = ["+", "*", "/", "-", "%"];
// let num = "";
// let output = "";
// let strip = "";

const divbutton = document.getElementById("divbutton");
const buttons = document.querySelectorAll(".box");
const display = document.querySelector(".calc");
const parent = document.querySelector("#parent");

buttons.forEach((bt) => {
  // if (e.target !== e.currentTarget) {

  bt.addEventListener("click", (e) => {
    const clicked = document.getElementById(e.target.id);
    console.log(clicked);

    clicked.classList.add("test");

    // });
    console.log(buttons);
    setTimeout(() => {
      clicked.classList.remove("test");
    }, 150);
  });
});

// function divclick() {
//   divbutton.classList.add("clicked");

//   console.log("andidisco");
// }

function getnum(input) {}

//if delete
//output=output.toString().slice(0,-1):
