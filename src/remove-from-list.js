const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  const array = listToArray(l);
  const filteredArray = array.filter((x) => x !== k);

  return arrayToList(filteredArray);
}

function listToArray(list) {
  const array = [];

  if (!list) return array;

  let listItem = list;

  while (listItem.next) {
    array.push(listItem.value);

    listItem = listItem.next;
  }

  array.push(listItem.value);

  return array;
}

function arrayToList(array) {
  return array
    .map((x) => new ListNode(x))
    .reduceRight((result, x) => {
      if (!result) return x;

      x.next = result;

      return x;
    }, null);
  // remove line with error and write your code here
}

module.exports = {
  removeKFromList
};
