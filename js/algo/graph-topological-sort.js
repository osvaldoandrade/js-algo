function TopologicalSort(G) {
    this.graph  = G;
    this.marked = [this.graph.V()];
    this.reversePost = [];

    for(i = 0; i < this.graph.V(); i++)
        this.marked[i] = false;

    for (v = 0; v < this.graph.V(); v++)
        if (!this.marked[v]) this.dfs(v);
}

TopologicalSort.prototype.dfs = function(v) {
    //mark vertex v as visited
    this.marked[v] = true;

    //for each vertex w in adjacency list of v
    for (w = 0; w < this.graph.adj(v).count(); w++) {
        var node = this.graph.adj(v).getAt(w);
        //if node is not visited, apply dfs recursively
        if(!this.marked[node.value]) this.dfs(node.value);
    }
    //at this point there is no more vertex to be visited, put vertex v on the stack.
    this.reversePost.push(v);
};

