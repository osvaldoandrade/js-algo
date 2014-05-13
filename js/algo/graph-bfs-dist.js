function BredthFirstSearchDistance(G) {
    this.graph  = G;
    this.marked = [this.graph.V()];
    this.edgeTo = [this.graph.V()];
    this.distTo = [this.graph.V()];

    for(i = 0; i < this.graph.V(); i++) {
        this.marked[i] = false;
        this.edgeTo[i] = null;
        this.distTo[i] = 0;
    }

    for(i = 0; i< this.graph.V(); i++)
        if (!this.marked[i])
            this.bfs(i);
}

BredthFirstSearchDistance.prototype.bfs = function(s) {
    var distance = 0;
    var q = new Queue();

    q.enqueue(s);
    this.distTo[s] = distance;
    this.marked[s] = true;

    while(!q.isEmpty()) {
        var v = q.dequeue();
        distance = this.distTo[v];

        //For each vertex w in adjacency list of v
        for (w = 0; w < this.graph.adj(v).count(); w++) {
            var node = this.graph.adj(v).getAt(w);
            if(!this.marked[node.value]) {
                q.enqueue(node.value);
                this.marked[node.value] = true;
                this.edgeTo[node.value] = v;
                this.distTo[node.value] = distance + 1;
            }
        }
    }
};

