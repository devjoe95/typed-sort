"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./CharactersCollection");
const NumbersCollection_1 = require("./NumbersCollection");
const Sorter_1 = require("./Sorter");
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0, 0.7, -3.1]);
const numSorter = new Sorter_1.Sorter(numbersCollection);
console.log("Unsorted: ", numSorter.collection);
numSorter.sort();
console.log("Sorted:   ", numSorter.collection);
const charsCollection = new CharactersCollection_1.CharsCollection("s68g7FwX0rjfL");
const charSorter = new Sorter_1.Sorter(charsCollection);
console.log("Unsorted: ", charSorter.collection);
charSorter.sort();
console.log("Sorted:   ", charSorter.collection);
