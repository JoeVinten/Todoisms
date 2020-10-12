import { projects } from "../factories/Project";
import ToDo from "../factories/ToDo";
import renderTodo from "../render/renderTodo";
import format from "date-fns/format";

const addTodo = (name, dueDate, project, priority) => {
  let status = "active";
  let uniqId = "id" + new Date().getTime();
  dueDate == ""
    ? (dueDate = "No date")
    : (dueDate = format(new Date(dueDate), "dd,MM,yyyy"));
  priority == undefined ? (priority = "med") : null;
  const newTodo = ToDo(uniqId, name, dueDate, project, priority, status);
  const projectExists = projects.find(
    projName => projName.projectName == project
  );

  if (project == "") {
    projects[0].todos.push(newTodo);
  } else {
    projectExists.todos.push(newTodo);
  }
  renderTodo(uniqId, name, dueDate, project, priority);
};

export default addTodo;
