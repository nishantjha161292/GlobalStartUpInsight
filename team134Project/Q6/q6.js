

var width = 1000,
    height = 860;



var svg = d3.select("#map").append("svg")
    .attr("width", width)
    .attr("height", height);


var path = d3.geoPath();


var x = d3.scaleLinear()
   
    .rangeRound([600, 860]);

var color = d3.scaleThreshold()
    .domain(d3.range(2, 20))
    .range(d3.schemeGreens[9]);


var g = svg.append("g")
    .attr("class", "legend")
    .attr("transform", "translate(0,40)");

 var legend=   g.selectAll("rect")
      .data(color.range().map(function(d) {

          d = color.invertExtent(d);
          if (d[0] == null) d[0] = x.domain()[0];
          if (d[1] == null) d[1] = x.domain()[1];

          return d;
        }))
      .enter().append("rect")
        .attr("height", 8)
         .attr("x", function(d,i) { return -10; })
        .attr("y", function(d,i) { return i+200; })
        .attr("width", function(d) { return 40; })
         .attr("height", function(d) { return 20; })
        .attr("fill", function(d) { return color(d[0]); })
      .attr("transform", function(d, i) { return "translate(" + (width-30 - 50) + "," + (20 + i * 20) + ")"; })
     

    g.append("text")
        .attr("class", "caption")
        .attr("x", 900)
        .attr("y", 200)
        .attr("fill", "#000")
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text("poverty rate");


        var legendText = ["0", "<=2", "4", "6", "8", "10","12", "14","16",">=18"];
       
        g.selectAll("text")
              .data(legendText)
              .enter().append("text")
              .attr("x", function(d,i) { return width-30; })
              .attr("y", function(d,i) { return i*21-5; })
              .attr("dy", ".35em")
              .text(function(d) { console.log(d);return d+"%"; })
              .attr("transform", function(d, i) { return "translate(" +-10 + "," + 215 + ")"; });


var povertyMap = d3.map();
var stateMap = d3.map();
var countyMap = d3.map();
var populMap = d3.map();
var capitaMap = d3.map();


let promises = [d3.json("us.json"), d3.csv("county_poverty.csv"), d3.csv("county_detail.csv")];
Promise.all(promises).then(ready);

function ready([us, county_poverty, county_detail]){
  

    county_poverty.forEach(function(d) { povertyMap.set(d.id, +d.Poverty); 
                                         stateMap.set(d.id, d.State);
                                          countyMap.set(d.id, d.County);
                                      });
    county_detail.forEach(function(d){
                                      populMap.set(d.CensusId, +d.TotalPop);
                                      capitaMap.set(d.CensusId, +d.IncomePerCap);})

 
    x.domain(d3.min(county_poverty, function(d){ return d.Poverty}), d3.max(county_poverty, function(d){ return d.Poverty}));

    svg.append("g")
         .attr("class", "counties")
      .selectAll("path")
      .data(topojson.feature(us, us.objects.counties).features)
      .enter().append("path")
        .attr("fill", function(d) { return color(d.Poverty = povertyMap.get(d.id)); })
        .attr("d", path)
          .on("mouseover", function(){return tooltip.style("visibility", "visible");})
          .on("mousemove",function(d){return tooltip.style("top",
                                (d3.event.pageY-20)+"px").style("left",(d3.event.pageX+20)+"px")
                               
                                .html(
                                  "State:             "+ stateMap.get(d.id)+"</br>"+
                                   "County:           "+ countyMap.get(d.id)+"</br>"+
                                  "Poverty:           "+povertyMap.get(d.id)+"%</br>"+
                                  "Total Population:  "+populMap.get(d.id)+"</br>"+
                                  "Income per capita: "+capitaMap.get(d.id)+"</br>"

                                  
                                  );})
          .on("mouseout", function(){return tooltip.style("visibility", "hidden");})
      .append("title")
        .text(function(d) { return d.Poverty + "%"; });
     

   svg.append("path")
        .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
        .attr("class", "states")
        .attr("d", path)
       
    var tooltip = d3.select("body")
      .append("div")
      .attr("class", "tooltip")



}
