//*
//* Import
//*
import {runTests} from "/test.js";


//*
//* Functions
//*
export const devmodeActive = () => {
    return true
}

const createTestBtn = () => {
    devmodeActive()
    wrapper.insertAdjacentElement("beforeend", testBtn,)
    testBtn.classList.add("test-btn")
    testBtn.innerText = "Start Testing"
    testBtn.onclick = runTests
}

export const get = (target => document.querySelector(target));

const setDisableSaveBtn = () => {
    textarea.value === '' ? saveBtn.disabled = true : saveBtn.disabled = false;
}

const loaderSimulation = () => {
    loader.style.display = "inline-block"
    setTimeout(() => {
        loader.style.display = "none"
    }, 1200)
}


//*
//* Variables
//*
export const textarea = get("textarea"), fileNameInput = get(".file-name input"),
    loader = get('.lds-hourglass'), selectMenu = get(".save-as select"),
    saveBtn = get(".save-btn"), wrapper = get(".wrapper");

const testBtn = document.createElement("Button")


//*
//* Assigning
//*
saveBtn.disabled = true;

//*
//* Event Listeners
//*

/**
 * getting selected option text
 */
selectMenu.addEventListener("change", () => {
    let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerText = `Save as ${selectedOption.split(" ")[0]}`;
})

/**
 * creating a Blob and reference context to link and finally download it to Host OS
 *      ? URL.createObjectURL creates a url that represent passed object
 *      ? creating <a> Tag
 *      ? passing filename as download value of link
 *      ? passing fileUrl as href value of link
 *      ? execute the link
 */
saveBtn.addEventListener("click", () => {
    loaderSimulation()
    const blob = new Blob([textarea.value], {type: selectMenu.value})
    const fileUrl = URL.createObjectURL(blob)
    const link = document.createElement("a");
    link.download = fileNameInput.value;
    link.href = fileUrl;
    link.click()
})

/**
 * Checking the Status of SaveBtn.disabled
 */
textarea.addEventListener("input", setDisableSaveBtn)


textarea.ondblclick = createTestBtn