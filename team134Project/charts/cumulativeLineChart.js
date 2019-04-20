function drawline(data,divId){


    const row = d => {
                      d.founded_at = +d.founded_at.substr(0,4);
                       d.category_code = d.category_code;
                       d.country_code = d.country_code;
                    
                    return d;
                  };

     console.log(data);

     //   d3.csv("./php/last_file.csv", function(error, data){
       
        // create an empty object that nv is expecting
         
         data.forEach(function(d){
                if(d.founded_at !== undefined && d.founded_at.length > 4){
                    row(d);
                }
                
                //dataset.append(row(d));
            });


        data1 = data.filter(function(d) { 
            return d.country_code == "USA";
        })



   
    
    // var founded_dates = d3.set(data.map(function(d) {
    //                                     //console.log(d.founded_at); 
    //                                     return d.founded_at;
    //                                 })).values();
    //  var first_funding_dates = d3.set(data.map(function(d) {
    //                                     //console.log(d.founded_at); 
    //                                     return d.first_funding_at;
    //                                 })).values();
    //  var invest_dates = d3.set(data.map(function(d) {
    //                                     //console.log(d.founded_at); 
    //                                     return d.first_investment_at;
    //                                 })).values();
    //  var last_funding_dates = d3.set(data.map(function(d) {
    //                                     //console.log(d.founded_at); 
    //                                     return d.last_funding_at;
    //                                 })).values();
    //   var acquired_dates = d3.set(data.map(function(d) {
    //                                     //console.log(d.founded_at); 
    //                                     return d.acquired_at;
    //                                 })).values();
    //    var closed_dates = d3.set(data.map(function(d) {
    //                                     //console.log(d.founded_at); 
    //                                     return d.closed_at;
    //                                 })).values();

    var data3 = d3.nest()
                 .key(function(d) { return d.category_code })
                 .key(function(d) { return +d.founded_at })
                 .rollup(function(d) { 
                        return d.length; ;
                })
                 .entries(data1);

    dataf = []
    datafinal= []
   // console.log(data3); 

data3.forEach(function(d){
        
    //console.log(d.values); 
    dataf = []
    d.values.forEach(function(g){
          if(parseInt(g.key) > 1960 && parseInt(g.key) < 2014 ){
                var arr =  {x: g.key, y: g.values};
                dataf.push(arr);
            }
    })
              
     datafinal.push({key:d.key, values: dataf})


                //dataset.append(row(d));
                
            });
//console.log(datafinal.slice(0,10)); 


        //dataf.pop();
        

    // console.log(founded_dates);
    // console.log(first_funding_dates);
    // console.log(invest_dates);
    // console.log(last_funding_dates);
    // console.log(acquired_dates);
    // console.log(closed_dates);
     // set the ranges
         
     nv.addGraph(function() {
        var chart = nv.models.lineChart()
            // .showLegend(false)
            .showYAxis(true)
            .showXAxis(true)
            //.color(d3.scale.category10().range())
            // .useInteractiveGuideline(true)
            .x(function(d) { return +d.x; })
            .y(function(d) { return d.y });
            //.color("#ff7f0e")
            // .average(function(d) { return d.mean/100; })
            // .duration(300)
            // .clipVoronoi(false);
        chart.dispatch.on('renderEnd', function() {
            console.log('render complete: cumulative line with guide line');
        });
  chart.xAxis
    .axisLabel('x')
    //.tickFormat(d3.format('1'));

  chart.yAxis
    .axisLabel('y')
    //.tickFormat(d3.format('1'));


       // var datafinal = [{key: "count", values: dataf, color: "#ff7f0e"}]


        d3.select('#'+divId +' svg')
            .datum(datafinal.slice(0,10))
            .call(chart);

        //TODO: Figure out a good way to do this automatically
        nv.utils.windowResize(chart.update);

        chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });
        chart.state.dispatch.on('change', function(state){
            nv.log('state', JSON.stringify(state));
        });

        return chart;
    });

// });
}
 