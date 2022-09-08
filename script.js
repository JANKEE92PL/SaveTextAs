const querySelector = (target => document.querySelector(target));

const textarea = querySelector("textarea"),
    fileNameInput = querySelector(".file-name input"),
    selectMenu = querySelector(".save-as select"),
    saveBtn = querySelector(".save-btn");

saveBtn.addEventListener("click", () => {
    console.log(textarea.value)
})