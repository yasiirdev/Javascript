let addNote = document.getElementById("addBtn");
let NoteDiolog = document.getElementById("diolog");

addNote.addEventListener("click", function (event) {
  event.preventDefault();
  if (NoteDiolog.style.display === "none") {
    NoteDiolog.style.display = "flex";
  } else {
    NoteDiolog.style.display = "none";
  }
  document.getElementById("Textarea").value = "";
  document.getElementById("cancelBtn").addEventListener("click", () => {
    if (NoteDiolog.style.display === "flex") {
      NoteDiolog.style.display = "none";
    }
  });
  saveNoteProcess();
  return;
});

// romoveing bankSpace
let TextTrim = function () {
  let textVal = document.getElementById("Textarea");
  return textVal.value.trim();
};

function saveNoteProcess() {
  //apply Btn
  document.getElementById("applyBtn").addEventListener("click", function () {
    let notediv = document.createElement("aside");
    let addNote = function () {
      notediv.classNameList.add("task");
      return document.getElementById("notes").append(notediv);
    };
    notediv.innerText = TextTrim();
    if (notediv.value === "") {
      notediv.remove();
    }
    NoteDiolog.style.display = "none";
    return addNote();
  });
}
