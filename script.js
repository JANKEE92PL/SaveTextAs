//*
//* Global Functions
//*
const querySelector = (target => document.querySelector(target));

//*
//* Variables
//*
const textarea = querySelector("textarea"), fileNameInput = querySelector(".file-name input"),
    selectMenu = querySelector(".save-as select"), saveBtn = querySelector(".save-btn");
//*
//* Event Listeners
//*
saveBtn.addEventListener("click", () => {
    const blob = new Blob([textarea.value], {type: selectMenu.value})
    //? URL.createObjectURL creates a url that represent passed object
    const fileUrl = URL.createObjectURL(blob)
    const link = document.createElement("a"); //? creating <a> Tag
    link.download = fileNameInput.value; //? passing filename as download value of link
    link.href = fileUrl; //? passing fileUrl as href value of link
    link.click() //? execute the link
})