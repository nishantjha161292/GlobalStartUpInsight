

// function getMAUdata(callback){

// alert("here");
//     var bb = [];
   
//     $(function(){
//          $.get("getJSON.php", function(data){
//                        //    alert(data);
//                        //alert("data is here");
//                        callback(data);
//                      });
//                 });
    
// }


// add a item
// map[key1] = value1;
// // or remove it
// delete map[key1];
// // or determine whether a key exists
// key1 in map;
function drawCharts(country="ALL"){


// var datal = ["USA", "IND"];


  d3.select('#selection').property('value', country);

  drawline(csv_data,'chart1',country);
  drawScatter('chart2', country);
  drawBar(csv_data,'chart3',country);
  drawPie(csv_data,'chart4',country);
}



 
function getDataFor(){
  $.ajax({
        type: 'GET',
        url: './php/getGraphData.php',
        data: {
            // url: "",
            //action:"PUT",
            // graphType: "metricParam",

        },
        dataType:"json", //to parse string into JSON object,
        success: function(data){ 
            
             alert('success');
             //alert(data);

            //csv_data = JSON.parse(data);
           // console.log(data);
            for(i=1;i<data.length;i++){
                var json_obj = {}
                for(j=1;j<data[i].length;j++){
                     json_obj[data[0][j]] = data[i][j];
                }

                if ( countries.indexOf(json_obj['country_code']) == -1 ) countries.push(json_obj['country_code']);
               csv_data.push(json_obj);
            }
            console.log(csv_data);
            console.log(countries);
            var options = select
                            .selectAll('option')
                            .data(countries).enter()
                            .append('option')
                              .text(function (d) { return d; });

        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('error: ' + textStatus + ': ' + errorThrown);
        }
    });
}


