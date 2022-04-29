export class Node <T>{
	next: Node<T> | null;
	constructor(public data: T) {
		this.next = null;
	}
}
