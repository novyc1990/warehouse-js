import { getLoader } from "./components.js";

// Отрисовка карточки
async function navigate(cardName) {
  const appEl = document.getElementById("app");
  appEl.innerHTML = "";

  const loaderEl = getLoader();
  appEl.append(loaderEl);

  switch (cardName) {
    case "addData": {
      const addModule = await import("./addCard.js");
      addModule.createAddCard(appEl, navigate);
      loaderEl.remove();
      break;
    }

    default: {
      const homeModule = await import("./homeCard.js");
      homeModule.createHomeCard(appEl, navigate);
      loaderEl.remove();
    }
  }
}

// Запуск приложения
document.addEventListener("DOMContentLoaded", function () {
  navigate();
});
