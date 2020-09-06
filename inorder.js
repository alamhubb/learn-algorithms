var inorderTraversal = function (root) {
  const stack = []
  const res = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }

    if (stack.length) {
      root = stack.pop()
      res.push(root.val)
      root = root.right
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
      res.push(root.val)
      if (root.right) {
        recursion1(root.right)
      }
    }
  }

  recursion1(root)
  return res;
}

const obj = {
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
}

console.log(inorderTraversal(obj))
console.log(recursion(obj))
