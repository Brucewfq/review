/**
 * 判断树是否是对称二叉树
 * 1、通过迭代方式
 * 思路：迭代方式主要是要利用队列思想。
 * 首先我们要明白怎样才算是对称二叉树：左节点的左子树和右节点的右子树相等、左节点的右子树和右节点的左子树相等。
 * 明白了判断条件之后，就可以利用队列是进行比较，按照如下顺序往队列里面添加。
 * 开始阶段：把根节点下的左节点、右节点依次添加进队列
 * 利用while循环进行迭代(结束条件为队列为空的情况)，依次从队头取出之前添加的两个节点进行比较，
 * 有三种情况：
 *      两个节点都为null就继续循环
 *      两个节点其中有一个为null可以直接返回false
 *      两个节点不相等也返回false
 * 否则接着按照左节点的左子树、右节点的右子树、左节点的右子树、右节点的左子树这个顺序往队列里面添加元素
 * 进入下一次迭代循环，直至循环结束。
 * 最终返回ture
 * 
 */

// 迭代方式实现
function isSymmetric(root) {
    if (root === null) {return false}

    // 利用数组模拟队列
    const queue = [];
    queue.push(root.left);
    queue.push(root.right);

    while(queue.length > 0) {

        const left = queue.shift();
        const right = queue.shift();

        if (left === null && right === null) {
            continue;
        }

        if (left === null || right === null) {
            return false;
        }

        if (left.val !== right.val) {
            return false;
        }

        //
        queue.push(left.left);
        queue.push(right.right);

        queue.push(left.right);
        queue.push(left.left);
    }
    //
    return true;
}

/**
 * 2、通过递归方式
 * 使用递归的时候一定要搞清楚递归的终止条件，否则会进入死循环
 * 先确定终止条件：1、两个节点都存在但值不相同 2、两个节点其中有一个为null 3、两个节点都为null，说明这一层级已经到头了
 * 递归比对的原则是拿左节点的左子树和右节点的右子树作比较、左节点的右子树和右节点的左子树作比较
 */

function isSymmetric(root) {
    if (root === null) {
        return false;
    }
    //
    return dfs(root.left, root.right);
}

function dfs(left, right) {
    if (left === null && right === null) {
        return true
    }

    if (left === null || right === null) {
        return false
    }

    if (left.val !== right.val) {
        return false
    }

    //
    return dfs(left.left, right.right)&&dfs(left.right, right.left);
}