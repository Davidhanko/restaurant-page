export function createElement(tag, className, text, IMGsource) {
  let element = document.createElement(`${tag}`);
  element.classList.add(`${className}`);
  if (tag !== "img") {
    element.textContent = `${text}`;
  } else {
    element.src = `${IMGsource}`;
    element.alt = `${text}`;
  }
  if (className === "navButton-active") {
    element.classList.add("navButton");
  }
  return element;
}
