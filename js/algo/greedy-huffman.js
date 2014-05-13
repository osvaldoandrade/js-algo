function Node() {
    this.parent = null;
    this.left  = null;
    this.right = null;
    this.frequency = 0;
    this.distance = 0;
}

function Huffman(C) {
    this.n = C.length;
    //Todo: What about using a Fibonacci heap?
    var q = new BinaryHeap(null, "frequency");

    for (var i = 0; i< this.n; i++) {
        var node = new Node();
        node.frequency = C[i].frequency;
        q.insert(node);
    }

    for (var i = 1; i < this.n; i++) {
        var node = new Node();
        var x = q.extractMin();
        var y = q.extractMin();

        if (x) {
            node.left = x;
            node.frequency += x.frequency;
        }
        if(y) {
            node.right = y;
            node.frequency += y.frequency;
        }
        q.insert(node);
    }
    this.root =  q.extractMin();
}

Huffman.prototype.count = function() {
    this.calculateDistances();

    var node = this.root;
    var stack = [];
    var length = 0;

    while (stack.length != 0 || node != null) {
        if(node != null) {
            stack.push(node);
            node = node.left;
        }else {
            node = stack.pop();
            if (node.left == null && node.right == null) {
                length += node.frequency * node.distance;
            }
            node = node.right;
        }
    }

    return length;
}

//Calculate distances from each node applying bredth first traverse at the huffman code tree.
Huffman.prototype.calculateDistances = function() {
    var queue = new Queue();
    queue.enqueue(this.root);

    while (!queue.isEmpty()) {
        var node = queue.dequeue();

        if (node.left != null) {
            node.left.distance = node.distance + 1;
            queue.enqueue(node.left);
        }

        if (node.right != null) {
            node.right.distance = node.distance + 1;
            queue.enqueue(node.right);
        }
    }
}