function goToCount() {
  const rand = Math.floor(Math.random() * 9) + 1;
  window.location.href = `${window.location.origin}/count/${rand}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const { pathname } = window.location;
  const countRegex = /count\/([0-9])/;
  const numberRegex = /number\/(\w+)/;

  const body = document.querySelector("body");
  const ul = document.querySelector("ul");

  const infoClass = "info";

  if (pathname === "/carbs/") {
    const carbText = document.createElement("p");
    carbText.classList.add(infoClass);
    carbText.textContent =
      "This is the same exact page as /fruits but configured in nginx using 'alias' to use 'carbs/' href but to render 'fruits/index.html'";
    body.insertBefore(carbText, ul);
  } else if (countRegex.test(pathname)) {
    const countNum = pathname.match(countRegex)[1];
    const countText = document.createElement("p");
    countText.textContent = `you are on /count/${countNum} and it has been configured to render /index.html in nginx`;
    countText.classList.add(infoClass);
    body.insertBefore(countText, ul);
  }
});

console.log("hello");
