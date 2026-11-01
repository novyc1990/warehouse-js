export { addItemToLocalStorage, getItems, removeItemFromStorage };

// Отправить данные в хранилище
function addItemToLocalStorage(item) {
  const items = JSON.parse(localStorage.getItem("items")) || [];

  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
}

// Получение данных из хранилища
function getItems() {
  const items = JSON.parse(localStorage.getItem("items")) || [];

  return items;
}

// Удаление из хранилища
function removeItemFromStorage(editIndex) {
  const items = getItems();

  items.splice(editIndex, 1);
  localStorage.setItem("items", JSON.stringify(items));

  return items;
}
