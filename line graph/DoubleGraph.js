
var data1 = '';
function generateChartData(jsonDAta) {
    var chartData = [];
    var dataArray = [];
    dataArray = jsonDAta;
   // // chartData = getWAU();
   //  alert(dataArray[0]["week"]);
    chartData1 = dataArray[0]["data"];
    var firstDate = new Date(dataArray[0]["week"]);
    
    firstDate.setDate(firstDate.getDate() - 182);

    for (var i = 28; i >= 0; i--) {
      
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        var date1 =  chartData1[i]["date"].replace(/-/g,"/");

        var date2 = date1.split( '/' ).reverse( ).join( '/' );
        var date3 = date2.split( '/' );
        var date4 = date3[1]+'/'+date3[0]+'/'+date3[2];

      //  alert(date4);
        

        var newDate = new Date(date4);
        // newDate.setDate(newDate.getDate() + (i*7));
        // var j = i-26;
        // j = j*(-1);



        var android = chartData1[i]["ANDROID"];
        var ios = chartData1[i]["IOS"];
        var windows = chartData1[i]["WINDOWS"];
        var all = chartData1[i]["ANDROID"] + chartData1[i]["IOS"] + chartData1[i]["WINDOWS"];


        chartData.push({
            date: newDate,
            ANDROID: android,
            IOS: ios,
            WINDOWS: windows,
            ALL: all
        });
    }
    return chartData;
}

function generateChartDataMonthly(jsonDAta) {
    var chartData = [];
    var dataArray = [];
    dataArray = jsonDAta;
   // // chartData = getWAU();
   //  alert(dataArray[0]["data"]);
    chartData1 = dataArray[0]["data"];
    var firstDate = new Date(dataArray[0]["week"]);
   // firstDate.setDate(firstDate.getDate() - 182);

    for (var i = 6; i >= 0; i--) {
      
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        // var newDate = new Date(chartData1[j]["date"]);
        // newDate.setDate(newDate.getDate() + (i*7));
        // var j = i-26;
        // j = j*(-1);

        var date1 =  chartData1[i]["date"].replace(/-/g,"/");
     
      //  alert(date1);
        var newDate = new Date(date1);

        var android = chartData1[i]["ANDROID"];
        var ios = chartData1[i]["IOS"];
        var windows = chartData1[i]["WINDOWS"];
        var all = chartData1[i]["ANDROID"] + chartData1[i]["IOS"] + chartData1[i]["WINDOWS"];


        chartData.push({
            date: newDate,
            ANDROID: android,
            IOS: ios,
            WINDOWS: windows,
            ALL: all
        });
    }
    return chartData;
}


function useReturnData(data){
    data1 = data;
    console.log(data1);
    
    
};

function getMAUdata(){
   
    $(function(){
       $.get("getJSON.php", function(data){
          
        useReturnData(data);
         
       });
    });
    
}

function getMonthlyMAU() {
           
              

     // var theApplet = document.getElementById("app");
     // alert(theApplet);
    //     // The following line clobbers the document...
    // //document.write(theApplet.method());
    // document.getElementById("display").innerHTML = theApplet.method();
    
     var mau = [{"week": "06/31/2018",
                "data": [{
                        "date": "06-30-2018",
                        "ANDROID": 6801118,
                        "IOS": 6785752,
                        "WINDOWS": 1645995
                    },{
                        "date": "05-31-2018",
                        "ANDROID": 6695547,
                        "IOS": 6845469,
                        "WINDOWS": 1871261
                    },{
                        "date": "04-30-2018",
                        "ANDROID": 6665982,
                        "IOS": 6656522,
                        "WINDOWS": 1797942
                    },{
                        "date": "03-31-2018",
                        "ANDROID": 6816028,
                        "IOS": 6494126,
                        "WINDOWS": 2017159
                    },{
                        "date": "02-28-2018",
                        "ANDROID": 6395687,
                        "IOS": 6206241,
                        "WINDOWS": 2272060
                    },{
                        "date": "01-31-2018",
                        "ANDROID": 6668002,
                        "IOS": 6284988,
                        "WINDOWS": 1822629
                    },{
                        "date": "12-31-2017",
                        "ANDROID": 6447741,
                        "IOS": 6259225,
                        "WINDOWS": 1619068
                    },{
                        "date": "11-30-2017",
                        "ANDROID": 6122169,
                        "IOS": 5758714,
                        "WINDOWS": 1744353
                    },{
                        "date": "10-31-2017",
                        "ANDROID": 5854333,
                        "IOS": 5684124,
                        "WINDOWS": 1801150
                    },{
                        "date": "09-30-2017",
                        "ANDROID": 5056959,
                        "IOS": 5402617,
                        "WINDOWS": 1641275
                    },{
                        "date": "08-31-2017",
                        "ANDROID": 4877086,
                        "IOS": 5447640,
                        "WINDOWS": 1590118
                    },{
                        "date": "07-31-2017",
                        "ANDROID": 4612890,
                        "IOS": 4933771,
                        "WINDOWS": 1428950
                    }, {
                        "date": "06-30-2017",
                        "ANDROID": 4115781,
                        "IOS": 4365290,
                        "WINDOWS": 1408582    
                    }, {
                        "date": "05-31-2017",
                        "ANDROID": 3908691,
                        "IOS": 4184238,
                        "WINDOWS": 1413627
                    }, {
                        "date": "04-30-2017",
                       "ANDROID": 3705682,
                        "IOS": 3843979,
                        "WINDOWS": 1251192
                    }, {
                        "date": "03-31-2017",
                        "ANDROID": 3495903,
                        "IOS": 3800154,
                        "WINDOWS": 1306983
                    }]
              }];
            
    return mau;
}
                                                     	 
