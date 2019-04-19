
function drawcharts(csv_data){
    drawLine(csv_data) ; 
    drawPie(csv_data)
}



function drawLine(csv_data){

    const row = d => {
                      d.founded_at = +d.founded_at.substr(0,4);
                       d.category_code = d.category_code;
                       d.country_code = d.country_code;
                    
                    return d;
                  };

    csv_data.forEach(function(d){
        if(d.founded_at !== undefined){
            row(d);
        }
    });


    data1 = csv_data.filter(function(d) { 
        return d.country_code == "USA";
    })

    console.log(data1);

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
        dataf = [];
        d.values.forEach(function(g){
              if(parseInt(g.key) > 1960 && parseInt(g.key) < 2014 ){
                    var arr =  {x: g.key, y: g.values};
                    dataf.push(arr);
                }
        });
              
        datafinal.push({key:d.key, values: dataf})

    });

    nv.addGraph(function() {
        var chart = nv.models.lineChart()
            .x(function(d) { return +d.x; })
            .y(function(d) { return d.y });
            
        chart.dispatch.on('renderEnd', function() {
            console.log('render complete: cumulative line with guide line');
        });
        chart.xAxis
             .axisLabel('x')
        //.tickFormat(d3.format('1'));

        chart.yAxis
             .axisLabel('y')
      
        d3.select('#chart1 svg')
            .datum(datafinal.slice(0,10))
            .call(chart);
        nv.utils.windowResize(chart.update);

        chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });
        chart.state.dispatch.on('change', function(state){
            nv.log('state', JSON.stringify(state));
        });

        return chart;
    });
}



function drawPie(csv_data){
    
    var map = d3.map();

      //Iterate and convert long_data into wide_data
    //d3.csv('last_file.csv',function(error,rows){

    csv_data.map((d,i) => {
      if (!map.get(d.status)) {
        map.set(d.status,0);
        }
      map.set(d.status, map.get(d.status)+1);
    });

 

 // console.log(map.size());
 // console.log(map.values());
 // console.log(map.keys());
    var keyset = [
        {key: "acquired"},
        {key: "closed"},
        {key: "operating"}
    ];

    var height = 350;
    var width = 350;

    nv.addGraph(function() {
        var chart = nv.models.pieChart()
            .x(function(d) { return d })
            .y(function(d) { return map.get(d) })
            .width(width)
            .height(height)
            .showTooltipPercent(true);

        d3.select("#test1")
            .datum(map.keys())
            .transition().duration(1200)
            .attr('width', width)
            .attr('height', height)
            .call(chart);

        // // update chart data values randomly
        // setInterval(function() {
        //     keyset[0].key = Math.floor(Math.random() * 10);
        //     keyset[1].key = Math.floor(Math.random() * 10);
        //     chart.update();
        // }, 4000);

        return chart;
    });

//  });
}

