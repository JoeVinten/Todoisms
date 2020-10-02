import { projects } from "../factories/Project";
import ToDo from "../factories/ToDo";
import renderTodo from "../render/renderTodo";

const addTodo = (name, dueDate, project, priority) => {
  let status = "active";
  let uniqId = "id" + new Date().getTime();

  const newTodo = ToDo(uniqId, name, dueDate, project, priority, status);
  const projectExists = projects.find(
    projName => projName.projectName == project
  );

  if (project == "") {
    projects[0].todo.push(newTodo);
  } else {
    projectExists.todos.push(newTodo);
  }
  renderTodo(uniqId, name, dueDate, project, priority);
};

export default addTodo;
