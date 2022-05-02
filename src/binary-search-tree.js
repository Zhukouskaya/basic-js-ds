const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
// class BinarySearchTree {
//   root() {
//     this.root;
//   }

//   add(data) {
//     this.root = addInTree(this.root, data);

//     function addInTree(node, data) {
//       if (!node) {
//         return new Node(data);
//       }

//       if (node.data === data) {
//         return node;
//       }

//       if (data < node.data) {
//         node.left = addInTree(node.left, data);
//       } else {
//         node.right = addInTree(node.right, data);
//       }

//       return node;
//     }
//   }

//   has(data) {
//     return hasInTree(this.root, data);
//     function hasInTree(node, data) {
//       if (!node) {
//         return false;
//       }
//       if (node.data === data) {
//         return true;
//       } else {
//         return data < node.data ? 
//         hasInTree(node.left, data) : 
//         hasInTree(node.right, data);
//       }
      
//     }
//   }

//   find(data) {
//     return hasInTree(this.root, data);
//     function hasInTree(node, data) {
//       if (!node) {
//         return false;
//       }
//       if (node.data === data) {
//         return true;
//       }
//       return data < node.data ? 
//         hasInTree(node.left, data) : 
//         hasInTree(node.right, data);
//     }

//   }

//   remove(data) {
//     this.root = removeNode(this.root, data);
//     function removeNode(node, data) {
//       if (!node) {
//         return null;
//       }

//       if (data < node.data) {
//         node.left = removeNode(node.left, data);
//         return node;
//       } else if (node.data < data) {
//         node.right = removeNode(node.right, data);
//         return node;
//       } else {
//         if (!node.left && !node.right) {
//           return null;
//         }

//         if (!node.left) {
//           node = node.right;
//           return node;
//         }

//         if (!node.right) {
//           node = node.left;
//           return node;
//         }
//         let minFromRight = node.right;
//         while (minFromRight.left) {
//           minFromRight = minFromRight.left;
//         }
//         node.data = minFromRight.data;
//         node.right = removeNode(node.right, minFromRight.data);
//         return node;
//       }
//     }
//   }

//   min() {
//     if (!this.root) {
//       return null;
//     }

//     let node = this.root;
//     while (node.left) {
//       node = node.left;
//     }

//     return node.data;
//   }

//   max() {
//     if (!this.root) {
//       return;
//     }

//     let node = this.root;
//     while (node.right) {
//       node = node.right;
//     }

//     return node.data;
//   }

//   leftTraverse(cb) {
//     doLeft(this.root, cb);

//     function doLeft(node, cb) {
//       if (node) {
//         doLeft(node.left, cb);
//         cb(node.data);
//         doLeft(node.right, cb);          
//       }
//     }
//   }

//   rightTraverse(cb) {
//     doRight(this.root, cb);

//     function doRight(node, cb) {
//       if (node) {
//         doRight(node.right, cb);
//         cb(node.data);
//         doRight(node.left, cb);
//       }
//     }
//   }
// }

// function addItems() {
//   console.log('\n  Add Items');
//   console.log('add 13, 15, 9, 20, 18, 32, 25');

//   tree.add(13);
//   tree.add(15);
//   tree.add(9);
//   tree.add(20);
//   tree.add(18);
//   tree.add(32);
//   tree.add(25);


//   //  Should get something like this:
//   //    13
//   //   /  \
//   //  9    15
//   //        \
//   //         20
//   //        /  \
//   //       18   32
//   //           /
//   //          25
// }

// function getItems() {
//   console.log('\n  Get Items');

//   console.log('has 10', tree.has(10));
//   console.log('has 15', tree.has(15));
//   console.log('\n', tree);

//   console.log('  Left Traverse:');
//   tree.leftTraverse((val) => console.log(val));

//   console.log('  Right Traverse:');
//   tree.rightTraverse((val) => console.log(val)); 

//   console.log('min:', tree.min());
//   console.log('max:', tree.max());
// }

// function removeItem() {
//   console.log('  Remove Item');

//   tree.remove(15);
//   console.log('remove 15');
//   console.log(tree);

//   console.log('  Left Traverse:');
//   tree.leftTraverse((val) => console.log(val));
// }


// const tree = new BinarySearchTree();

// addItems();
// getItems();
// removeItem();  

class BinarySearchTree {
  tree = [];

  root() {
    return this.tree.length ? { data: this.tree[0] } : null;
  }

  add(data) {
    this.tree.push(data);
  }

  has(data) {
    return this.tree.includes(data);
  }

  find(data) {
    const item = this.tree.find((x) => x === data);

    return item ? { data: item } : null;
  }

  remove(data) {
    this.tree = this.tree.filter((x) => x !== data);
  }

  min() {
    return Math.min(...this.tree);
  }

  max() {
    return Math.max(...this.tree);
  }
}

module.exports = {
  BinarySearchTree
};