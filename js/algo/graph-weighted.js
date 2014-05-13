function WeightedGraph(V) {
    this.vertices = [V];
    this.mst = new Queue();

    for (i = 0; i < V; i++)
        this.vertices[i] = new LinkedList();
}

WeightedGraph.prototype.addEdge = function (edge) {
    var reverse_edge = {
        from:edge.to,
        to:edge.from,
        weight: edge.weight
    };

    if (edge && edge.from < this.V() && edge.to < this.V()) {
        this.adj(edge.from).add(edge);
        this.adj(edge.to).add(reverse_edge);
    }
};

WeightedGraph.prototype.newEdge = function (from, to, weight) {
    var edge = {
        from: from,
        to: to,
        weight: weight
    };

   return edge;
};

WeightedGraph.prototype.adj = function (v) {
    if (v < this.vertices.length)
        return this.vertices[v];
    return null;
};

WeightedGraph.prototype.V = function () {
    return this.vertices.length;
};

WeightedGraph.prototype.E = function () {
    var edges = 0;
    for (i = 0; i < this.vertices.length; i++)
        edges += this.adj(i).count();

    return edges;
};

WeightedGraph.prototype.degree = function (v) {
    if (v < this.V())
        return this.adj(v).count();
    return null;
};

WeightedGraph.prototype.maxDegree = function () {
    var max = 0;
    for (v = 0; v < this.V(); v++) {
        if (this.degree(v) > max)
            max = this.degree(v);
    }
    return max;
};

WeightedGraph.prototype.avgDegree = function () {
    return 2.0 * this.E() / this.V();
};

WeightedGraph.prototype.selfLoops = function () {
    var count = 0;
    for (v = 0; v < this.V(); v++)
        if (this.adj(v).containsValue(v)) count++;
    return count;
};





