import { projects } from "../factories/Project";

const getTodo = (e, target) => {
  let clickedProject = e.target.parentElement.parentElement.dataset.project;
  projects.forEach(project => {
    if (project.projectName == clickedProject) {
      const index = project.todos.findIndex(todo => todo.uniqId == target);
      project.todos.splice(index, 1);
    }
  });
};

const removeItem = e => {
  e.target.parentElement.parentElement.remove();
};

const deleteTodo = e => {
  let itemId = e.target.parentElement.parentElement.dataset.id;
  getTodo(e, itemId);
  removeItem(e);
};

export default deleteTodo;
