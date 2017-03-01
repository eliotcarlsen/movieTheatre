function movie(name, time){
  this.movieName = name;
  this.moviePrice = 20;
  this.movieTime = time;
}

movie.prototype.discountPrice = function(age) {
  if ((age === "senior") && (this.movieTime === "matinee")) {
  return this.moviePrice * .3;
  console.log(this.moviePrice);
  }
  else if(age === "senior") {
    return this.moviePrice * .5;
  }
  else if(this.movieTime === "matinee"){
    return this.moviePrice * .7;
  }
  else { return this.moviePrice; }
};

var moonlight = new movie ("Moonlight", ["12pm", "4pm", "6pm"]);
var chinatown = new movie ("Chinatown", ["1pm", "3pm", "7pm"]);
var pi = new movie ("Pi", ["4pm", "8pm"]);
var theThirdMan = new movie ("The Third Man", ["3pm", "6pm", "9pm"]);
var twentiethCenturyWomen = new movie ("20th Century Women", ["6pm", "10pm"]);

var movieNameArray = [moonlight, chinatown, pi, theThirdMan, twentiethCenturyWomen];

var dynamicOptions = function() {
  movieNameArray.forEach(function(movieNameOption) {
    $("#movieOption").append("<option>" + movieNameOption.movieName + "</option>");
  })
};

var dynamicTime = function(movieChoice) {
  $("#movieTimes").empty();
  if(movieChoice === "Moonlight") {
    for(var i = 0; i < moonlight.movieTime.length ; i++) {
      $("#movieTimes").append("<option>" + moonlight.movieTime[i] + "</option>");
      console.log(moonlight.movieTime[i]);
    }
  } else if(movieChoice === "Chinatown") {
    for(var i = 0; i < chinatown.movieTime.length ; i++) {
      $("#movieTimes").append("<option>" + chinatown.movieTime[i] + "</option>");
      console.log(chinatown.movieTime[i]);
    }
  } else if(movieChoice === "Pi") {
    for(var i = 0; i < pi.movieTime.length ; i++) {
      $("#movieTimes").append("<option>" + pi.movieTime[i] + "</option>");
      console.log(pi.movieTime[i]);
    }
  } else if(movieChoice === "The Third Man") {
    for(var i = 0; i < theThirdMan.movieTime.length ; i++) {
      $("#movieTimes").append("<option>" + theThirdMan.movieTime[i] + "</option>");
      console.log(theThirdMan.movieTime[i]);
    }
  } else if(movieChoice === "20th Century Women") {
    for(var i = 0; i < twentiethCenturyWomen.movieTime.length ; i++) {
      $("#movieTimes").append("<option>" + twentiethCenturyWomen.movieTime[i] + "</option>");
      console.log(twentiethCenturyWomen.movieTime[i]);
    }
  }
}

var matinee = function(time) {
  if ((time === "12pm") || (time ===  "1pm") || (time === "3pm" )){
    return time = "matinee";
  } else {
    return time = "regular";
  };
};




$(document).ready(function(){
  dynamicOptions();
  $("#form1").submit(function(event){
    event.preventDefault();
    var userMovie = $("#movieOption").val();
    dynamicTime(userMovie);
  })
  $("#form2").submit(function(event){
    event.preventDefault();
    var movieToSee = $("#movieOption").val();
    var age = $("input:radio[name=age]:checked").val();// "senior" "general"
    var time = $("#movieTimes").val();
    var timeResult = matinee(time);
    var finalMovieResult = new movie (movieToSee, timeResult);
    var priceResult = finalMovieResult.discountPrice(age);
    console.log(priceResult);
    $("#dollars2").text("Your Ticket will be " + priceResult + " dollars");



  });
});


//$("#movieOption").on("click", function(){

  // name:
  // price:
  // time array:
  // age?:
  //
  // ticket price
  // discount.prototype.price senior rates, matinee rates, non-first-release rates...
  //   10% off...
  //   20% off...
  //   var flavor = $("input:radio[name=flavor]:checked").val();
