require("./style.scss");
import * as d3 from "d3";

d3
  .select("#canvas")
  .append("text")
  .attr("x", 100)
  .attr("y", 100)
  .text("Hello, world!");
