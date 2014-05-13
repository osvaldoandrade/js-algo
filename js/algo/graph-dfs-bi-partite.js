function BiPartiteDFS(G) {
    this.graph = G;
    this.marked = [this.graph.V()];
    this.color = [this.graph.V()];
}

BiPartiteDFS.prototype.isBipartite = function () {
    //Initialize marked and color array with false;
    for (i = 0; i < this.graph.V(); i++)
        this.marked[i] = this.color[i] = false;

    //For each not marked vertex of G, apply dfs with opposite color;
    for (v = 0; v < this.graph.V(); v++)
        if (!this.marked[v])
            return this.dfs(v, !this.color[v]);
};

BiPartiteDFS.prototype.dfs = function (v, color) {
    //Mark node v as visited;
    this.marked[v] = true;

    //For each vertex w in adjacency list of G
    for (w = 0; w < this.graph.adj(v).count(); w++)
    {
        var node = this.graph.adj(v).getAt(w);
        //if not marked, set color and apply recursively dfs with opposite color;
        if (!this.marked[node.value])
        {
            this.color[node.value] = color;
            return this.dfs(node.value, !color);
        }
        //Otherwise, check if color of visiting node is the same as visited node. In this case, must return false;
        else if(this.color[node.value] == this.color[v])
            return false
    }
    return true;
};


