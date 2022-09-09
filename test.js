import {saveBtn, textarea, wrapper, devmodeActive} from "/SaveTextAs/script.js";


export const runTests = () => {
    'use strict';
    console.clear()
    console.time("Test duration:")
    /**
     * test function
     * @param {string} desc
     * @param {function} fn
     */
    const it = (desc, fn) => {
        try {
            fn();
            console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + desc);

        } catch (error) {
            console.log('\n');
            console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + desc);
            console.error(error);
        }
    }

    const assert = (isTrue) => {
        if (!isTrue) {
            throw new Error();
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
    it("should render the component in DOM", () => {
        if (devmodeActive) {
            assert(wrapper.childElementCount === 6)
        } else {
            assert(wrapper.childElementCount === 4)
        }
    })

    it('should disable the saveBTN if textarea empty || invalid', () => {
        textarea.value = ''
        assert(saveBtn.disabled)
    });



    //* Cleaning the CONSOLE
    console.group('\x1b[32m%s\x1b[0m', '\u0394 Timing')
    console.timeEnd("Test duration:")
    console.groupEnd()

};
