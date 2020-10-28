const renderUpdates = (todoId, name, date, priority) => {
  const todoIDFind = `div[data-id="${todoId}"]`;
  const cardItem = document.querySelector(todoIDFind);
  cardItem.querySelector(".todo__header h4").textContent = name;
  //sort date fns
  cardItem.querySelector(".todo__date").textContent = date;
  // change the priorty
};

export default renderUpdates;
