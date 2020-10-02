import { projects } from "../factories/Project";

const updateStatus = (status, target) => {
  for (let i = 0; i < projects.length; i++) {
    for (let j = 0; j < projects[i].todo.length; j++) {
      if (projects[i].todo[j].uniqId == target) {
        projects[i].todo[j].status = status;
      }
    }
  }
};

const completeTodo = e => {
  let itemId = e.target.parentElement.parentElement.dataset.id;
  if (e.target.checked == true) {
    updateStatus("complete", itemId);
    e.target.nextElementSibling.classList.add("strike");
  } else {
    updateStatus("active", itemId);
    e.target.nextElementSibling.classList.remove("strike");
    console.log(projects);
  }
  console.log(projects);
};

export default completeTodo;
