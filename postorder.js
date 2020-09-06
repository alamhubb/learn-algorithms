var postorderTraversal = function (root) {
  const stack = [root]
  const res = []
  while (stack.length) {
    root = stack.pop()
    res.unshift(root.val)
    if (root.left) {
      stack.push(root.left)
    }
    if (root.right) {
      stack.push(root.right)
    }
  }
  return res
};

function recursion(root) {
  const res = []

  function recursion1(root) {
    if (root) {
      if (root.left) {
        recursion1(root.left)
      }
      if (root.right) {
        recursion1(root.right)
      }
      res.push(root.val)
    }
  }

  recursion1(root)
  return res;
}

const obj = {
  val: 1,
  right: {
    val: 2,
    left: {
      val: 3
    }
  }
}

/*const obj = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      right: {
        val: 7
      }
    },
    right: {
      val: 5
    }
  },
  right: {
    val: 3,
    right: {
      val: 6
    }
  }
}*/

console.log(postorderTraversal(obj))
console.log(recursion(obj))
