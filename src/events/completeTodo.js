const completeTodo = e => {
  if (e.target.checked == true) {
    // find the item in the projects object and move it to completed project
    e.target.nextElementSibling.classList.add("strike");
  } else {
    e.target.nextElementSibling.classList.remove("strike");
    // neeed to find a way to save it's previous project and then revert back to that if they decide it's not completed. Should create a new value on the object called in the above if statementx
  }
};

export default completeTodo;
