// Переменные:
const addInput = document.querySelector('.add-new__add-input');
const addButton = document.querySelector('.add-new__add-btn');
const ul = document.querySelector('.todos');
// Добавление нового пункта:
addButton.addEventListener('click', () => {
  let li = document.createElement('li');
  li.className = 'todos__todo';
  if (addInput.value.length !== 0) {
    li.innerHTML = '<span class="remove"></span>' + addInput.value;
    ul.appendChild(li);
    addInput.value = '';
      }
});

// Удаление пункта:
  ul.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') {
    let span = event.target;
    let todo = span.parentNode;
    ul.removeChild(todo);
    // Вычеркивание пункта:
  } else if (event.target.tagName === 'LI') {
    let todo = event.target;
    todo.classList.toggle('checked');
  }
});



