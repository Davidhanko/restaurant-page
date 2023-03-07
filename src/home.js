import Logo from "./pictures/logo.png";
import { createElement } from "./elementCreator";

export function displayHome() {
  const contentDiv = document.querySelector("#content");
  // Creating navigation bar
  const navBar = createElement("nav", "navigationBar", "");
  contentDiv.appendChild(navBar);
  //creating buttons
  navBar.appendChild(createElement("button", "navButton-active", "Home"));
  navBar.appendChild(createElement("button", "navButton", "Menu"));
  navBar.appendChild(createElement("button", "navButton", "Contact"));
  //creating headline
  contentDiv.appendChild(createElement("h1", "headline", "BlackScraper"));
  //creating image
  contentDiv.appendChild(createElement("img", "smallImage", "landscape", Logo));
  //creating text
  contentDiv.appendChild(
    createElement(
      "p",
      "welcomeText",
      "Welcome to the BlackScraper, our four-star restaurant!"
    )
  );
  contentDiv.appendChild(
    createElement(
      "p",
      "welcomeText",
      "We offer the best steaks in the entire country!"
    )
  );
  contentDiv.appendChild(
    createElement("p", "welcomeText", "Made with passion from 1967!")
  );
}
