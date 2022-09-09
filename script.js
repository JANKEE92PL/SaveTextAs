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

const createHelperElements = () => {

    if (testResults.childElementCount === 0) {

        let head = document.createElement("h2")
        testResults.insertAdjacentElement('beforebegin', head)
        head.innerText = "TEST RESULTS"

        let li = document.createElement("li")
        let p = document.createElement("p")

        testResults.insertAdjacentElement('beforeend', li)
        li.innerText = "please open the Console and Check the Results"
        testResults.insertAdjacentElement('beforeend', p)
        p.innerText = "Cmd+Option+I (Mac) or Strg+Shift+I (Windows)"

    }

}

const createTestBtn = () => {
    devmodeActive()
    wrapper.insertAdjacentElement("beforeend", testBtn,)
    testBtn.classList.add("test-btn")
    testBtn.innerText = "Start Testing"

    testBtn.onclick = () => {
        modal.style.display = "block";

        runTests()
        createHelperElements()

    }
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
    saveBtn = get(".save-btn"), wrapper = get(".wrapper"), testResults = get(".test-results");

const testBtn = document.createElement("Button")

// Get the modal
const modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

//*
//* Assigning
//*
saveBtn.disabled = true;

textarea.title = "To Activate Development Mode please double click on the Textarea!"

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

/**
 * ! To start the Devmode please doublle click in the <Textarea>
 * @type {createTestBtn}
 */
textarea.ondblclick = createTestBtn


// When the user clicks on <span> (x), close the modal
span.onclick = () => {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

