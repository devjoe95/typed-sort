"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sort_1 = require("./Sort");
const sorter = new Sort_1.Sorter([10, 3, -5, 0]);
console.log("Unsorted: ", sorter.collection);
sorter.sort();
console.log("Sorted:   ", sorter.collection);
