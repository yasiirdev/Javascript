function showMenu() {
  option = document.getElementById("myoption");
  option.style.display === "none"
    ? (option.style.display = "grid")
    : (option.style.display = "none");
}

const menu = document.getElementById("mymenu");

menu.addEventListener("mouseenter", showMenu);

menu.addEventListener("mouseleave", () => {
  option.style.display = "none";
});

console.log("kajfh skadfgjh");
