import { createElement } from "./elementCreator";
import GarlicSoup from "./pictures/Menu/garlic_soup.jpg";
import Steak from "./pictures/Menu/steak.jpg";
import Rice from "./pictures/Menu/rice.jpg";
import ChickenNuggets from "./pictures/Menu/chicken_nuggets.jpg";
import FrenchFries from "./pictures/Menu/french_fries.jpg";
import Dressing from "./pictures/Menu/dressing.jpg";

export function displayMenu() {
  const contentDiv = document.querySelector("#content");
  // Creating navigation bar
  const navBar = createElement("nav", "navigationBar", "");
  contentDiv.appendChild(navBar);
  //creating buttons
  navBar.appendChild(createElement("button", "navButton", "Home"));
  navBar.appendChild(createElement("button", "navButton-active", "Menu"));
  navBar.appendChild(createElement("button", "navButton", "Contact"));
  //creating headline
  contentDiv.appendChild(createElement("h1", "headline", "Menu"));
  //creating grid div
  const gridDiv = createElement("div", "menuGrid", "");
  contentDiv.appendChild(gridDiv);
  //creating Garlic soup
  const menuItemGarlic = gridDiv.appendChild(
    createElement("div", "menuItems", "")
  );
  menuItemGarlic.appendChild(
    createElement("img", "i", "Garlic soup", GarlicSoup)
  );
  const GarlicTextDiv = menuItemGarlic.appendChild(
    createElement("div", "menuText", "")
  );
  GarlicTextDiv.appendChild(createElement("h2", "i", "Garlic soup"));
  GarlicTextDiv.appendChild(
    createElement(
      "p",
      "i",
      "Prepare yourself for the best garlic soup you have ever eaten! Made from special ingredients, to make sure you will enjoy the taste."
    )
  );
  //creating steak
  const menuItemSteak = gridDiv.appendChild(
    createElement("div", "menuItems", "")
  );
  menuItemSteak.appendChild(createElement("img", "i", "Steak", Steak));
  const SteakTextDiv = menuItemSteak.appendChild(
    createElement("div", "menuText", "")
  );
  SteakTextDiv.appendChild(createElement("h2", "i", "Steak"));
  SteakTextDiv.appendChild(
    createElement(
      "p",
      "i",
      "Steak made from chicken! One of the best steaks you will eat in a lifetime!"
    )
  );
  //creating rice
  const menuItemRice = gridDiv.appendChild(
    createElement("div", "menuItems", "")
  );
  menuItemRice.appendChild(createElement("img", "i", "Rice", Rice));
  const RiceTextDiv = menuItemRice.appendChild(
    createElement("div", "menuText", "")
  );
  RiceTextDiv.appendChild(createElement("h2", "i", "Rice"));
  RiceTextDiv.appendChild(
    createElement(
      "p",
      "i",
      "Exported from Vietnam, cooked in traditional way to make you addicted!"
    )
  );
  //creating chicken
  const menuItemChicken = gridDiv.appendChild(
    createElement("div", "menuItems", "")
  );
  menuItemChicken.appendChild(
    createElement("img", "i", "Chicken nuggets", ChickenNuggets)
  );
  const ChickenTextDiv = menuItemChicken.appendChild(
    createElement("div", "menuText", "")
  );
  ChickenTextDiv.appendChild(createElement("h2", "i", "Chicken nuggets"));
  ChickenTextDiv.appendChild(
    createElement(
      "p",
      "i",
      "For children, we have chicken nuggets that never disappoint their young brains."
    )
  );
  //creating french
  const menuItemFrench = gridDiv.appendChild(
    createElement("div", "menuItems", "")
  );
  menuItemFrench.appendChild(
    createElement("img", "i", "French fries", FrenchFries)
  );
  const FrenchTextDiv = menuItemFrench.appendChild(
    createElement("div", "menuText", "")
  );
  FrenchTextDiv.appendChild(createElement("h2", "i", "French fries"));
  FrenchTextDiv.appendChild(
    createElement(
      "p",
      "i",
      "You do not like rice? Do not worry! For this occasion we have french fries prepared just for you!"
    )
  );
  //creating dressing
  const menuItemDressing = gridDiv.appendChild(
    createElement("div", "menuItems", "")
  );
  menuItemDressing.appendChild(createElement("img", "i", "Dressing", Dressing));
  const DressingTextDiv = menuItemDressing.appendChild(
    createElement("div", "menuText", "")
  );
  DressingTextDiv.appendChild(createElement("h2", "i", "Dressing"));
  DressingTextDiv.appendChild(
    createElement(
      "p",
      "i",
      "You want some sauce? You can choose from a dozen of options! Ketchup, mustard, chilli, we have it all!"
    )
  );
}
