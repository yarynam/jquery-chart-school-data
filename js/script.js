$(document).ready(function() {
     getData();
});

function getData() {
  $.getJSON("js/columbia.json", function(schoolData){
    //callback
    loopThoughData(schoolData);
  })
}

function loopThoughData (s) {
  for (i=0; i<s.length; i++) {
    var schoolName = s[i]["SCHOOL_NAME"];
    var gradWhitePct = s[i]["GRADUATES_WHITE_PCT"];
    var year = s[i]["YEAR"];


    var barWidth = gradWhitePct * 5;
    var labelPosition = barWidth + 50;
    var circlePosition = barWidth + 35;
    if (schoolName === "FREDERICK DOUGLASS HIGH") {
      $(".chart").append("<p class='year'>" + year + "</p>");
      $(".chart").append("<div class='bar' style='width:"+ barWidth +"px; margin-left:35px'></div>");
      $(".chart").append("<div class='circle' style='margin-left:"+ circlePosition +"px'></div>");
      $(".chart").append("<p class='pct' style='margin-left:"+ labelPosition + "px'>" + gradWhitePct +"%" + "</p>");
    }
  }
}
