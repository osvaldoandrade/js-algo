function BinarySearchTree() {
    this.root = null;
    this.size = 0;
}

//Insert element in binary search tree
BinarySearchTree.prototype.add = function(key, value) {
    var node = {
        key: key,
        value: value,
        parent:null,
        left: null,
        right:null
    };
    this.size ++;
    var current = this.root;
    var last = null;
    while (current) {
        last = current;
        node.parent = last;
        if (node.key < current.key) current = current.left;
        else current = current.right;
    }

    if(!last) return this.root = node;

    if (node.key < last.key) return last.left = node;
    else return last.right = node;
};



BinarySearchTree.prototype.count = function()
{return this.size;};