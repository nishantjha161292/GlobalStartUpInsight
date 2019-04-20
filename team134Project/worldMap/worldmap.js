
      var width = 1500;
      var height = 900;



      var projection = d3.geo.mercator();

     var path = d3.geo.path()
        .projection(projection);    

      var svg = d3.select("#map svg")//.append("svg")
          .attr("width", width)
          .attr("height", height);


var g = svg.append("g")
    
    .attr("transform", "scale(1.5, 1.5)");

g.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "#222222");

       queue()
          .defer(d3.json,"./worldMap/world.json")
          .defer(d3.csv,"./worldMap/world_coords.csv")
          .await(ready)

        function ready(error,topology,countriescoords){
          //console.log(topology)

          var countries=topojson.object(topology, topology.objects.countries).geometries
          //console.log(countries)

          g.selectAll("path")
              .data(countries)
              .enter()
              .append("path")
              .attr("class","countries")
              .attr("d", path)

         var tooltip = d3.select("body")
                .append("div")
                .style("position", "absolute")
                .style("z-index", "10")
                .style("visibility", "hidden")
                .style("background", "#fffff")
                .text("a simple tooltip")
              //console.log(capitals)

            var marker = g.selectAll(".city-circle")
                .data(countriescoords)
                .enter()

                marker.append("circle")
                .attr("r",5)//function(d){
                  //console.log(d.Count)
                 // return d.Count*;
               // })
                .attr("fill","orange")
                .attr("stroke","orange")
                .attr("stroke-width",0.5)
                .attr("cx",function(d){
                  //console.log(d)
                  var coords=projection([d.longitude,d.latitude])
                  return coords[0];
                })
                .attr("cy",function(d){
                  var coords=projection([d.longitude,d.latitude])
                  return coords[1];
                })
                .on ('click',function(d){
                  //d3.select(this).classed("selected",true)
                  window.open("#dashboard","_self");
                  drawCharts(d.id)
                  
                })
                .on('mouseover',function(d){
                tooltip.html("Name: "+d.Name+"<br>Number of Startups: "+d.Count);
                tooltip.attr("class","d3-tip");
                return tooltip.style("visibility", "visible");
              })
              .on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
              .on('mouseout',function(){return tooltip.style("visibility", "hidden");
              })

              // marker.append("text")
              //   .attr("x",function(d){
              //     //console.log(d)
              //     var coords=projection([d.longitude,d.latitude])
              //     return coords[0];
              //   })
              //   .attr("y",function(d){
              //     var coords=projection([d.longitude,d.latitude])
              //     return coords[1];
              //   })
              //   .attr("dx",function(d){return -5})
              //   .attr("dy",5)
              //   .text(function(d){
              //     return d.Count;
              //   });
        }
  