import "./style.css";
import showForm from "./events/showForm";
import submitProject from "./events/submitProject";
import submitTodo from "./events/submitTodo";
import completeTodo from "./events/completeTodo";
import deleteTodo from "./events/deleteTodo";
import { editTodo, updateToDo } from "./events/editTodo";

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
  if (e.target.classList.contains("edit")) {
    editTodo(e);
  }
});

//

// close edit modal
main.addEventListener("click", e => {
  e.target.classList.contains("dark-overlay") ? e.target.remove() : null;
});

// editable

main.addEventListener("input", e => {
  //throwing an error because this item doesn't exit oneece it's killed off
  if (e.target.parentElement.classList.contains("modal-form")) {
    updateToDo(e);
  }
});

main.addEventListener("click", e => {
  if (e.target.parentElement.classList.contains("change-priority")) {
    updateToDo(e);
  }
});
