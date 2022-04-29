import { CharsCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 0.7, -3.1]);
const numSorter = new Sorter(numbersCollection);

console.log("Unsorted array of numbers: ", numSorter.collection);
numSorter.sort();
console.log("Sorted array of numbers:   ", numSorter.collection);

const charsCollection = new CharsCollection("s68g7FwX0rjfL");
const charSorter = new Sorter(charsCollection);

console.log("Unsorted string: ", charSorter.collection);
charSorter.sort();
console.log("Sorted string:   ", charSorter.collection);

const linkedList = new LinkedList();
linkedList.add(32);
linkedList.add(9);
linkedList.add(109);
linkedList.add(2);
linkedList.add(-70);
linkedList.add(57);
linkedList.add(5.8);

const linkedListSorter = new Sorter(linkedList);

console.log("Unsorted linked list: ", linkedList.print());
linkedListSorter.sort();
console.log("Sorted linked list: ", linkedList.print());
