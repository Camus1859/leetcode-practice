// 24. Swap Nodes in Pairs
// https://leetcode.com/problems/swap-nodes-in-pairs/

import { ListNode } from "../ListNode";

function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null) return head;
  if (head.next === null) return head;

  const dummyNode = new ListNode(0);
  dummyNode.next = head;

  let prev = dummyNode; // NEW: This tracks who connects to each swapped pair

  while (prev.next !== null && prev.next.next !== null) {
    // Identify the pair relative to prev
    let nodeOne = prev.next;
    let nodeTwo = prev.next.next;
    let restOfNodes = nodeTwo.next;

    // Do the swap
    nodeTwo.next = nodeOne;
    nodeOne.next = restOfNodes;
    prev.next = nodeTwo; 

    // Move prev forward for next iteration
    prev = nodeOne; // nodeOne is now in position 2 after swap
  }

  return dummyNode.next;
}

// Test case
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
console.log(swapPairs(head)); // Expected: [2,1,4,3]
