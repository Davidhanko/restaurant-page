import "./style.css";
import { displayHome } from "./home";
import { displayMenu } from "./menu";
import { displayContact } from "./contact";

const UILogic = (() => {
  const div = document.getElementById("content");
  const deleteUI = () => {
    div.replaceChildren();
  };
  const createHome = () => {
    displayHome();
    checkButtons();
  };
  const createMenu = () => {
    displayMenu();
    checkButtons();
  };
  const createContact = () => {
    displayContact();
    checkButtons();
  };

  return { deleteUI, createHome, createMenu, createContact };
})();

function checkButtons() {
  const buttons = document.querySelectorAll(".navButton");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      switch (btn.textContent) {
        case "Home":
          UILogic.deleteUI();
          UILogic.createHome();
          break;
        case "Menu":
          UILogic.deleteUI();
          UILogic.createMenu();
          break;
        case "Contact":
          UILogic.deleteUI();
          UILogic.createContact();
          break;
      }
    });
  });
}

displayHome();
checkButtons();
