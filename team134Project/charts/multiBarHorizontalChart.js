
function drawBar(rows,divId,country="ALL"){


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
    if(d.category_code != "NULL"){
      if (!map.get(d.category_code)) {
        map.set(d.category_code,0);
        }
      map.set(d.category_code, map.get(d.category_code)+1);
    }
    }
    );


  

  console.log(map.keys());   

    var height = 350;
    var width = 350;

   var smallData = [{ key: 'Series1',
   values : map.keys().map(function(d){
    return {
    label: d,
    value: map.get(d)
  };

    })
}];
    var chart;
    nv.addGraph(function() {
        chart = nv.models.multiBarHorizontalChart()
            .x(function(d) { return d.label })
            .y(function(d) { return d.value })
            .barColor(d3.scale.category20().range())
            .duration(250)
            .showLegend(true)
            .legendPosition("bottom")
            .margin({left: 150});

       // chart.yAxis.tickFormat(d3.format(',.2f'));

        chart.yAxis.axisLabel('Number of Startups');
        chart.xAxis.axisLabel('Industry Type').axisLabelDistance(50);

        d3.select('#'+divId+' svg')
            .datum(smallData)
            .call(chart);
        return chart;
    });
//});
}    