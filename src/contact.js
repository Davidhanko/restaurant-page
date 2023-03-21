import { createElement } from "./elementCreator";

export function displayContact() {
  const contentDiv = document.querySelector("#content");
  // Creating navigation bar
  const navBar = createElement("nav", "navigationBar", "");
  contentDiv.appendChild(navBar);
  //creating buttons
  navBar.appendChild(createElement("button", "navButton", "Home"));
  navBar.appendChild(createElement("button", "navButton", "Menu"));
  navBar.appendChild(createElement("button", "navButton-active", "Contact"));
  //creating headline
  contentDiv.appendChild(createElement("h1", "headline", "Contact us"));
  //creating text
  contentDiv.appendChild(
    createElement("p", "welcomeText", "Our contact details:")
  );
  contentDiv.appendChild(
    createElement("p", "welcomeText", "Phone number: 123-456-7890")
  );
  contentDiv.appendChild(
    createElement("p", "welcomeText", "Email: example@gmoil.com")
  );
}
