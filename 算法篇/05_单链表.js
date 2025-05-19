function ListNode(val) {
  this.val = val;
  this.next = null;
}

const createLinkedList = function(arr){
  if (arr == null || arr.length == 0) {
    return null;
  }
  //
  const head = new ListNode(arr[0]);
  let cur = head;

  for (let  i = 1 ; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }
  //
  return head;
}

// 创建一条单链表
const head= createLinkedList([1,2,3,4,5,6,7,8,9,10]);
// 遍历单链表
for (let i = head; i!= null; i = i.next) {
  console.log(i, i.val);
}
// 在单链表头部插入元素
let head1 = createLinkedList([1,2,3,4,5]);
const newHead1 = createLinkedList([0]);
newHead1.next = head1;
head1 = newHead1;
console.log(JSON.stringify(head1));
// 在单链表尾部插入元素
let head2 = createLinkedList([1,2,3,4,5]);
// 先找到尾部节点
let p = head2;
while(p.next != null) {
  p = p.next;
}
// 代码运行到此处时。p已经是尾部节点
p.next = new ListNode(6);

console.log(JSON.stringify(head2));

// 在单链表中间插入元素，在4后面插入66
let head3 = createLinkedList([1,2,3,4,5]);
let p3 = head3;

// 先获取到4这个节点
for (let i = 0; i < 3;i++) {
  p3 = p3.next;
}
const newNode3 = new ListNode(66);
newNode3.next = p3.next;
p3.next = newNode3;
console.log(JSON.stringify(head3));

// 删除单链表中的头部元素
let head4 = createLinkedList([1,2,3,4,5]);
head4 = head4.next;
console.log(JSON.stringify(head4));
// 删除单链表中的尾部元素
let head5 = createLinkedList([1,2,3,4,5]);
let p5 = head5;
// 找到倒数第二个节点
while(p5.next.next != null) {
  p5 = p5.next;
}
p5.next = null;
console.log(JSON.stringify(head5));

// 删除单链表中的元素4；
let head6 = createLinkedList([1,2,3,4,5]);
//先找到4的前驱节点3；
let p6 = head6;
for (let i = 0; i < 2;i++) {
  p6 = p6.next;
}
//找到之后把前驱节点的next指向要删除的节点的下一个节点
p6.next = p6.next.next;
console.log(JSON.stringify(head6));
