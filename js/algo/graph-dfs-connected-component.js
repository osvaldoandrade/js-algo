function DepthFirstSearchCC(G) {
    this.graph  = G;
    this.marked = [this.graph.V()];
    this.ids = [this.graph.V()];
    this.count = 0;

    for(i = 0; i < this.graph.V(); i++) {
        this.marked[i] = false;
        this.ids[i] = null;
    }

    for (v = 0; v < this.graph.V(); v++)
    {
        if(!this.marked[v])
        {
            this.dfs(v);
            this.count ++;
        }
    }
};

DepthFirstSearchCC.prototype.dfs = function(v) {
    this.marked[v] = true;
    for (w = 0; w < this.graph.adj(v).count(); w++) {
        var node = this.graph.adj(v).getAt(w);
        if(!this.marked[node.value])
        {
            this.dfs(node.value);
            this.ids[node.value] = this.count;
        }
    }
};

DepthFirstSearchCC.prototype.isConnected = function(v, w) {
    if (v < this.graph.V() && w < this.graph.V())
        return this.ids[v] == this.ids[w];
    return undefined;
};

