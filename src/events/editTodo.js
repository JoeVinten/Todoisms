import renderEditModal from "../render/renderEditModal";
import { projects } from "../factories/Project";
import renderUpdates from "../render/renderUpdates";

const editTodo = e => {
  let itemId = e.target.parentElement.parentElement.dataset.id;
  renderEditModal(e, itemId);
};

const updateToDo = e => {
  let clickedProject =
    e.target.parentElement.parentElement.dataset.project != undefined
      ? e.target.parentElement.parentElement.dataset.project
      : e.target.parentElement.parentElement.parentElement.dataset.project;
  let currentTodo =
    e.target.parentElement.parentElement.dataset.id != undefined
      ? e.target.parentElement.parentElement.dataset.id
      : e.target.parentElement.parentElement.parentElement.dataset.id;
  // Find project
  projects.forEach(project => {
    if (project.projectName == clickedProject) {
      project.todos.forEach(todo => {
        if (todo.uniqId == currentTodo) {
          let tagName = e.target.tagName;
          switch (tagName) {
            case "H2":
              todo.name = e.target.textContent;
              break;
            case "INPUT":
              todo.date = e.target.value;
              break;
            case "DIV":
              todo.priority = e.target.dataset.priority;
          }
        }
        renderUpdates(currentTodo, todo.name, todo.date, todo.priority);
      });
    }
  });
};

export { editTodo, updateToDo };
