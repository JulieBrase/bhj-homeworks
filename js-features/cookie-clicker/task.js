let clicker__counter = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");

cookie.onclick = function () {
  clicker__counter.textContent++;

  if (clicker__counter.textContent % 2 > 0) {
    cookie.width += 100;
  } else {
    cookie.width -= 100;
  }
};
