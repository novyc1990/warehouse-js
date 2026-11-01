export { createAddCard };

import { getCardEl, getWrapEl, getTitleEl, getButtonEl, getFormEl, getInputEl } from "./components.js";

import { addItemToLocalStorage } from "./storage.js";

// Создание карточки добавления записи
function createAddCard(containerEl, navigate) {
  const cardEl = getCardEl();
  const wrapEl = getWrapEl("card__wrapper--form");
  const titleEl = getTitleEl("Добавить запись");
  const formEl = getFormEl();

  const nameInputEl = getInputEl("text", "name", "Название", "name");
  const shelfInputEl = getInputEl("text", "shelf", "Полка", "shelf");
  const weightInputEl = getInputEl("number", "weight", "Вес", "weight");
  const storageDateInputEl = getInputEl("date", "storageDate", "Дата размещения", "storageDate");
  const addButtonEl = getButtonEl("Добавить запись");

  formEl.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInputEl.value;
    const shelf = shelfInputEl.value;
    const weight = weightInputEl.value;
    const storageDate = storageDateInputEl.value;

    const item = { name, shelf, weight, storageDate };

    addItemToLocalStorage(item);
    navigate();
  });
  formEl.append(nameInputEl, shelfInputEl, weightInputEl, storageDateInputEl, addButtonEl);
  wrapEl.append(titleEl, formEl);
  cardEl.append(wrapEl);
  containerEl.append(cardEl);
}
