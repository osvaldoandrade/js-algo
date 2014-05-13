function Kruskal(G) {
    this.graph  = G;

    this.edgeTo = [this.graph.V()];
    this.source = s;

    for(i = 0; i < this.graph.V(); i++) {
        this.marked[i] = false;
        this.edgeTo[i] = null;
    }

    this.bfs(s);
}

Kruskal.prototype.mst = function() {
    var q = new Queue();
    q.enqueue(this.source);
    while(!q.isEmpty()) {
        var v = q.dequeue();
        for (w = 0; w < this.graph.adj(v).count(); w++) {
            var node = this.graph.adj(v).getAt(w);
            if(!this.marked[node.value]) {
                q.enqueue(node.value);
                this.marked[node.value] = true;
                this.edgeTo[node.value] = v;
            }
        }
    }
};

Kruskal.prototype.hasPathTo = function(v) {
    return this.marked[v];
};

Kruskal.prototype.pathTo = function(v) {
    if (!this.hasPathTo(v)) return null;
    var path = [];
    for (x = v; x != this.source; x = this.edgeTo[x])
        path.push(x);
    path.push(this.source);
    return path;
};
