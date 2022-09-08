import {get, saveBtn, textarea, wrapper, devmodeActive, testResults} from "/script.js";

let results = []
let testfailed
export const pushTestResults = (result) => {
    console.log(result)
    results.push(result)
    console.log(results)
    console.log(failed)
}
const renderTestResults = async (status) => {
    await results.forEach((result, index) => {
        let li = document.createElement("li");
        testResults.insertAdjacentElement("beforeend", li);
        li.innerText = result
        li.setAttribute("index", index)
        li.setAttribute("testfailed", status)
        if (status) {
            li.classList.add(".test-results-false")
        } else
            li.classList.remove(".test-results-false")
    })
}


export const runTests = async () => {
    'use strict';

    /**
     * test function
     * @param {string} desc
     * @param {function} fn
     */
    const it = async (desc, fn) => {
        try {
            fn();
            console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + desc);
            pushTestResults(`${desc}`)
        } catch (error) {
            console.log('\n');
            console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + desc);
            console.error(error);
            pushTestResults(desc)
            return testfailed = false
        }
    }

    const assert = (isTrue) => {
        if (!isTrue) {
            throw new Error();
            return testfailed = true
        }
    }

//! EXAMPLES
    /**
     *? Expample to FAILED The test
     */
    // it('should fail', function () {
    //     assert(1 !== 1);
    // });
    /**
     *? Expample to PASSING The test
     */
    // it('should pass', function () {
    //     assert(1 === 1);
    // });
    // ! EXAMPLES END
    /**
     ** TESTCASES
     */
    /**
     *? Testing for Correct Rendering all Nodes inside of Element .wrapper
     */
    await it("should render the component in DOM", () => {
        if (devmodeActive) {
            assert(wrapper.childElementCount === 60) //! FOR TRUE 6
        } else {
            assert(wrapper.childElementCount === 4)
        }
        return renderTestResults(status)
    })

    await it('should disable the saveBTN if textarea empty || invalid', () => {
        textarea.value = ''
        assert(saveBtn.style.opacity != 1)
    });
    return renderTestResults(status)


};