function getQFM() {
    var qfm = [{"week": "07/06/2018",
                "data": [{
                        "date": "2018-07-06",
                        "ANDROID": 12529,
                        "IOS":    10285,
                        "WINDOWS": 9659
                    },
                    // {
                    //     "date": "2018-06-29",
                    //     "ANDROID": 65897,
                    //     "IOS":    48396,
                    //     "WINDOWS": 34039
                    // }
                    {
                        "date": "2018-06-22",
                        "ANDROID": 16135,
                        "IOS":    13906,
                        "WINDOWS": 12222
                    },{
                        "date": "2018-06-15",
                        "ANDROID": 21702,
                        "IOS":    19028,
                        "WINDOWS": 15212
                    },{
                        "date": "2018-06-08",
                        "ANDROID": 13359,
                        "IOS":    11451,
                        "WINDOWS": 10546
                    },{
                        "date": "2018-06-01",
                        "ANDROID": 13099,
                        "IOS":    11210,
                        "WINDOWS": 10230
                    },{
                        "date": "2018-05-25",
                        "ANDROID": 11517,
                        "IOS":    9998,
                        "WINDOWS": 7287
                    },{
                        "date": "2018-05-18",
                        "ANDROID": 12811,
                        "IOS":    11493,
                        "WINDOWS": 6935
                    },{
                        "date": "2018-05-11",
                        "ANDROID": 11967,
                        "IOS":    10788,
                        "WINDOWS": 6088
                    },{
                        "date": "2018-05-04",
                        "ANDROID": 11648,
                        "IOS":    10344,
                        "WINDOWS": 5671
                    },{
                        "date": "2018-04-27",
                        "ANDROID": 10096,
                        "IOS":    9348,
                        "WINDOWS": 5062
                    },{
                        "date": "2018-04-20",
                        "ANDROID": 11531,
                        "IOS":    10397,
                        "WINDOWS": 6136
                    },{
                        "date": "2018-04-13",
                        "ANDROID": 11918,
                        "IOS":    11070,
                        "WINDOWS": 6029
                    },{
                        "date": "2018-04-06",
                        "ANDROID": 11811,
                        "IOS":    10791,
                        "WINDOWS": 5916
                    },{
                        "date": "2018-03-30",
                        "ANDROID": 11553,
                        "IOS":    10417,
                        "WINDOWS": 5988
                    },{
                        "date": "2018-03-23",
                        "ANDROID": 11796,
                        "IOS":    10535,
                        "WINDOWS": 6114
                    },{
                        "date": "2018-03-16",
                        "ANDROID": 11435,
                        "IOS":    10404,
                        "WINDOWS": 6131
                    },{
                        "date": "2018-03-09",
                        "ANDROID": 11206,
                        "IOS":    10282,
                        "WINDOWS": 5864
                    },{
                        "date": "2018-03-02",
                        "ANDROID": 11424,
                        "IOS":    10584,
                        "WINDOWS": 5969
                    },{
                        "date": "2018-02-23",
                        "ANDROID": 10959,
                        "IOS":    9965,
                        "WINDOWS": 5734
                    },{
                        "date": "2018-02-16",
                        "ANDROID": 9574,
                        "IOS":    9154,
                        "WINDOWS": 5294
                    },{
                        "date": "2018-02-09",
                        "ANDROID": 10869,
                        "IOS":    10072,
                        "WINDOWS": 5863
                    },{
                        "date": "2018-02-02",
                        "ANDROID": 10351,
                        "IOS":    9592,
                        "WINDOWS": 5585
                    },{
                        "date": "2018-01-26",
                        "ANDROID": 10879,
                        "IOS":    10015,
                        "WINDOWS": 6019
                    },{
                        "date": "2018-01-19",
                        "ANDROID": 10127,
                        "IOS":    9523,
                        "WINDOWS": 5522
                    },{
                        "date": "2018-01-12",
                        "ANDROID": 7463,
                        "IOS":    6815,
                        "WINDOWS": 4021
                    },{
                        "date": "2018-01-05",
                        "ANDROID": 8843,
                        "IOS":    7999,
                        "WINDOWS": 4834
                    },{
                        "date": "2017-12-29",
                        "ANDROID": 7631,
                        "IOS":    6842,
                        "WINDOWS": 4182
                    },{
                        "date": "2017-12-22",
                        "ANDROID": 8911,
                        "IOS":    8134,
                        "WINDOWS": 5143
                    },{
                        "date": "2017-12-15",
                        "ANDROID": 8274,
                        "IOS":    7763,
                        "WINDOWS": 4937
                    },{
                        "date": "2017-12-08",
                        "ANDROID": 9276,
                        "IOS":    8865,
                        "WINDOWS": 5833
                    },{
                        "date": "2017-12-01",
                        "ANDROID": 9521,
                        "IOS":    9469,
                        "WINDOWS": 5938
                    },{
                        "date": "2017-11-24",
                        "ANDROID": 8275,
                        "IOS":    7868,
                        "WINDOWS": 5066
                    },{
                        "date": "2017-11-17",
                        "ANDROID": 9635,
                        "IOS":    9749,
                        "WINDOWS": 6270
                    },{
                        "date": "2017-11-10",
                        "ANDROID": 9465,
                        "IOS":    9639,
                        "WINDOWS": 6036
                    },{
                        "date": "2017-11-03",
                        "ANDROID": 9648,
                        "IOS":    10106,
                        "WINDOWS": 6604
                    },{
                        "date": "2017-10-27",
                        "ANDROID": 10734,
                        "IOS":    11833,
                        "WINDOWS": 7315
                    },{
                        "date": "2017-10-20",
                        "ANDROID": 10031,
                        "IOS":    11470,
                        "WINDOWS": 7157
                    },{
                        "date": "2017-10-20",
                        "ANDROID": 10031,
                        "IOS":    11470,
                        "WINDOWS": 7157
                    },{
                        "date": "2017-10-13",
                        "ANDROID": 7323,
                        "IOS":    6948,
                        "WINDOWS": 4963
                    },{
                        "date": "2017-10-06",
                        "ANDROID":  7024,
                        "IOS":    6653,
                        "WINDOWS": 4893
                    },{
                        "date": "2017-09-29",
                        "ANDROID": 6632,
                        "IOS":    6369,
                        "WINDOWS": 4514
                    },{
                        "date": "2017-09-22",
                        "ANDROID": 6474,
                        "IOS":   6215,
                        "WINDOWS": 4495
                    },{
                        "date": "2017-09-15",
                        "ANDROID":  6166,
                        "IOS":    6233,
                        "WINDOWS": 4478
                    },{
                        "date": "2017-09-08",
                        "ANDROID":  6161,
                        "IOS":    5912,
                        "WINDOWS": 4455
                    },{
                        "date": "2017-09-01",
                        "ANDROID": 6213,
                        "IOS": 5776,
                        "WINDOWS": 4413
                    },{
                        "date": "2017-08-25",
                        "ANDROID": 6072,
                        "IOS": 5683,
                        "WINDOWS": 4384
                    },{
                        "date": "2017-08-18",
                        "ANDROID": 5649,
                        "IOS": 5489,
                        "WINDOWS": 4182
                    }, {
                        "date": "2017-08-11",
                        "ANDROID": 5442,
                        "IOS": 5172,
                        "WINDOWS": 4108   
                    }, {
                        "date": "2017-08-04",
                        "ANDROID": 5364,
                        "IOS": 5091,
                        "WINDOWS": 4080
                    }, {
                        "date": "2017-07-28",
                       "ANDROID": 5294,
                        "IOS": 4909,
                        "WINDOWS": 3937
                    }, {
                        "date": "2017-07-21",
                        "ANDROID": 4676,
                        "IOS": 4465,
                        "WINDOWS": 3440
                    }, {
                        "date": "2017-07-14",
                        "ANDROID": 4324,
                        "IOS": 4297,
                        "WINDOWS": 3220
                    }, {
                        "date": "2017-07-07",
                        "ANDROID": 4312,
                        "IOS": 4087,
                        "WINDOWS": 3147
                    }, {
                        "date": "2017-06-30",
                        "ANDROID": 4090,
                        "IOS": 4171,
                        "WINDOWS": 3196
                    }, {    
                        "date": "2017-06-23",
                        "ANDROID": 4163,
                        "IOS": 4061,
                        "WINDOWS": 3165
                    }, {
                        "date": "2017-06-16",
                        "ANDROID": 4208,
                        "IOS": 4068,
                        "WINDOWS": 3198
                    }, {
                        "date": "2017-06-09",
                        "ANDROID": 4211,
                        "IOS": 4136,
                        "WINDOWS": 3140
                    }, {
                        "date": "2017-06-02",
                        "ANDROID": 4094,
                        "IOS": 3999,
                        "WINDOWS": 3083
                    }, {
                        "date": "2017-05-26",
                        "ANDROID": 3999,
                        "IOS": 4116,
                        "WINDOWS": 3218
                    },{
                        "date": "2017-05-19",
                        "ANDROID": 3915,
                        "IOS": 3733,
                        "WINDOWS": 3064
                    }, {
                        "date": "2017-05-12",
                        "ANDROID": 3863,
                        "IOS": 3972,
                        "WINDOWS": 3148
                    }, {
                        "date": "2017-05-05",
                        "ANDROID": 3804,
                        "IOS": 4026,
                        "WINDOWS": 3168
                    }, {
                        "date": "2017-04-28",
                        "ANDROID": 3745,
                        "IOS": 3904,
                        "WINDOWS": 3106
                    }, {
                        "date": "2017-04-21",
                        "ANDROID": 3555,
                        "IOS": 3979,
                        "WINDOWS": 3003
                    }, {
                        "date": "2017-04-14",
                        "ANDROID": 3600,
                        "IOS": 3845,
                        "WINDOWS": 2980
                    }, {
                        "date": "2017-04-07",
                        "ANDROID": 3675,
                        "IOS": 3900,
                        "WINDOWS": 3109
                    }, {
                        "date": "2017-03-31",
                        "ANDROID": 3747,
                        "IOS": 3927,
                        "WINDOWS": 3126
                    }, {
                        "date": "2017-03-24",
                        "ANDROID": 3733,
                        "IOS": 3895,
                        "WINDOWS": 3114
                    }, {
                        "date": "2017-03-17",
                        "ANDROID": 3661,
                        "IOS": 3937,
                        "WINDOWS": 3173
                    }, {
                        "date": "2017-03-10",
                        "ANDROID": 3822,
                        "IOS": 3996,
                        "WINDOWS": 3253
                    }, {
                        "date": "2017-03-03",
                        "ANDROID": 3746,
                        "IOS": 3993,
                        "WINDOWS": 3320
                    }]
              }];

    return qfm;
}          

