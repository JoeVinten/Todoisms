import "./style.css";
import showForm from "./events/showForm";
import formSubmit from "./events/formSubmit";

let projects = [{ name: "Default", todo: [] }];

// Hide and show forms
const addProjBtn = document.querySelector(".add-item__project");
const addToDoBtn = document.querySelector(".add-item__todo");
const addProjectForm = document.querySelector(".add-project");
const addToDoForm = document.querySelector(".add-todo");

addProjBtn.addEventListener("click", showForm.bind("click", addProjectForm));
addToDoBtn.addEventListener("click", showForm.bind("click", addToDoForm));

// Projects object

// Create a new project
addProjectForm.addEventListener("submit", formSubmit);

export { projects };
