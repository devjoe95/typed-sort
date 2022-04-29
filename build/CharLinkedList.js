"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharLinkedList = void 0;
const Node_1 = require("./Node");
const Sorter_1 = require("./Sorter");
class CharLinkedList extends Sorter_1.Sorter {
    constructor() {
        super();
        this.head = null;
    }
    add(value) {
        const node = new Node_1.Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    at(index) {
        if (!this.head) {
            throw new Error("Index out of bounds.");
        }
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error("Index out of bounds.");
    }
    print() {
        if (!this.head) {
            return;
        }
        let list = [];
        let node = this.head;
        while (node) {
            list.push(node.data);
            node = node.next;
        }
        console.log(list);
    }
    get length() {
        if (!this.head) {
            return 0;
        }
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("List is empty");
        }
        return (this.at(leftIndex).data.toLowerCase() >
            this.at(rightIndex).data.toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }
}
exports.CharLinkedList = CharLinkedList;
