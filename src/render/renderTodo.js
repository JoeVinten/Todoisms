const main = document.querySelector(".main");

const renderTodo = (uniqId, name, dueDate, project, priority) => {
  let priorityColor;
  switch (priority) {
    case "high":
      priorityColor = "red";
      break;
    case "med":
      priorityColor = "yellow";
      break;
    case "low":
      priorityColor = "green";
  }
  const priorityIndicator = `<div class="pri-circle ${priorityColor}"></div>`;
  main.innerHTML += `
  <div class="card" data-id=${uniqId} data-project=${
    project == "" ? "Default" : project
  }>
    <div class="card__header todo__header">
      <input type="checkbox" class="todo__header__complete"/>
      <h4>${name}</h4>
    </div>
    <div class="card__info todo__date">Due: ${dueDate}</div>
    <div class="card__info">${project}</div>
    <div class="card__info todo__priority">${priorityIndicator}</div>
    <div class="card__actions">
      <i class="edit fas fa-edit"></i>
      <i class="del fas fa-trash-alt"></i>
  </div>
`;
};

export default renderTodo;
