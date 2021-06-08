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

