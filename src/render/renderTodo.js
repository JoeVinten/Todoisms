const main = document.querySelector(".main");

const renderTodo = (uniqId, name, dueDate, project, priority) => {
  main.innerHTML += `
  <div class="card" data-id=${uniqId}>
    <div class="card__header todo__header">
      <input type="checkbox" class="todo__header__complete"/>
      <h4>${name}</h4>
    </div>
    <div class="card__info">Due ${dueDate}</div>
    <div class="card__info">${project}</div>
    <div class="card__info">${priority}</div>
    <div class="card__actions">
      <i class="fas fa-edit"></i>
      <i class="fas fa-trash-alt"></i>
  </div>
`;
};

export default renderTodo;
