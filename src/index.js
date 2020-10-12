import "./style.css";
import showForm from "./events/showForm";
import submitProject from "./events/submitProject";
import submitTodo from "./events/submitTodo";
import completeTodo from "./events/completeTodo";
import deleteTodo from "./events/deleteTodo";

let projects = [{ name: "Default", todo: [] }];

// Hide and show forms
const addProjBtn = document.querySelector(".add-item__project");
const addToDoBtn = document.querySelector(".add-item__todo");
const addProjectForm = document.querySelector(".add-project");
const addToDoForm = document.querySelector(".add-todo");

addProjBtn.addEventListener("click", showForm.bind("click", addProjectForm));
addToDoBtn.addEventListener("click", showForm.bind("click", addToDoForm));

// Create a new project
addProjectForm.addEventListener("submit", submitProject);

// Create a new todo
addToDoForm.addEventListener("submit", submitTodo);

const main = document.querySelector(".main");

// Mark as complete

main.addEventListener("click", e => {
  if (e.target.classList.contains("todo__header__complete")) {
    completeTodo(e);
  }
  if (e.target.classList.contains("del")) {
    deleteTodo(e);
  }
});

// delete item

export { projects };
