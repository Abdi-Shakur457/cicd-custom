/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
const core = required('actions/core') 


try { 
    const nametoGreet = core.getInput('who-to-greet')
    console.log('hello , ${nametoGreet}!')
}
catch (error) { 
    core.setFailed(error.message);
}

module.exports = __webpack_exports__;
/******/ })()
;