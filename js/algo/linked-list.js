function LinkedList() {
    this.head = null;
    this.tail = null;
    this.size = 0;
}

//Insert element in contant time O(1)
LinkedList.prototype.add = function(value) {
    var node = {
        value: value,
        next: null
    };

    this.size++;
    //List is empty, make head = tail = node O(1)
    if(this.head==null)
        return this.head = this.tail = node;

    //Otherwise, Make node to be the next element of tail and re-make tail O(1)
    this.tail.next = node;
    return this.tail = node
};

//Given a node element, remove it from the list in linear time O(n).
LinkedList.prototype.remove = function(node) {

    if(this.head !== null) {
        if(this.head === node) {
            this.size--;
            this.head = this.head.next;
            this.tail = (node === this.tail)?this.head:this.tail;
            return node.value;
        }

        var current = this.head;
        while(current.next) {
            if(current.next === node) {
                this.size--;
                current.next = node.next;
                this.tail = (node === this.tail)?current.next:this.tail;
                return node.value;
            }
            current = current.next;
        }
    }
    return null;
};

LinkedList.prototype.containsValue = function(value) {
    if(this.head != null) {

        if(this.head.value == value)
            return true;

        var current = this.head;
        while(current.next) {
            current = current.next;
            if (current.value == value)
                return true;
        }
    }

    return false;
};

LinkedList.prototype.contains = function(node) {
    if(this.head != null) {

        if(this.head === node)
            return true;

        var current = this.head;
        while(current.next) {
            current = current.next;
            if (current === node)
                return true;
        }
    }

    return false;
};

LinkedList.prototype.getAt = function(index) {
    if(this.head !== null && this.size > index) {
        var node = this.head;
        for(var i=0;i<index;i++)
            node = node.next;
        return node;
    }
    return null;
};

LinkedList.prototype.count = function()
{return this.size;};