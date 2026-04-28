const header = document.querySelector("[data-header]");

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

const ticker = document.querySelector(".ticker div");
if (ticker) {
  ticker.innerHTML = `${ticker.innerHTML}${ticker.innerHTML}`;
}

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });
