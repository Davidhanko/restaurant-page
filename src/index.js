import "./style.css";
import { displayHome } from "./home";
import { displayMenu } from "./menu";

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

  return { deleteUI, createHome, createMenu };
})();

function checkButtons() {
  const buttons = document.querySelectorAll(".navButton");
  buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      switch (btn.textContent) {
        case "Home":
          UILogic.deleteUI();
          UILogic.createHome();
          break;
        case "Menu":
          UILogic.deleteUI();
          UILogic.createMenu();
          break;
        default:
          console.log(event.textContent);
      }
    });
  });
}
displayHome();
checkButtons();
