class DoublyListNode {
  constructor(val) {
    this.val = val;
    this.next = this.prev = null;
  }
}

function createDoublyLinkedList(arr) {
  if (arr == null || arr.length == 0) {
    return null;
  }
  //
  const head = new DoublyListNode(arr[0]);
  let cur = head;

  for (let i = 1; i < arr.length; i++) {
    const newNode = new DoublyListNode(arr[i]);
    cur.next = newNode;
    newNode.prev = cur;
    cur = cur.next;
  }
  //
  return head;
}
// 创建一条双链表
const head = createDoublyLinkedList([1,2,3,4,5]);
console.dir(head, { depth: null })
// 遍历双链表： 从头开始遍历
let tail = head;
while(tail.next != null){
  console.log(tail.val);
  tail = tail.next;
}
console.log(tail.val);
// 从尾部开始遍历
while(tail != null) {
  console.log(tail.val);
  tail = tail.prev;
}
// 在双链表头部插入元素
let head1 = createDoublyLinkedList([1,2,3,4,5]);
const newNode1 = new DoublyListNode(0);
head1.prev = newNode1;
newNode1.next = head1;
head1= newNode1;
console.dir(head1, { depth: null })
// 在双链表尾部插入元素
let head2 = createDoublyLinkedList([1,2,3,4,5]);
let tail2 = head2;
while(tail2.next != null) {
  tail2 = tail2.next;
}
const newNode2 = new DoublyListNode(6);
tail2.next = newNode2;
newNode2.prev = tail2;
console.dir(head2, { depth: null })
// 在双链表中间插入元素：在3后面插入66；
let head3 = createDoublyLinkedList([1,2,3,4,5]);
let cur = head3;
// 先找到3这个节点
for (let i = 0 ; i < 2; i++) {
  cur = cur.next;
}

// 组装新节点
const newNode3 = new DoublyListNode(66);
newNode3.next = cur.next;
newNode3.prev = cur;
// 插入新节点
cur.next.prev = newNode3;
cur.next = newNode3;
console.log('head3')
console.dir(head3, { depth: null });
// 在双链表中删除一个元素：3
let head4 = createDoublyLinkedList([1,2,3,4,5]);
// 找到3这个节点
let cur4 = head4;
for (let i = 0; i < 2; i++) {
  cur4 = cur4.next;
}
// 修改3节点前驱和后驱节点的指针
cur4.next.prev = cur4.prev;
cur4.prev.next = cur4.next;
console.dir(head4, { depth: null });

// 删除双链表的头部元素
let head5 = createDoublyLinkedList([1,2,3,4,5]);
let cur5 = head5;
cur5.next.prev = null;
head5 = cur5.next;
console.dir(head5, { depth: null });
// 删除双链表的尾部元素
let head6 = createDoublyLinkedList([1,2,3,4,5]);
let cur6 = head6;

while(cur6.next!= null) {
  cur6 = cur6.next;
}
// 现在cur6是尾部节点；
cur6.prev.next = null;
// 尾部节点和它的前驱节点断开联系
cur6.prev = null;
console.dir(head6, { depth: null });

/**
 * 实现双链表代码封装
 * 增加虚拟头尾节点
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = this.prev = null;
  }
}

class MyDoublyLinkedList {
  constructor() {
    this.head = new Node(null);
    this.tail = new Node(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    //
    this.size = 0;
  }

  // 尾部添加元素
  addLast(val) {
    const newNode = new Node(val);
    const temp = this.tail.prev;
    // 组装新节点
    newNode.prev = temp;
    newNode.next = this.tail;
    //插入新节点
    temp.next = newNode;
    this.tail.prev = newNode;
    this.size++;
  }
  // 头部添加元素
  addFirst(val) {
    const newNode = new Node(val);
    const temp = this.head.next;
    // 组装新节点
    newNode.next = temp;
    newNode.prev = this.head;

    // 插入新节点
    this.head.next = newNode;
    temp.prev = newNode;
    //
    this.size++;
  }

  // 根据索引添加元素
  add(index, val) {
    // 边界条件,检查该位置是否可以添加元素
    this.checkPositionIndex(index);
    // 如果index在最后的位置，则直接调用addLast添加
    if (index == this.size) {
      this.addLast(val);
      return;
    }
    // 根据index获取到当前节点
    let curNode = this.getNode(index);
    let temp = curNode.prev;
    // 组装新节点
    let newNode = new Node(val);
    newNode.next = curNode;
    newNode.prev = temp;
    // 插入新节点
    temp.next = newNode;
    curNode.prev = newNode;
    //
    this.size++;
  }

  // 删除尾部元素
  removeLast() {
    if(this.size < 1) {
      throw new Error('No elements remove');
    }
    const lastNode = this.tail.prev;
    if (lastNode == this.head) {
      return;
    }
    lastNode.prev.next = this.tail;
    this.tail.prev = lastNode.prev;

    lastNode.prev = lastNode.next = null;
    this.size--;
  }

  // 删除头部元素
  removeFirst() {
    if(this.size < 1) {
      throw new Error('No elements remove');
    }
    const firstNode = this.head.next;
    if (firstNode == this.tail) {
      return;
    }
    //
    this.head.next = firstNode.next;
    firstNode.next.prev = this.head;

    firstNode.prev= firstNode.next = null;

    this.size--;
  }

  remove(index) {
    this.checkoutElementIndex(index);

    if (index == this.size - 1) {
      this.removeLast();
      return 
    }

    if (index == 0) {
      this.removeFirst();
      return 
    }
    //
    const curNode = this.getNode(index);
    const temp = curNode.prev;

    temp.next = curNode.next;
    curNode.next.prev = temp;
    //
    this.size--;
  }

  //
  get(index) {
    this.checkoutElementIndex(index);
    const curNode = this.getNode(index);
    return curNode.val;
  }

  getLast() {
    if (this.size < 1) {
      throw new Error('No elements')
    }
    return this.tail.prev.val;
  }

  getFirst() {
    if (this.size < 1) {
      throw new Error('No elements')
    }
    return this.head.next.val;
  }

  // 工具函数
  isPostionIndex(index) {
    return index >=0 && index <= this.size;
  }
  isElementIndex(index) {
    return index >=0 && index < this.size;
  }
  checkPositionIndex(index) {
   if (!this.isPostionIndex(index)) {
    throw new Error(`Index: ${index}, Size: ${this.size}`)
   }
  }
  checkoutElementIndex(index) {
    if (!this.isElementIndex(index)) {
      throw new Error(`Index: ${index}, Size: ${this.size}`)
     }
  }
  getNode(index) {
    this.checkoutElementIndex(index);
    let curNode = this.head.next;
    for (let i = 0; i < index; i++) {
      curNode =curNode.next;
    }
    //
    return curNode;
  }
}

const myDoublyLinkedList = new MyDoublyLinkedList();
myDoublyLinkedList.addLast(1);
myDoublyLinkedList.addLast(2);
myDoublyLinkedList.addFirst(0);
myDoublyLinkedList.add(1, 3);
//myDoublyLinkedList.removeLast();
//myDoublyLinkedList.removeFirst();
myDoublyLinkedList.remove(2);

console.log(myDoublyLinkedList, {depth: null});