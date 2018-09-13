$(document).ready(function() {

  $('#waypoint').waypoint(function(direction) {
    if (direction === 'down') {
       
      loadGraph();
    
    }
    else {
    // Code to select the previous section
    }
      
  }, { 
      triggerOnce: true,
      offset: '50%' });

});


var options = {
  //Boolean - Whether we should show a stroke on each segment
  segmentShowStroke : true,
  
  //String - The colour of each segment stroke
  segmentStrokeColor : "#fff",
  
  //Number - The width of each segment stroke
  segmentStrokeWidth : 2,
  
  //The percentage of the chart that we cut out of the middle.
  percentageInnerCutout : 85,
  
  //Boolean - Whether we should animate the chart 
  animation : true,
  
  //Number - Amount of animation steps
  animationSteps : 100,
  
  //String - Animation easing effect
  animationEasing : "easeOutQuart",
  
  //Boolean - Whether we animate the rotation of the Doughnut
  animateRotate : true,

  //Boolean - Whether we animate scaling the Doughnut from the centre
  animateScale : false,
  
  //Function - Will fire on animation completion.
  onAnimationComplete : null
};
var graph1Data = 
  [{
    value: 50,
    color:"red"
  },
  {
    value : 50,
    color : "#e9e9e9"
  }
  ];
var graph2Data = 
  [{
    value: 75,
    color:"red"
  },
  {
    value : 25,
    color : "#e9e9e9"
  }
  ];
var graph3Data = 
  [{
    value: 75,
    color:"red"
  },
  {
    value : 25,
    color : "#e9e9e9"
  }
  ];
  
  var graph4Data = 
  [{
    value: 60,
    color:"red"
  },
  {
    value : 40,
    color : "#e9e9e9"
  }
  ];
  
  var graph5Data = 
  [{
    value: 55,
    color:"red"
  },
  {
    value : 45,
    color : "#e9e9e9"
  }
  ];




function loadGraph()
{
var myDoughnut1 = new Chart(document.getElementById("canvas1").getContext("2d")).Doughnut(graph1Data, options);
var myDoughnut2 = new Chart(document.getElementById("canvas2").getContext("2d")).Doughnut(graph2Data, options);
var myDoughnut3 = new Chart(document.getElementById("canvas3").getContext("2d")).Doughnut(graph3Data, options);
var myDoughnut4 = new Chart(document.getElementById("canvas4").getContext("2d")).Doughnut(graph3Data, options);
var myDoughnut5 = new Chart(document.getElementById("canvas5").getContext("2d")).Doughnut(graph3Data, options);
}

