import "./style.css";
import createTodo from "./factories/createTodo";
import showForm from "./logic/showForm";

// Hide and show forms
const addProjBtn = document.querySelector(".add-item__project");
const addToDoBtn = document.querySelector(".add-item__todo");
const addProjectForm = document.querySelector(".add-project");
const addToDoForm = document.querySelector(".add-todo");

addProjBtn.addEventListener("click", showForm(addProjectForm));
addToDoBtn.addEventListener("click", showForm(addToDoForm));
