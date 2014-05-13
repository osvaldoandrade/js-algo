/*
Source:
 */
function Queue() {
    this.queue = [];
    this.offset = 0;
}

Queue.prototype.getLength = function ()
{return (this.queue.length - this.offset);};

Queue.prototype.isEmpty = function ()
{return (this.queue.length == 0);};

Queue.prototype.enqueue = function (item)
{this.queue.push(item);};

Queue.prototype.peek = function ()
{return (this.queue.length > 0 ? this.queue[this.offset] : undefined);};

Queue.prototype.dequeue = function () {

    if (this.queue.length == 0) return undefined;

    var item = this.queue[this.offset];

    if (++this.offset * 2 >= this.queue.length) {
        this.queue = this.queue.slice(this.offset);
        this.offset = 0;
    }
    return item;
};



