(() => {
  const refs = {
    openModalBtn: document.querySelector("[burger-portfolio-open]"),
    closeModalBtn: document.querySelector("[burger-portfolio-close]"),
    modal: document.querySelector("[portfolio]"),
  };
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle("portfolio-is-hidden");
  }
})();
