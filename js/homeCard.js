export { createHomeCard };

import { getThEl, getCardEl, getWrapEl, getTitleEl, getButtonEl } from "./components.js";

import { getItems, removeItemFromStorage } from "./storage.js";

// Задаем сортирвку по умолчанию - в каком порядке добавлено в хранилище
let sortTypeValue = "";

// Создание главной карточки
function createHomeCard(containerEl, navigate) {
  const cardEl = getCardEl();
  const wrapEl = getWrapEl();
  const titleEl = getTitleEl("Склад");
  const items = getItems();
  const table = getTableEl(items);
  const buttonAdd = getButtonEl("Добавить запись");
  buttonAdd.addEventListener("click", function () {
    navigate("addData");
  });

  wrapEl.append(titleEl, buttonAdd);
  cardEl.append(wrapEl, table);
  containerEl.append(cardEl);
}

// Получение таблицы
function getTableEl(items) {
  const tableEl = document.createElement("table");
  tableEl.classList.add("table");
  const tableHeadEl = document.createElement("thead");
  const tableHeadRowEl = document.createElement("tr");

  const nameTh = getThEl("Название ↕", "name", handleSort);
  const shelfTh = getThEl("Полка ↕", "shelf", handleSort);
  const weightTh = getThEl("Вес ↕", "weight", handleSort);
  const storageDateTh = getThEl("Дата размещения ↕", "storageDate", handleSort);
  const actionTh = getThEl("Действие");

  const tableBodyEl = document.createElement("tbody");
  tableBodyEl.id = "tablBody";
  fillTableBody(tableBodyEl, items, sortTypeValue);

  tableHeadRowEl.append(nameTh, shelfTh, weightTh, storageDateTh, actionTh);
  tableHeadEl.append(tableHeadRowEl);
  tableEl.append(tableHeadEl, tableBodyEl);

  return tableEl;
}

// Обработчик сортировки таблицы
function handleSort(sortType) {
  sortTypeValue = sortType;
  sortTableBody();
}

// Сортируем таблицу
function sortTableBody() {
  const items = getItems();
  const tableBodyEl = document.querySelector("#tablBody");

  fillTableBody(tableBodyEl, items, sortTypeValue);
}

// наполнение tbody
function fillTableBody(tbody, items, sortType) {
  const itemsWithIndex = items.map((item, index) => ({
    ...item,
    originalIndex: index,
  }));

  if (sortType === "name") {
    itemsWithIndex.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortType === "shelf") {
    itemsWithIndex.sort((a, b) => a.shelf.localeCompare(b.shelf));
  }
  if (sortType === "weight") {
    itemsWithIndex.sort((a, b) => a.weight - b.weight);
  }
  if (sortType === "storageDate") {
    itemsWithIndex.sort((a, b) => a.storageDate.localeCompare(b.storageDate));
  }

  tbody.innerHTML = "";

  itemsWithIndex.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.shelf}</td>
        <td>${item.weight}</td>
        <td>${item.storageDate}</td>
    `;

    const actionTd = document.createElement("td");
    const removeButton = getButtonEl("Удалить", "table__btn");
    removeButton.addEventListener("click", function () {
      removeItem(item.originalIndex);
    });

    actionTd.append(removeButton);
    row.append(actionTd);
    tbody.append(row);
  });
}

// Обработчик удаления записи
function removeItem(editIndex) {
  const items = removeItemFromStorage(editIndex);
  const tableBodyEl = document.querySelector("#tablBody");

  fillTableBody(tableBodyEl, items, sortTypeValue);
}
