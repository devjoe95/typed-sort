import { CharsCollection } from "./CharactersCollection";
import { CharLinkedList } from "./CharLinkedList";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 0.7, -3.1]);

console.log("Unsorted array of numbers: ", numbersCollection.data);
numbersCollection.sort();
console.log("Sorted array of numbers: ", numbersCollection.data);

const charsCollection = new CharsCollection("s68g7FwX0rjfL");

console.log("Unsorted string: ", charsCollection.data);
charsCollection.sort();
console.log("Sorted string: ", charsCollection.data);

const linkedList = new LinkedList();
linkedList.add(32);
linkedList.add(9);
linkedList.add(109);
linkedList.add(2);
linkedList.add(-70);
linkedList.add(57);
linkedList.add(5.8);

console.log("Unsorted linked list: ");
linkedList.print();
linkedList.sort();
console.log("Sorted linked list: ");
linkedList.print();

const charLinkedList = new CharLinkedList();
charLinkedList.add("p");
charLinkedList.add("G");
charLinkedList.add("l");
charLinkedList.add("2");
charLinkedList.add("g");
charLinkedList.add("z");
charLinkedList.add("8");

console.log("Unsorted linked list: ");
charLinkedList.print();
charLinkedList.sort();
console.log("Sorted linked list: ");
charLinkedList.print();
