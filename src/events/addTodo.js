import { projects } from "../factories/Project";
import ToDo from "../factories/ToDo";
import renderTodo from "../render/renderTodo";

// problem is we can't access the projects array for some reason

const addTodo = (name, dueDate, project, priority) => {
  const newTodo = ToDo(name, dueDate, project, priority);

  const projectExists = projects.find(
    projName => projName.projectName == project
  );

  if (project == "") {
    projects[0].todo.push(newTodo);
  } else {
    projectExists.todos.push(newTodo);
  }
  renderTodo(name, dueDate, priority);
};

export default addTodo;
