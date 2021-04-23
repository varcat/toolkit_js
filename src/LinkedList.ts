class Node<T> {
  data: T;
  prev?: Node<T>;
  next?: Node<T>;

  constructor(data: T) {
    this.data = data;
  }
}

export class LinkedList {}
