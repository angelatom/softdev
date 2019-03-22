/*
    0-o -- Angela Tom and Simon Tsui
    SoftDev2 pd7
    K15 -- Scattered
    2019-03-22
*/
/*

Salem Accusations by Month of Year

1   0
2	3
3	4
4	22
5	39
6	3
7	12
8	23
9	33
10  1
11  3
12  0


Hyperlink to data: https://www.tulane.edu/~salem/Accusation%20Scatter%20Plot%20Data%20Set.txt

*/
var dataset = [[1,0],[2,3],[3,4],[4,22],[5,39],[6,3],[7,12],[8,23],[9,33],[10,1],[11,2],[12,0]];
var w = 400;
var h = 500;

var svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", function(d) {
    return d[0] * 20;
  })
  .attr("cy", function(d) {
    return h - (d[1] * 10 + 7);
  })
  .attr("r", function(d) {
    return 5;
  })

svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .attr("x", function(d) {
    return d[0] * 20;
  })
  .attr("y", function(d) {
    return h - (d[1] * 10);
  })
  .text(function(d) {
    return d[0] + "," + d[1];
  })
  .attr("font-family", "sans-serif")
  .attr("fill", "red");
  
svg.append("line")
  .attr('x1', 0)
  .attr('y1', h)
  .attr('x2', w)
  .attr('y2', h)
  .attr('stroke', "#000000");

svg.append("line")
  .attr('x1', 0)
  .attr('y1', 0)
  .attr('x2', 0)
  .attr('y2', h)
  .attr('stroke', "#000000");