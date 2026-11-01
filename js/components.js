// Экспортируемые функции
export { getLoader, getThEl, getCardEl, getWrapEl, getTitleEl, getButtonEl, getFormEl, getInputEl };

// Получение элемента карточки
function getCardEl() {
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");

  return cardEl;
}

// Получение элемента обертки для выравнивания внутренних элементов
function getWrapEl(className) {
  const wrapEl = document.createElement("div");
  wrapEl.classList.add("card__wrapper");

  if (className) {
    wrapEl.classList.add(className);
  }

  return wrapEl;
}

// Получение элемента заголовка
function getTitleEl(text) {
  const titleEl = document.createElement("h1");
  titleEl.textContent = text;
  titleEl.classList.add("main-title");

  return titleEl;
}

// Получение элемента кнопки
function getButtonEl(text, className) {
  const buttonEl = document.createElement("button");
  buttonEl.textContent = text;
  buttonEl.classList.add("btn");

  if (className) {
    buttonEl.classList.add(className);
  }

  return buttonEl;
}

// Получение элемента формы
function getFormEl() {
  const formEl = document.createElement("form");
  formEl.classList.add("form");

  return formEl;
}

// Получение элемента поля ввода данных
function getInputEl(type, name, placeholder, id) {
  const inputEl = document.createElement("input");
  inputEl.type = type;
  inputEl.name = name;
  inputEl.placeholder = placeholder;
  inputEl.id = id;
  inputEl.required = true;
  inputEl.classList.add("form__input");

  return inputEl;
}

// Получение ячейки заголовка таблицы
function getThEl(text, sortType, onSort) {
  const thEl = document.createElement("th");
  thEl.textContent = text;

  if (onSort) {
    thEl.classList.add("table__sort");
    thEl.addEventListener("click", function () {
      onSort(sortType);
    });
  }

  return thEl;
}

// Получение прелоадера
function getLoader() {
  const loaderWrapEl = document.createElement("div");
  loaderWrapEl.classList.add("preloader-wrapper");
  const loaderEl = document.createElement("div");
  loaderEl.classList.add("preloader");

  loaderWrapEl.append(loaderEl);

  return loaderWrapEl;
}
