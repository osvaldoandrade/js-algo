function QuickFind(N) {
    this.id = [N];
    for (i=0; i<N; i++)
        this.id[i] = i;
}

QuickFind.prototype.root = function(p) {
    while(this.id[p] != p)
        p = this.id[p];
    return p;
};

QuickFind.prototype.connected = function(p, q) {
    return this.id[p] == this.id[q];
};

QuickFind.prototype.union = function(p, q) {
    var pid = this.id[p];
    for(i=0; i< this.id.length; i++)
        if(this.id[i] == pid) this.id[i] = this.id[q];
};
