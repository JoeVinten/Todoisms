const showForm = form => {
  if (form.classList.contains("hide")) {
    form.classList.remove("hide");
  } else {
    form.classList.add("hide");
  }
};

export default showForm;
