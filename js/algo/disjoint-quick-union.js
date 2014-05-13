function QuickUnion(N) {
    this.id = [N];
    this.sz = [N];
    for (i=0; i<N; i++){
        this.id[i] = i;
        this.sz[i] = i;
    }
}

QuickUnion.prototype.root = function(p) {
    while(this.id[p] != p)
        p = this.id[p];
    return p;
};

QuickUnion.prototype.connected = function(id1, id2) {
    return this.root(id1) == this.root(id2);
};

QuickUnion.prototype.union = function(p, q) {
    var i = this.root(p);
    var j = this.root(q);
    if (this.sz[i] < this.sz[j]) {
        this.id[i] = j;
        this.sz[j] += this.sz[i];
    } else {
        this.id[j] = i;
        this.sz[i] += this.sz[j];
    }
};