function getSignUps() {
    var signUps = [{"week": "06/29/2018",
                "data": [{
                        "date": "2018-07-06",
                        "ANDROID": 291825,
                        "IOS":    207002,
                        "WINDOWS": 32466
                    },{
                        "date": "2018-06-29",
                        "ANDROID": 297853,
                        "IOS":    198308,
                        "WINDOWS": 34062
                    },{
                        "date": "2018-06-22",
                        "ANDROID": 288898,
                        "IOS":    187984,
                        "WINDOWS": 35212
                    },{
                        "date": "2018-06-15",
                        "ANDROID": 277859,
                        "IOS":    195283,
                        "WINDOWS": 36227
                    },{
                        "date": "2018-06-08",
                        "ANDROID": 255733,
                        "IOS":    181245,
                        "WINDOWS": 36270
                    },{
                        "date": "2018-06-01",
                        "ANDROID": 243926,
                        "IOS":    165017,
                        "WINDOWS": 33094
                    },{
                        "date": "2018-05-25",
                        "ANDROID": 201025,
                        "IOS":    125838,
                        "WINDOWS": 29404
                    },{
                        "date": "2018-05-18",
                        "ANDROID": 197934,
                        "IOS":    121943,
                        "WINDOWS": 28466
                    },{
                        "date": "2018-05-11",
                        "ANDROID": 223343,
                        "IOS":    141924,
                        "WINDOWS": 23895
                    },{
                        "date": "2018-05-04",
                        "ANDROID": 216611,
                        "IOS":    143188,
                        "WINDOWS": 21151
                    },{
                        "date": "2018-04-27",
                        "ANDROID": 210967,
                        "IOS":    142325,
                        "WINDOWS": 22641
                    },{
                        "date": "2018-04-20",
                        "ANDROID": 222083,
                        "IOS":    141040,
                        "WINDOWS": 22772
                    },{
                        "date": "2018-04-13",
                        "ANDROID": 232776,
                        "IOS":    152446,
                        "WINDOWS": 18425
                    },{
                        "date": "2018-04-06",
                        "ANDROID": 245748,
                        "IOS":    169163,
                        "WINDOWS": 20616
                    },{
                        "date": "2018-03-30",
                        "ANDROID": 267159,
                        "IOS":    160485,
                        "WINDOWS": 20616
                    },{
                        "date": "2018-03-23",
                        "ANDROID": 257540,
                        "IOS":    141374,
                        "WINDOWS": 21884
                    },{
                        "date": "2018-03-16",
                        "ANDROID": 257856,
                        "IOS":    153348,
                        "WINDOWS": 22098
                    },{
                        "date": "2018-03-09",
                        "ANDROID": 265324,
                        "IOS":    159261,
                        "WINDOWS": 22165
                    },{
                        "date": "2018-03-02",
                        "ANDROID": 275473,
                        "IOS":    162214,
                        "WINDOWS": 22634
                    },{
                        "date": "2018-02-23",
                        "ANDROID": 278499,
                        "IOS":    167191,
                        "WINDOWS": 21958
                    },{
                        "date": "2018-02-16",
                        "ANDROID": 280670,
                        "IOS":    172846,
                        "WINDOWS": 22650
                    },{
                        "date": "2018-02-09",
                        "ANDROID": 273450,
                        "IOS":    173121,
                        "WINDOWS": 22042
                    },{
                        "date": "2018-02-02",
                        "ANDROID": 285944,
                        "IOS":    158992,
                        "WINDOWS": 22601
                    },{
                        "date": "2018-01-26",
                        "ANDROID": 225470,
                        "IOS":    141834,
                        "WINDOWS": 21216
                    },{
                        "date": "2018-01-19",
                        "ANDROID": 182988,
                        "IOS":    142744,
                        "WINDOWS": 23253
                    },{
                        "date": "2018-01-12",
                        "ANDROID": 128326,
                        "IOS":    99700,
                        "WINDOWS": 16535
                    },{
                        "date": "2018-01-05",
                        "ANDROID": 191316,
                        "IOS":    165545,
                        "WINDOWS": 23746
                    },{
                        "date": "2017-12-29",
                        "ANDROID": 185272,
                        "IOS":    163056,
                        "WINDOWS": 25568
                    },{
                        "date": "2017-12-22",
                        "ANDROID": 183434,
                        "IOS":    136573,
                        "WINDOWS": 23387
                    },{
                        "date": "2017-12-15",
                        "ANDROID": 167242,
                        "IOS":    118452,
                        "WINDOWS": 21425
                    },{
                        "date": "2017-12-08",
                        "ANDROID": 201988,
                        "IOS":    141764,
                        "WINDOWS": 25262
                    },{
                        "date": "2017-12-01",
                        "ANDROID": 191364,
                        "IOS":    138748,
                        "WINDOWS": 25676
                    },{
                        "date": "2017-11-24",
                        "ANDROID": 197089,
                        "IOS":    142756,
                        "WINDOWS": 24412
                    },{
                        "date": "2017-11-17",
                        "ANDROID": 220366,
                        "IOS":    132693,
                        "WINDOWS": 26300
                    },{
                        "date": "2017-11-10",
                        "ANDROID": 224713,
                        "IOS":    131933,
                        "WINDOWS": 24922
                    },{
                        "date": "2017-11-03",
                        "ANDROID": 237118,
                        "IOS":    133212,
                        "WINDOWS": 26923
                    },{
                        "date": "2017-10-27",
                        "ANDROID": 229893,
                        "IOS":    136550,
                        "WINDOWS": 27624
                    },{
                        "date": "2017-10-20",
                        "ANDROID": 223967,
                        "IOS":    136550,
                        "WINDOWS": 27624
                    },{
                        "date": "2017-10-13",
                        "ANDROID": 202665,
                        "IOS":    130707,
                        "WINDOWS": 27782
                    },{
                        "date": "2017-10-06",
                        "ANDROID":  204083 ,
                        "IOS":    128721,
                        "WINDOWS": 28840
                    },{
                        "date": "2017-09-29",
                        "ANDROID":  190970 ,
                        "IOS":    127221,
                        "WINDOWS": 26199
                    },{
                        "date": "2017-09-22",
                        "ANDROID": 182342,
                        "IOS":   124845,
                        "WINDOWS": 26103
                    },{
                        "date": "2017-09-15",
                        "ANDROID": 159147,
                        "IOS":   121167,
                        "WINDOWS": 25033
                    },{
                        "date": "2017-09-08",
                        "ANDROID": 143502 ,
                        "IOS":   125353,
                        "WINDOWS": 25503
                    },{
                        "date": "2017-09-01",
                        "ANDROID": 127059,
                        "IOS":  124833,
                        "WINDOWS": 25614
                    },{
                        "date": "2017-08-25",
                        "ANDROID": 124495,
                        "IOS": 118731,
                        "WINDOWS": 25569
                    },{
                        "date": "2017-08-18",
                        "ANDROID": 127851,
                        "IOS": 121638,
                        "WINDOWS": 25014
                    }, {
                        "date": "2017-08-11",
                        "ANDROID": 125540,
                        "IOS": 122896,
                        "WINDOWS": 25728    
                    }, {
                        "date": "2017-08-04",
                        "ANDROID": 122480,
                        "IOS": 99766,
                        "WINDOWS": 24737
                    }, {
                        "date": "2017-07-28",
                       "ANDROID": 125148,
                        "IOS": 72700,
                        "WINDOWS": 23928
                    }, {
                        "date": "2017-07-21",
                        "ANDROID": 111641,
                        "IOS": 68733,
                        "WINDOWS": 17307
                    }, {
                        "date": "2017-07-14",
                        "ANDROID": 104367,
                        "IOS": 67400,
                        "WINDOWS": 16716
                    }, {
                        "date": "2017-07-07",
                        "ANDROID": 102150,
                        "IOS": 65402,
                        "WINDOWS": 16529
                    }, {
                        "date": "2017-06-30",
                        "ANDROID": 100806,
                        "IOS": 62072,
                        "WINDOWS": 16327
                    }, {    
                        "date": "2017-06-23",
                        "ANDROID": 98139,
                        "IOS": 58193,
                        "WINDOWS": 16499
                    }, {
                        "date": "2017-06-16",
                        "ANDROID": 88488,
                        "IOS": 57252,
                        "WINDOWS": 17252
                    }, {
                        "date": "2017-06-09",
                        "ANDROID": 86470,
                        "IOS": 58620,
                        "WINDOWS": 18721
                    },{
                        "date": "2017-06-02",
                        "ANDROID": 86333,
                        "IOS": 56930,
                        "WINDOWS": 16831
                    }, {
                        "date": "2017-05-26",
                        "ANDROID": 67971,
                        "IOS": 53253,
                        "WINDOWS": 19444
                    },{
                        "date": "2017-05-19",
                        "ANDROID": 61263,
                        "IOS": 1737,
                        "WINDOWS": 15873
                    }, {
                        "date": "2017-05-12",
                        "ANDROID": 60029,
                        "IOS": 25456,
                        "WINDOWS": 16715
                    }, {
                        "date": "2017-05-05",
                        "ANDROID": 59625,
                        "IOS": 30742,
                        "WINDOWS": 17569
                    }, {
                        "date": "2017-04-28",
                        "ANDROID": 57820,
                        "IOS": 29915,
                        "WINDOWS": 17956
                    }, {
                        "date": "2017-04-21",
                        "ANDROID": 56952,
                        "IOS": 31566,
                        "WINDOWS": 17709
                    }, {
                        "date": "2017-04-14",
                        "ANDROID": 57747,
                        "IOS": 31404,
                        "WINDOWS": 17823
                    }, {
                        "date": "2017-04-07",
                        "ANDROID": 59735,
                        "IOS": 30967,
                        "WINDOWS": 19083
                    }, {
                        "date": "2017-03-31",
                        "ANDROID": 63393,
                        "IOS": 29044,
                        "WINDOWS": 19757
                    }, {
                        "date": "2017-03-24",
                        "ANDROID": 61864,
                        "IOS": 30143,
                        "WINDOWS": 19198
                    }, {
                        "date": "2017-03-17",
                        "ANDROID": 63348,
                        "IOS": 29811,
                        "WINDOWS": 21589
                    }, {
                        "date": "2017-03-10",
                        "ANDROID": 64057,
                        "IOS": 31227,
                        "WINDOWS": 23601
                    }, {
                        "date": "2017-03-03",
                        "ANDROID": 68259,
                        "IOS": 31685,
                        "WINDOWS": 23166
                    }]
              }];

    return signUps;
}

            
function getConversion() {
    var conversion = [{"week": "07/06/2018",
                "data": [{
                        "date": "2018-07-06",
                        "ANDROID": 688,
                        "IOS":    1637,
                        "WINDOWS": 501
                    },{
                        "date": "2018-06-29",
                        "ANDROID": 660,
                        "IOS":    1654,
                        "WINDOWS": 475
                    },{
                        "date": "2018-06-22",
                        "ANDROID": 639,
                        "IOS":    1520,
                        "WINDOWS": 523
                    },{
                        "date": "2018-06-15",
                        "ANDROID": 587,
                        "IOS":    1439,
                        "WINDOWS": 447
                    },{
                        "date": "2018-06-08",
                        "ANDROID": 628,
                        "IOS":    1425,
                        "WINDOWS": 496
                    },{
                        "date": "2018-06-01",
                        "ANDROID": 613,
                        "IOS":    1378,
                        "WINDOWS": 422
                    },{
                        "date": "2018-05-25",
                        "ANDROID": 556,
                        "IOS":    1527,
                        "WINDOWS": 416
                    },{
                        "date": "2018-05-18",
                        "ANDROID": 567,
                        "IOS":    1362,
                        "WINDOWS": 480
                    },{
                        "date": "2018-05-11",
                        "ANDROID": 613,
                        "IOS":    1398,
                        "WINDOWS": 409
                    },{
                        "date": "2018-05-04",
                        "ANDROID": 608,
                        "IOS":    1456,
                        "WINDOWS": 448
                    },{
                        "date": "2018-04-27",
                        "ANDROID": 615,
                        "IOS":    1513,
                        "WINDOWS": 503
                    },{
                        "date": "2018-04-20",
                        "ANDROID": 629,
                        "IOS":    1449,
                        "WINDOWS": 460
                    },{
                        "date": "2018-04-13",
                        "ANDROID": 609,
                        "IOS":    1467,
                        "WINDOWS": 401
                    },{
                        "date": "2018-04-06",
                        "ANDROID": 617,
                        "IOS":    1460,
                        "WINDOWS": 443
                    },{
                        "date": "2018-03-30",
                        "ANDROID": 578,
                        "IOS":    1344,
                        "WINDOWS": 463
                    },{
                        "date": "2018-03-23",
                        "ANDROID": 586,
                        "IOS":    1348,
                        "WINDOWS": 429
                    },{
                        "date": "2018-03-16",
                        "ANDROID": 571,
                        "IOS":    1343,
                        "WINDOWS": 487
                    },{
                        "date": "2018-03-09",
                        "ANDROID": 610,
                        "IOS":    1385,
                        "WINDOWS": 507
                    },{
                        "date": "2018-03-02",
                        "ANDROID": 609,
                        "IOS":    1412,
                        "WINDOWS": 481
                    },{
                        "date": "2018-02-23",
                        "ANDROID": 557,
                        "IOS":    1373,
                        "WINDOWS": 487
                    },{
                        "date": "2018-02-16",
                        "ANDROID": 500,
                        "IOS":    1267,
                        "WINDOWS": 457
                    },{
                        "date": "2018-02-09",
                        "ANDROID": 499,
                        "IOS":    1315,
                        "WINDOWS": 452
                    },{
                        "date": "2018-02-02",
                        "ANDROID": 471,
                        "IOS":    1309,
                        "WINDOWS": 455
                    },{
                        "date": "2018-01-26",
                        "ANDROID": 514,
                        "IOS":    1353,
                        "WINDOWS": 384
                    },{
                        "date": "2018-01-19",
                        "ANDROID": 487,
                        "IOS":    1227,
                        "WINDOWS": 438
                    },{
                        "date": "2018-01-12",
                        "ANDROID": 440,
                        "IOS":    1193,
                        "WINDOWS": 379
                    },{
                        "date": "2018-01-05",
                        "ANDROID": 428,
                        "IOS":    1053,
                        "WINDOWS": 327
                    },{
                        "date": "2017-12-29",
                        "ANDROID": 445,
                        "IOS":    1063,
                        "WINDOWS": 319
                    },{
                        "date": "2017-12-22",
                        "ANDROID": 430,
                        "IOS":    876,
                        "WINDOWS": 287
                    },{
                        "date": "2017-12-15",
                        "ANDROID": 388,
                        "IOS":    939,
                        "WINDOWS": 357
                    },{
                        "date": "2017-12-08",
                        "ANDROID": 393,
                        "IOS":    1069,
                        "WINDOWS": 372
                    },{
                        "date": "2017-12-01",
                        "ANDROID": 402,
                        "IOS":    1174,
                        "WINDOWS": 417
                    },{
                        "date": "2017-11-24",
                        "ANDROID": 338,
                        "IOS":    1062,
                        "WINDOWS": 392
                    },{
                        "date": "2017-11-17",
                        "ANDROID": 357,
                        "IOS":    1083,
                        "WINDOWS": 390
                    },{
                        "date": "2017-11-10",
                        "ANDROID": 369,
                        "IOS":    995,
                        "WINDOWS": 389
                    },{
                        "date": "2017-11-03",
                        "ANDROID": 321,
                        "IOS":    894,
                        "WINDOWS": 408
                    },{
                        "date": "2017-10-27",
                        "ANDROID": 358,
                        "IOS":    921,
                        "WINDOWS": 401
                    },{
                        "date": "2017-10-20",
                        "ANDROID": 313,
                        "IOS":    916,
                        "WINDOWS": 415
                    },{
                        "date": "2017-10-13",
                        "ANDROID": 295,
                        "IOS":    830,
                        "WINDOWS": 431
                    },{
                        "date": "2017-10-06",
                        "ANDROID": 312,
                        "IOS":    803,
                        "WINDOWS": 414
                    },{
                        "date": "2017-09-29",
                        "ANDROID": 314,
                        "IOS":    766,
                        "WINDOWS": 374
                    },{
                        "date": "2017-09-22",
                        "ANDROID": 322,
                        "IOS":   799,
                        "WINDOWS": 381
                    },{
                        "date": "2017-09-15",
                        "ANDROID":  286,
                        "IOS":  774,
                        "WINDOWS": 379
                    },{
                        "date": "2017-09-08",
                        "ANDROID":  273,
                        "IOS":  799,
                        "WINDOWS": 424
                    },{
                        "date": "2017-09-01",
                        "ANDROID": 265,
                        "IOS": 694,
                        "WINDOWS": 396
                    },{
                        "date": "2017-08-25",
                        "ANDROID": 232,
                        "IOS": 693,
                        "WINDOWS": 366
                    },{
                        "date": "2017-08-18",
                        "ANDROID": 226,
                        "IOS": 612,
                        "WINDOWS": 326
                    }, {
                        "date": "2017-08-11",
                        "ANDROID": 220,
                        "IOS": 639,
                        "WINDOWS": 326    
                    }, {
                        "date": "2017-08-04",
                        "ANDROID": 233,
                        "IOS": 597,
                        "WINDOWS": 342    
                    }, {
                        "date": "2017-07-28",
                        "ANDROID": 215,
                        "IOS": 555,
                        "WINDOWS": 307
                    }, {
                        "date": "2017-07-21",
                       "ANDROID": 192,
                        "IOS": 499,
                        "WINDOWS": 332
                    }, {
                        "date": "2017-07-14",
                        "ANDROID": 203,
                        "IOS": 541,
                        "WINDOWS": 321
                    },{
                        "date": "2017-07-07",
                        "ANDROID": 214,
                        "IOS": 507,
                        "WINDOWS": 254
                    }, {
                        "date": "2017-06-30",
                        "ANDROID": 203,
                        "IOS": 526,
                        "WINDOWS": 255
                    }, {
                        "date": "2017-06-23",
                        "ANDROID": 186,
                        "IOS": 502,
                        "WINDOWS": 295
                    }, {    
                        "date": "2017-06-16",
                        "ANDROID": 190,
                        "IOS": 494,
                        "WINDOWS": 307
                    }, {
                        "date": "2017-06-09",
                        "ANDROID": 193,
                        "IOS": 477,
                        "WINDOWS": 263
                    }, {
                        "date": "2017-06-02",
                        "ANDROID": 195,
                        "IOS": 514,
                        "WINDOWS": 276
                    },{
                        "date": "2017-05-26",
                        "ANDROID": 216,
                        "IOS": 545,
                        "WINDOWS": 284
                    }, {
                        "date": "2017-05-19",
                        "ANDROID": 171,
                        "IOS": 457,
                        "WINDOWS": 268
                    }, {
                        "date": "2017-05-12",
                        "ANDROID": 214,
                        "IOS": 522,
                        "WINDOWS": 313
                    }, {
                        "date": "2017-05-05",
                        "ANDROID": 190,
                        "IOS": 485,
                        "WINDOWS": 300
                    }, {
                        "date": "2017-04-28",
                        "ANDROID": 157,
                        "IOS": 489,
                        "WINDOWS": 319
                    }, {
                        "date": "2017-04-21",
                        "ANDROID": 177,
                        "IOS": 447,
                        "WINDOWS": 304
                    }, {
                        "date": "2017-04-14",
                        "ANDROID": 194,
                        "IOS": 485,
                        "WINDOWS": 286
                    }, {
                        "date": "2017-04-07",
                        "ANDROID": 198,
                        "IOS": 528,
                        "WINDOWS": 309
                    }, {
                        "date": "2017-03-31",
                        "ANDROID": 200,
                        "IOS": 488,
                        "WINDOWS": 315
                    }, {
                        "date": "2017-03-24",
                        "ANDROID": 186,
                        "IOS": 461,
                        "WINDOWS": 278
                    }, {
                        "date": "2017-03-17",
                        "ANDROID": 182,
                        "IOS": 515,
                        "WINDOWS": 296
                    }, {
                        "date": "2017-03-10",
                        "ANDROID": 214,
                        "IOS": 531,
                        "WINDOWS": 310
                    }, {
                        "date": "2017-03-03",
                        "ANDROID": 210,
                        "IOS": 506,
                        "WINDOWS": 330
                    }]
              }];

    return conversion;
}


