const reveal = Array.from(document.querySelectorAll(".reveal"));

document.addEventListener("scroll", () => {
  reveal.forEach((rev) => {
    const top = rev.getBoundingClientRect().top;
    const bottom = rev.getBoundingClientRect().bottom;
    console.log(window.innerHeight);
    console.log(top);
    if (top < window.innerHeight) {
      setTimeout(() => rev.classList.add("reveal_active"), 1000);
    }
  });
});
