"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.example5 = exports.example4 = exports.example3 = exports.example2 = exports.example1 = exports.add = void 0;
const add = (a, b) => {
    return a + b;
};
exports.add = add;
//Annotating 2 strings
const concatTwoStrings = (a, b) => {
    return [a, b].join(" ");
};
//Basic types
exports.example1 = "Hello World!";
exports.example2 = 42;
exports.example3 = true;
exports.example4 = Symbol();
exports.example5 = 123n;
//Any type
const handleFormData = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    return value;
};

