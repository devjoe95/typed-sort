"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharsCollection = void 0;
class CharsCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split("");
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this.data = characters.join("");
    }
}
exports.CharsCollection = CharsCollection;
