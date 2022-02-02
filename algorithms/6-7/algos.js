// 234. Palindrome Linked List
// https://leetcode.com/problems/palindrome-linked-list/
// O(n) O(1)

var isPalindrome = function(head) {
  let fastPointer = head;
  let slowPointer = head;
  
  while(fastPointer && fastPointer.next){
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }
  
  slowPointer = reversed(slowPointer);
  fastPointer = head;
  
  while(slowPointer){
    if(fastPointer.val !== slowPointer.val) return false
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
  }
  
  return true
};

var reversed = function(head){
  let prev = null;
  
  while(head){
    let next = head.next
    head.next = prev
    prev = head;
    head = next
  }
  
  return prev;
}

// https://leetcode.com/problems/middle-of-the-linked-list/
// 160. Intersection of Two Linked Lists
// 
var getIntersectionNode = function(headA, headB) {
  if(!headA || !headB) return null;
  
  let currA = headA;
  let currB = headB;
  
  while(currA !== currB){
    if(!currA){
      currA = headB
    } else {
      currA = currA.next
    }
    
    if(!currB){
      currB = headA
    } else {
      currB = currB.next
    }
  }
  
  return currA
};

// 876. Middle of the Linked List
// https://leetcode.com/problems/middle-of-the-linked-list/

var middleNode = function(head) {
  let fastPointer = head;
  let slowPointer = head;
  
  while(fastPointer && fastPointer.next){
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  
  return slowPointer
};

// https://leetcode.com/problems/reverse-linked-list/
// 206. Reverse Linked List

var reverseList = function(head, prev = null) {
  
  while(head){
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  
  return prev;
};

// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/

var hasCycle = function(head) {
  if(!head) return false;
  
  let slow = head;
  let fast = head.next;
  
  while(slow !== fast){
    if(!fast || !fast.next) return false; 
    slow = slow.next;
    fast = fast.next.next;
    
  }
  
  return true;
};

// 237. Delete Node in a Linked List
// https://leetcode.com/problems/delete-node-in-a-linked-list/

var deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
};

// 1290. Convert Binary Number in a Linked List to Integer
// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

var getDecimalValue = function(head) {
  let binaryStr = '';
  
  while(head){
    binaryStr += head.val;
    head = head.next;
  }
  
  let result = parseInt(binaryStr, 2)

  return result
};

// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/

var mergeTwoLists = function(l1, l2) {
  if(!l1) return l2;
  if(!l2) return l1;
  
  if(l1.val < l2.val){
    l1.next = mergeTwoLists(l1.next, l2)
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2;
  }
}

// https://leetcode.com/problems/remove-linked-list-elements/submissions/
// 203. Remove Linked List Elements

var removeElements = function(head, val) {
    if (!head) return head;
	
    while(head) {
        if(head.val === val) {
            head = head.next;
        } else {
            break;
        }
    }
    
    let curr = head;
    while(curr && curr.next) {
        if (curr.next.val === val) curr.next = curr.next.next;
        else curr = curr.next;
    }
    
    return head;
};