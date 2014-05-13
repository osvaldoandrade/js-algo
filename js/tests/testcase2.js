var g = new Graph(5);
g.addEdge(0,1);g.addEdge(1,2);g.addEdge(2,3);g.addEdge(3,4);g.addEdge(4,0);

var bfs = new BredthFirstSearch(g,1);
bfs.pathTo(4);
