var display = document.querySelector(".display");

document.querySelectorAll("td").forEach(function (td) {
  td.addEventListener("click", function (e) {
    var belgi = e.target.innerText;
    if (belgi == "C") {
      display.value = "";
    } else if (belgi == "=") {
      display.value = eval(display.value);
    } else {
      display.value += belgi;
    }
  });
});
