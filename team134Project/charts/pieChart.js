function drawPie(rows,divId,country="ALL"){
var map = d3.map();

  //Iterate and convert long_data into wide_data
//d3.csv('./php/last_file.csv',function(error,rows){

    
if(country !=="ALL"){
        console.log(country);
        rows = rows.filter(function(d) { 
                return d.country_code == country;
        });
    }


    rows.map((d,i) => {
      if (!map.get(d.status)) {
        map.set(d.status,0);
        }
      map.set(d.status, map.get(d.status)+1);
    });

 
    var keyset = [
        {key: "acquired"},
        {key: "closed"},
        {key: "operating"}
    ];

    var height = 500;
    var width = 500;

    nv.addGraph(function() {
        var chart = nv.models.pieChart()
            .x(function(d) { return d })
            .y(function(d) { return map.get(d) })
            .width(width)
            .height(height)
            .showTooltipPercent(true);

        d3.select("#"+divId+" svg")
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

 // });
}
