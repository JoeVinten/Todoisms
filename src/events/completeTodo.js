import { projects } from "../factories/Project";

const updateStatus = (e, status, target) => {
  let clickedProject = e.target.parentElement.parentElement.dataset.project;
  projects.forEach(project => {
    if (project.projectName == clickedProject) {
      project.todos.forEach(item => {
        if (item.uniqId == target) {
          item.status = status;
        }
      });
    }
  });
};

const completeTodo = e => {
  let itemId = e.target.parentElement.parentElement.dataset.id;
  if (e.target.checked == true) {
    updateStatus(e, "complete", itemId);
    e.target.nextElementSibling.classList.add("strike");
  } else {
    updateStatus(e, "active", itemId);
    e.target.nextElementSibling.classList.remove("strike");
  }
};

export default completeTodo;
