class LinkedList {
	// The constructor will create a new node and both pointers will point to it
	constructor(value) {
		const newNode = new ListNode(value);
		this.head = newNode;
		this.tail = this.head;
		this.length = 1;
	}

	push(value) {
		const newNode = new ListNode(value);

		// if the linkedList is empty, then head and tail must point to the new node
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			// if the list is not empty
			this.tail.next = value;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	unshift(value) {
		const newNode = LinkedList(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	shift() {
		if (!this.head) return undefined;
		const temp = this.head;
		this.head = this.head.next;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		temp.next = null;
		return temp;
	}

	pop() {
		if (!this.head) return undefined;
		let temp = this.head;
		let prev = this.head;
		while (temp.next) {
			prev = temp;
			temp = temp.next;
		}
		this.tail = prev;
		this.tail.next = null;
		this.length--;

		// if after the decrement length === 0, then both pointers must redirect to null
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return temp;
	}

	get(index) {
		if (index < 0 || index >= this.length) {
			return undefined;
		}
		let temp = this.head;
		for (let i = 0; i < index; i++) {
			temp = temp.next;
		}
		return temp;
	}

	set(index, value) {
		const temp = this.get(index);
		if (temp) {
			temp.value = value;
			return true;
		}
		return false;
	}

	insert(index, value) {
		// if the index is out of the scope
		if (index < 0 || index > this.length) return false;
		// if the index is at the end of the list
		if (index === this.length) return this.push(value);
		// if the index is at the beginning of the list
		if (index === 0) return this.unshift(value);
		const newNode = new ListNode(value);
		//This move allow us to position the pointer one step back
		const temp = this.get(index - 1);
		newNode.next = temp.next;
		temp.next = newNode;
		this.length++;
		return true;
	}

	remove(index) {
		// if the index is out of the scope
		if (index < 0 || index > this.length) return false;
		// if the index is at the end of the list
		if (index === this.length) return this.push(value);
		// if the index is at the beginning of the list
		if (index === 0) return this.unshift(value);

		const before = this.get(index - 1);
		const temp = before.next;

		before.next = temp.next;
		temp.next = null;
		this.length--;
		return temp;
	}

	reverse() {
		//Switching pointers
		let temp = this.head;
		this.head = this.tail;
		this.tail = temp;

		let next = temp.next;
		let prev = null;

		for (let i = 0; i < this.length; i++) {
			next = temp.next;
			temp.next = prev;
			prev = temp;
			temp = next;
		}
		return this;
	}
}
