import { CharsCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 0.7, -3.1]);
const numSorter = new Sorter(numbersCollection);

console.log("Unsorted: ", numSorter.collection);
numSorter.sort();
console.log("Sorted:   ", numSorter.collection);

const charsCollection = new CharsCollection("s68g7FwX0rjfL");
const charSorter = new Sorter(charsCollection);

console.log("Unsorted: ", charSorter.collection);
charSorter.sort();
console.log("Sorted:   ", charSorter.collection);
