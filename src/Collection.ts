export interface Collection {
	data: number[] | string;
	get length(): number;
	compare(leftIndex: number, rightIndex: number): boolean;
	swap(leftIndex: number, rightIndex: number): void;
}
