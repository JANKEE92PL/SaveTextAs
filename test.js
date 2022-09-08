import {querySelector} from "/script.js";

(function () {
    'use strict';


    /**
     * test function
     * @param {string} desc
     * @param {function} fn
     */
    function it(desc, fn) {
        try {
            fn();
            console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + desc);
        } catch (error) {
            console.log('\n');
            console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + desc);
            console.error(error);
        }
    }

    function assert(isTrue) {
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

    it("should render the component in DOM", () => {
        const wrapper = querySelector(".wrapper")
        alert(wrapper)
    })

})();