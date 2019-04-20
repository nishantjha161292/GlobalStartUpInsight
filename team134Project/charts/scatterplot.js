    function drawScatter(divId,country){
          var xdataset=[];
            var ydataset=[];
            var dataset=[];
            var zdataset=[];
            var adataset=[];
            var cdataset=[];
            d3.csv("./php/scatter_plot_sheet.csv", function(data) {

                  
// if(country !=="all"){
//         console.log(country);
//         data = data.filter(function(d) { 
//                 return d.country_code == country;
//         });
//     }


                for (i=0;i<data.length;i++)
                {
                    xdataset.push(data[i].years_old);
                    ydataset.push(data[i].funding_sum_usd);
                    zdataset.push(data[i].funding_rounds);
                    adataset.push(data[i].name);
                    cdataset.push(data[i].country_code);
                    dataset.push( [xdataset[i],ydataset[i],zdataset[i],adataset[i],cdataset[i]]);
                                        
                }

                legend=400
                var margin = { top: 50, right: 50, bottom: 50, left: 50 };
                var h = 600 - margin.top - margin.bottom //-plot2-plot3-plot4-plot5
                var w = 900 - margin.left - margin.right - legend
                var h2= 1000 - margin.top - margin.bottom 
                var h3= 1500 - margin.top - margin.bottom 
                var h4= 2000 - margin.top - margin.bottom 
                var h5= 2500 - margin.top - margin.bottom 
                //Create SVG element
                var svg = d3.select('#'+divId+' svg')
                            .attr("width", w + margin.left + margin.right+legend)
                            .attr("height", h + margin.top + margin.bottom/*+plot2+plot3+plot4+plot5*/)
                            .append('g')
                            .attr('transform','translate(' + margin.left + ',' + margin.top + ')');

                //Create Scale
                var xscale = d3.scale.linear()
                        .domain([5,25])
                        .range([0,w+margin.left+w]);
                var yscale = d3.scale.linear()
                        .domain([200000000, 5700000000])
                        .range([h,0]);      
       

                // Create X Axis 

                var xAxis = d3.svg.axis().orient("bottom");
            

                svg.append("g")
                    .attr("class", "axis") 
                    .attr('transform', 'translate(' + margin.left +',' + h + ')')
                    .call(xAxis);

                // X Axis Label
                svg.append('text') 
                    .attr("transform","translate(" + (w) + " ," + (h + margin.top -10) + ")")
                    .style("text-anchor", "middle")
                    .text("Years since Company founded");

                // Create Y Axis 
                var yAxis = d3.svg.axis().orient("left");

                svg.append("g")
                    .attr("class", "axis")
                    .attr('transform', 'translate(' + margin.left +',0)')
                    .call(yAxis);
                    
                // Y Axis Label
                svg.append("text")
                  .attr("transform", "rotate(-90)")
                  .attr("y", 0 - margin.left)
                  .attr("x",0 - (h / 2))
                  .attr("dy", "1em")
                  .style("text-anchor", "middle")
                  .text("Funding Amount");


                var tooltip = d3.select("body")
                    .append("div")
                    .style("position", "absolute")
                    .style("z-index", "10")
                    .style("visibility", "hidden")
                    .style("background", "#fffff")
                    .text("a simple tooltip")



            //Create shapes 
                  var shape=  svg.selectAll(".point")
                       .data(dataset)
                       .enter()
                       .append("path")
                       .attr('class', 'dot')
                       .attr("d", d3.svg.symbol()
                        .size(function(d){
                            return d[2]*100
                        })
                        .type(function(d){
                                if (d[2]>450) {return d3.symbolCross;}
                                else {return d3.symbolCircle;}
                            }))
                        .attr("fill", function(d) { //console.log(d);

                                if (d[4]=='NLD') {return "#f49f9as";}
                                else if (d[4]=='IND'){return "#ff9b0c";}
                                else if (d[4]=='CA'){return "#c2f49a";}
                                else if (d[4]=='GBR'){return "#eff49a";}
                                else if (d[4]=='CHN'){return "#9ac2f4";}
                                else if (d[4]=='DNK'){return "#9f9af4";}
                                else if (d[4]=='BMU'){return "#ffb347";}
                                else if (d[4]=='RUS'){return "#e83082";}
                                else if (d[4]=='USA'){return "#f8bdd7";}
                                else if (d[4]=='MYS'){return "#ff6961";}
                                else {return "purple";}
                            })
                        .attr("stroke","white")
                       //.attr("stroke" , "none")
                       .attr("transform", function(d) { return "translate(" + (xscale(d[0])+margin.left) + "," + yscale(d[1]) + ")"; })
                      .on('mouseover',function(d){
                        tooltip.html("Name: "+d[3]+"<br>"+"Funding Amount: "+d[1]+"<br>"+"Company Age: "+d[0]); 
                        tooltip.attr("class","d3-tip");
                        return tooltip.style("visibility", "visible");})
                      .on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
                      .on('mouseout',function(){return tooltip.style("visibility", "hidden");})

            // Plot Title   
                svg.append("text")
                .text("Number of Years Vs Funding Amount Vs Funding Round")
                .attr("x",w/2-w/4).attr("y",-10)
                .attr("font-size", "15px");

                //legend
                var labels = ["USA" , "IND","CHN","DNK","BMU","NLD","RUS"];
                // var shapeScale = d3.scaleOrdinal()
                //                 .domain(labels)
                //                 .range([d3.symbolCircle, d3.symbolCross]);

                var colourScale = d3.scale.ordinal()
                                .domain(labels)
                                .range(['#f8bdd7', '#ff9b0c','#9ac2f4','#9f9af4','#ffb347','black','#e83082']);

                var shapeScale = d3.scale.ordinal()
                                .domain(labels)
                                .range([d3.symbolCircle]);
                
                var legend=svg.selectAll(".legend").each(function(d) {
                  d3.select(this).style("fill", colorScale(d))
                });

            labels.forEach(function(d, i) {
                var x = 800;
                var y = 23 + i * 20;


                var symbol = d3.svg.symbol()
                    .type(shapeScale(d))
                    .size(50);

                    //console.log(d);

                svg.append('path')
                    .attr('class', 'legend')
                    .attr('d', symbol)
                    .attr('stroke', colourScale(d))
                    .attr('fill',colourScale(d))
                    .attr('transform', 'translate(' + x + ',' + y + ')')
                    .on("click", function(type) {
                        // dim all of the icons in legend
                        d3.selectAll('.legend')
                            .style("opacity", 0.1);
                        // make the one selected be un-dimmed
                        d3.select(this)
                            .style("opacity", 1);
                        // select all dots and apply 0 opacity (hide)
                        d3.selectAll('.dot')
                        .style("opacity", 0.0)

                        // filter out the ones we want to show and apply properties
                        .filter(function(d) {
                            return d[4] == labels[i];
                        })
                            .style("opacity", 1)})
                         // d3.selectAll('.d3-tip')
                         //    .style("opacity", 0.0)

                svg.append('text')
                    .attr('x', 810)
                    .attr('y', y)
                    .attr('dominant-baseline', 'central')
                    .text(d);
            });

});
}