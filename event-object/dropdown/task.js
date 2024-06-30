let value = document.querySelector(".dropdown__value");
let list = document.querySelector(".dropdown__list");
value.addEventListener("click", function () {
  list.classList.add("dropdown__list_active");
});
let a = document.querySelectorAll("a");
a.forEach((link) =>
  link.addEventListener("click", (event) => {
    event.preventDefault();
  })
);

let items = Array.from(document.querySelectorAll(".dropdown__item"));
items.forEach((item) => {
  item.addEventListener("click", () => {
    list.classList.remove("dropdown__list_active");
    value.textContent = item.textContent;
  });
});