function getchartProperty(chartData){

  var chartProperty = {
    "type": "serial",
    "theme": "light",
    "marginRight": 40,
    "marginLeft": 40,
    "autoMarginOffset": 20,
    "mouseWheelZoomEnabled":true,
    "dataDateFormat": "YYYY-MM-DD",
//    "legend": {
//        "useGraphSettings": true
//    },
    "legend": {
        "equalWidths": true,
       
        "position": "top",
        "valueAlign": "left",
        "valueWidth": 30
    },
    "dataProvider": chartData,
    "synchronizeGrid":true,
    "valueAxes": [{
        "id":"v1",
        "axisAlpha": 0,
        "position": "left",
        "ignoreAxisWidth":true
    }, {
        "id":"v2",
        "axisAlpha": 0,
        "position": "left",
        "ignoreAxisWidth":true
    }, {
        "id":"v3",
        "axisAlpha": 0,
        "position": "left",
        "ignoreAxisWidth":true
    }, {
        "id":"v4",
        "axisAlpha": 0,
        "position": "left",
        "ignoreAxisWidth":true
    }],
    "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
    },
    "graphs": [{
  //      "valueAxis": "v1",
        // "balloon":{
     //      "drop":true,
     //      "adjustBorderColor":false,
     //      "color":"#ffffff"
     //    },
         "fillAlphas": 0.2,
        "lineColor": "#FF6600",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#ffffff",
        "useLineColorForBulletBorder": true,
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "useLineColorForBulletBorder": true,
        "title": "ANDROID",
        "valueField": "ANDROID",
  //  "fillAlphas": 0
    }, {
    //    "valueAxis": "v2",
        // "balloon":{
      //     "drop":true,
      //     "adjustBorderColor":false,
      //     "color":"#ffffff"
      //   },
         "fillAlphas": 0.2,
        "lineColor": "#2CDFF2",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#ffffff",
        "useLineColorForBulletBorder": true,
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "title": "IOS",
        "valueField": "IOS",
  //  "fillAlphas": 0
    }, {
    //    "valueAxis": "v2",
        // "balloon":{
      //     "drop":true,
      //     "adjustBorderColor":false,
      //     "color":"#ffffff"
      //   },
         "fillAlphas": 0.2,
        "lineColor": "#7DD462",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#ffffff",
        "useLineColorForBulletBorder": true,
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "title": "WINDOWS",
        "valueField": "WINDOWS",
  //  "fillAlphas": 0
    }, {
    //    "valueAxis": "v2",
        // "balloon":{
      //     "drop":true,
      //     "adjustBorderColor":false,
      //     "color":"#ffffff"
      //   },
         "fillAlphas": 0.2,
        "lineColor": "#7001EF",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#ffffff",
        "useLineColorForBulletBorder": true,
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "title": "ALL",
        "valueField": "ALL",
  //  "fillAlphas": 0
    }],
    "chartScrollbar": [{
      "graph": "g1",
      "scrollbarHeight": 80,
      "backgroundAlpha": 0,
      "selectedBackgroundAlpha": 0.1,
      "selectedBackgroundColor": "#888888",
      "graphFillAlpha": 0,
      "graphLineAlpha": 0.5,
      "selectedGraphFillAlpha": 0,
      "selectedGraphLineAlpha": 1,
      "autoGridCount": true,
      "color": "#AAAAAA",
      "resizeEnabled": false
    },{
      "graph": "g2",
      "scrollbarHeight": 80,
      "backgroundAlpha": 0,
      "selectedBackgroundAlpha": 0.1,
      "selectedBackgroundColor": "#888888",
      "graphFillAlpha": 0,
      "graphLineAlpha": 0.5,
      "selectedGraphFillAlpha": 0,
      "selectedGraphLineAlpha": 1,
      "autoGridCount": true,
      "color": "#",
      "resizeEnabled": false
    },{
      "graph": "g3",
      "scrollbarHeight": 80,
      "backgroundAlpha": 0,
      "selectedBackgroundAlpha": 0.1,
      "selectedBackgroundColor": "#888888",
      "graphFillAlpha": 0,
      "graphLineAlpha": 0.5,
      "selectedGraphFillAlpha": 0,
      "selectedGraphLineAlpha": 1,
      "autoGridCount": true,
      "color": "#",
      "resizeEnabled": false
    },{
      "graph": "g4",
      "scrollbarHeight": 80,
      "backgroundAlpha": 0,
      "selectedBackgroundAlpha": 0.1,
      "selectedBackgroundColor": "#888888",
      "graphFillAlpha": 0,
      "graphLineAlpha": 0.5,
      "selectedGraphFillAlpha": 0,
      "selectedGraphLineAlpha": 1,
      "autoGridCount": true,
      "color": "#",
      "resizeEnabled": false
    }],
    "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha": 0,
        "valueLineAlpha": 0.2,
        "showCursorAt": new Date("09/01/2017")
    },
    "valueScrollbar":{
      "oppositeAxis":false,
      "offset":80,
      "scrollbarHeight":5,
      
    },
    "categoryField": "date",
    "categoryAxis": {
        "parseDates": true,
        "dashLength": 1,
        "axisColor": "#DADADA",
        "minorGridEnabled": true
    },
    
    "export": {
      "enabled": true,
        "position": "bottom-right"
     }
}

return chartProperty;
}





