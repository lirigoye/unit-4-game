$(document).ready(function() {

  var bluegem = 0;
  var currentNumber = 0;
  var totalScore = 0;

  var startGame = function () {
    currentNumber = randomNumber(20, 100);
    bluegem = randomNumber(1, 10);
    $("#currentNumber").text(currentNumber)

  }

  startGame ()

  $("#bluegem").on("click", function() {
    totalScore = totalScore + bluegem;
    $("#totalScore").text(totalScore);
  });

  function randomNumber(min,max)
  {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  var greengem = 0;
  var currentNumber = 0;
  var totalScore = 0;

  var startGame = function () {
    currentNumber = randomNumber(20, 100);
    greengem = randomNumber(1, 10);
    $("#currentNumber").text(currentNumber)

  }

  startGame ()

  $("#greengem").on("click", function() {
    totalScore = totalScore + greengem;
    $("#totalScore").text(totalScore);
  });

  function randomNumber(min,max)
  {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  var pinkgem = 0;
  var currentNumber = 0;
  var totalScore = 0;

  var startGame = function () {
    currentNumber = randomNumber(20, 100);
    pinkgem = randomNumber(1, 10);
    $("#currentNumber").text(currentNumber)

  }

  startGame ()

  $("#pinkgem").on("click", function() {
    totalScore = totalScore + pinkgem;
    $("#totalScore").text(totalScore);
  });

  function randomNumber(min,max)
  {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  var yellowgem = 0;
  var currentNumber = 0;
  var totalScore = 0;

  var startGame = function () {
    currentNumber = randomNumber(20, 100);
    yellowgem = randomNumber(1, 10);
    $("#currentNumber").text(currentNumber)

  }

  startGame ()

  $("#yellowgem").on("click", function() {
    totalScore = totalScore + yellowgem;
    $("#totalScore").text(totalScore);
  });

  function randomNumber(min,max)
  {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  if (currenNumber === randonNumber) {
    $("#wins").text(Wins);
    reset();
    
    }
    
    else if (currentNumber>= randomNumber) {
    $("#losses").text(Losses);
    reset();
    
    }


         
});
