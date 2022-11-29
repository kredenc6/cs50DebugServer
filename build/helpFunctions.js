"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strToNumber = void 0;
const strToNumber = (str) => {
    const isValid = !/\D+/g.test(str); // valid if it doesn't have any non-number characters
    if (isValid) {
        return str * 1;
    }
    return NaN;
};
exports.strToNumber = strToNumber;
