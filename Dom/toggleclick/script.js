let btn = document.querySelector("#btn");
let body = document.body;

if (JSON.parse(localStorage.getItem("darkmode")) === true) {
  body.classNameList.add("mode");
}

btn.addEventListener("click", (ev) => {
  ev.preventDefault();
  body.classNameList.toggle("mode");
  let isDark = body.classNameList.contains("mode");
  localStorage.setItem("darkmode", JSON.stringify(isDark));
});
