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
  .attr("width", w + 50)
  .attr("height", h + 50);

svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", function(d) {
    return d[0] * 20 + 50;
  })
  .attr("cy", function(d) {
    return h - (d[1] * 10 + 50);
  })
  .attr("r", function(d) {
    return 5;
  })

svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .attr("x", function(d) {
    return d[0] * 20 + 50;
  })
  .attr("y", function(d) {
    return h - (d[1] * 10 + 50);
  })
  .text(function(d) {
    return d[0] + "," + d[1];
  })
  .attr("font-family", "sans-serif")
  .attr("fill", "red");
  
svg.append("line")
  .attr('x1', 50)
  .attr('y1', h)
  .attr('x2', w + 50)
  .attr('y2', h)
  .attr('stroke', "#000000");

svg.append("line")
  .attr('x1', 50)
  .attr('y1', 50)
  .attr('x2', 50)
  .attr('y2', h)
  .attr('stroke', "#000000");

svg.append('text') 
  .attr('x', 250)
  .attr('y', 25)
  .attr('text-anchor','middle')
  .style('font-size', '20px')
  .text("Salem Accusations");

svg.append('text') 
    .attr('x', 250)
    .attr('y', h - 25)
    .attr('text-anchor','middle')
    .style('font-size', '14px')
    .text("Months");

svg.append('text') 
    .attr('transform', "rotate(-90)")
    .attr('x', -250)
    .attr('y', 50)
    .attr('text-anchor','middle')
    .style('font-size', '14px')
    .text("Accusations");