//Given a non bipartite graph
var g1 = new Graph(5).addEdgeBuilder(0,1).addEdgeBuilder(1,2).addEdgeBuilder(2,3).addEdgeBuilder(3,4).addEdgeBuilder(4,0);
var bi = new BiPartiteDFS(g1);

//Must return false
assert(bi.isBipartite(), false);

