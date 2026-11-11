const modal = document.getElementById("stepsModal");
const openButton = document.getElementById("openSteps");
const closeButton = document.getElementById("closeSteps");
const reviewButton = document.getElementById("reviewSteps");

function openModal() {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}
function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
reviewButton.addEventListener("click", closeModal);
modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});
document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
