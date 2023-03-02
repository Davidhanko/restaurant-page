import "./style.css";
import Logo from "./logo.png";
const contentDiv = document.querySelector("#content");

function createButtons(text) {}

function displayHome() {
  // Creating navigation bar
  let navBar = document.createElement("nav");
  navBar.classList.add("navigationBar");
  contentDiv.appendChild(navBar);
  //creating buttons
  let button1 = createButtons("Home");
  let button2 = createButtons("Menu");
  let button3 = createButtons("Contact");
}

displayHome();
