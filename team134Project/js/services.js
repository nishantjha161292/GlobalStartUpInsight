

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
               csv_data.push(json_obj);
            }
            console.log(csv_data);
            //alert(maudata[metricParam]);

        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('error: ' + textStatus + ': ' + errorThrown);
        }
    });
}


