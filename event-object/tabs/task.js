let tabs = document.querySelector(".tabs");

let tab = document.querySelectorAll(".tab");

let content = document.querySelectorAll(".tab__content");
console.log(content);

let openedTab = null;

function showContent(i) {
  content.forEach((item, index) => {
    if (i == index) {
      item.classList.add("tab__content_active");
    } else {
      item.classList.remove("tab__content_active");
    }
  });
}

tabs.addEventListener("click", function (event) {
  const target = event.target;
  console.log(target);
  let activeIndex = 0;
  if (target && target.classList.contains("tab")) {
    tab.forEach((item, i) => {
      if (target == item) {
        item.classList.add("tab_active");
        activeIndex = i;
      } else {
        item.classList.remove("tab_active");
      }
    });

    showContent(activeIndex);
  }
});
