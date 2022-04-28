import { Sorter } from "./Sort";

const sorter = new Sorter([10, 3, -5, 0]);
console.log("Unsorted: ", sorter.collection);
sorter.sort();
console.log("Sorted:   ", sorter.collection);
