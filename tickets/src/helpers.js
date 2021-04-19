"use strict";
exports.__esModule = true;
exports.environmentVariablesChecker = void 0;
function environmentVariablesChecker(variableName, message) {
    for (var i = 0; i < variableName.length; i++) {
        if (!variableName) {
            throw new Error({ message: message } + ' must be defined');
        }
    }
}
exports.environmentVariablesChecker = environmentVariablesChecker;
console.log(environmentVariablesChecker([process.env.JWT_KEY, process.env.JWT_KEY], process.env.JWT_KEY));
