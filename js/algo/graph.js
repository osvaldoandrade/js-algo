//Given the number of vertices V, create a graph. O(V)
function Graph(V) {
    this.vertices = [V];
    for (i = 0; i < V; i++)
        this.vertices[i] = new LinkedList();
}

Graph.prototype.addEdgeBuilder = function (v, w) {
    this.addEdge(v,w);
    return this;
}
//Given vertex v and w, add a new edge from v to w. O(1)
Graph.prototype.addEdge = function (v, w) {
    if (v < this.V() && w < this.V()) {
        this.adj(v).add(w);
        this.adj(w).add(v);
    }
};

//Given a vertex v, returns its adjacency list. O(1)
Graph.prototype.adj = function (v) {
    if (v < this.vertices.length)
        return this.vertices[v];
    return null;
};

//Returns the number of vertices. O(1)
Graph.prototype.V = function ()
{return this.vertices.length;};

//Returns the number of edges. O(V)
Graph.prototype.E = function () {
    var edges = 0;
    for (i = 0; i < this.vertices.length; i++)
        edges += this.adj(i).count();

    return edges;
};

//Given a vertex v calculates its degree. O(1)
Graph.prototype.degree = function (v) {
    if (v < this.V())
        return this.adj(v).count();
    return null;
};

//Returns the maximum degree of this Graph. O(V)
Graph.prototype.maxDegree = function () {
    var max = 0;
    for (v = 0; v < this.V(); v++)
        if (this.degree(v) > max)
            max = this.degree(v);

    return max;
};

Graph.prototype.avgDegree = function()
{return 2.0 * this.E() / this.V();};

Graph.prototype.selfLoops = function() {
    var count = 0;
    for (v = 0; v < this.V(); v++)
        if(this.adj(v).containsValue(v)) count++;
    return count;
};







