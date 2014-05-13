function DepthFirstSearch(G, s) {
    this.graph  = G;
    this.marked = [this.graph.V()];
    this.edgeTo = [this.graph.V()];
    this.source = s;
    for(i = 0; i < this.graph.V(); i++) {
        this.marked[i] = false;
        this.edgeTo[i] = null;
    }

    this.dfs(s);
}

DepthFirstSearch.prototype.dfs = function(v) {
    this.marked[v] = true;
    for (w = 0; w < this.graph.adj(v).count(); w++) {
        var node = this.graph.adj(v).getAt(w);
        if(!this.marked[node.value])
        {
            console.log(node.value);
            this.dfs(node.value);
            this.edgeTo[node.value] = v;
        }
    }
};

DepthFirstSearch.prototype.hasPathTo = function(v) {
    return this.marked[v];
};

DepthFirstSearch.prototype.pathTo = function(v) {
    if (!this.hasPathTo(v)) return null;
    var path = [];
    for (x = v; x != this.source; x = this.edgeTo[x])
        path.push(x);
    path.push(this.source);
    return path;
};
