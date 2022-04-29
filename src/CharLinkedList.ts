import { Node } from "./Node";
import { Sorter } from "./Sorter";

export class CharLinkedList extends Sorter {
	head: Node<string> | null;
	constructor() {
		super();
		this.head = null;
	}
	add(value: string): void {
		const node = new Node<string>(value);
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
	at(index: number): Node<string> {
		if (!this.head) {
			throw new Error("Index out of bounds.");
		}

		let counter = 0;
		let node: Node<string> | null = this.head;
		while (node) {
			if (counter === index) {
				return node;
			}
			counter++;
			node = node.next;
		}
		throw new Error("Index out of bounds.");
	}
	print(): void {
		if (!this.head) {
			return;
		}
		let list: string[] = [];
		let node: Node<string> | null = this.head;
		while (node) {
			list.push(node.data);
			node = node.next;
		}
		console.log(list);
	}
	get length(): number {
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

	compare(leftIndex: number, rightIndex: number): boolean {
		if (!this.head) {
			throw new Error("List is empty");
		}
		return (
			this.at(leftIndex).data.toLowerCase() >
			this.at(rightIndex).data.toLowerCase()
		);
	}
	swap(leftIndex: number, rightIndex: number): void {
		const leftNode = this.at(leftIndex);
		const rightNode = this.at(rightIndex);

		const leftHand = leftNode.data;
		leftNode.data = rightNode.data;
		rightNode.data = leftHand;
	}
}
