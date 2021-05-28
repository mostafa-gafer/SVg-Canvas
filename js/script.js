var firstChoice = document.getElementById("first");
var firstPercent = document.getElementById("firstPercent");
var firstColor = document.getElementById("firstColor");
var secondChoice = document.getElementById("second");
var secondPercent = document.getElementById("secondPercent");
var secondColor = document.getElementById("secondColor");
var thirdChoice = document.getElementById("third");
var thirdPercent = document.getElementById("thirdPercent");
var thirdColor = document.getElementById("thirdColor");
var fourthChoice = document.getElementById("fourth");
var forthPercent = document.getElementById("forthPercent");
var fourthColor = document.getElementById("fourthColor");
var div = document.getElementById("result");
var errors = document.getElementById("errors");

var pie = document.getElementById("pie");
var doughnut = document.getElementById("doughnut");
var catStatus = document.getElementById("catStatus");
var line = document.getElementById("line");
var bar = document.getElementById("bar");

document.getElementById("draw").addEventListener("click", function () {
  div.innerHTML = "";
  var first = firstChoice.value;
  var second = secondChoice.value;
  var third = thirdChoice.value;
  var fourth = fourthChoice.value;
  var percentages = {
    [first]: parseInt(firstPercent.value),
    [second]: parseInt(secondPercent.value),
    [third]: parseInt(thirdPercent.value),
    [fourth]: parseInt(forthPercent.value),
  };
  if (validate() == true) {
    if (pie.checked) {
      var canvas = document.createElement("canvas");
      canvas.width = 300;
      canvas.height = 300;
      var myPiechart = new Piechart({
        canvas: canvas,
        data: percentages,
        colors: [
          firstColor.value,
          secondColor.value,
          thirdColor.value,
          fourthColor.value,
        ],
        legend: catStatus,
      });
      myPiechart.draw();
      div.appendChild(canvas);
    }
    if (doughnut.checked) {
      var canvas = document.createElement("canvas");
      canvas.width = 300;
      canvas.height = 300;

      var myDougnutChart = new Piechart({
        canvas: canvas,
        data: percentages,
        colors: [
          firstColor.value,
          secondColor.value,
          thirdColor.value,
          fourthColor.value,
        ],
        doughnutHoleSize: 0.5,
        legend: catStatus,
      });
      myDougnutChart.draw();
      div.appendChild(canvas);
    }
    if (line.checked) {
      drawLineChart();
    }
    if (bar.checked) {
      drawBarChart();
    }
  } else {
    errors.classList.remove("d-none");
  }
});
function drawLineChart() {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "500");
  svg.setAttribute("height", "600");
  drawRepeatedLines(svg);
  drawRepeatedLines2(svg);
  drawRepeatedDots(svg);
  drawNumbers(svg);
  drawHorizontalLine(svg);
  drawVerticalLine(svg);
  drawCateg(svg);
  drawRepeatedHorizontalDots(svg);
  drawColoredDots(svg, [
    firstColor.value,
    secondColor.value,
    thirdColor.value,
    fourthColor.value,
  ]);
  div.appendChild(svg);
}
function drawBarChart() {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "500");
  svg.setAttribute("height", "600");
  drawRepeatedDots(svg);
  drawNumbers(svg);
  drawHorizontalLine(svg);
  drawVerticalLine(svg);
  drawCateg(svg);
  drawRepeatedHorizontalDots(svg);
  drawColoredBars(svg, [
    firstColor.value,
    secondColor.value,
    thirdColor.value,
    fourthColor.value,
  ]);
  div.appendChild(svg);
}

function validate() {
  var falsee = true;
  var ul = document.getElementById("errorsList");
  errors.classList.add("d-none");
  ul.innerHTML = "";
  if (/^[a-zA-Z][a-zA-Z0-9 ]+$/gi.test(firstChoice.value) == false) {
    errors.classList.remove("d-none");
    var li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML =
      "First Data Input Don't allow to be empty and must start with alphabet letter";
    falsee = false;
  }

  if (/^[a-zA-Z][a-zA-Z0-9 ]+$/gi.test(secondChoice.value) == false) {
    errors.classList.remove("d-none");
    var li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML =
      "Second Data Input Don't allow to be empty and must start with alphabet letter";
    falsee = false;
  }
  if (/^[a-zA-Z][a-zA-Z0-9 ]+$/gi.test(thirdChoice.value) == false) {
    errors.classList.remove("d-none");
    var li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML =
      "Third Data Input Don't allow to be empty and must start with alphabet letter";
    falsee = false;
  }
  if (/^[a-zA-Z][a-zA-Z0-9 ]+$/gi.test(fourthChoice.value) == false) {
    errors.classList.remove("d-none");
    var li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML =
      "Fourth Data Input Don't allow to be empty and must start with alphabet letter";
    falsee = false;
  }
  if (
    bar.checked == false &&
    pie.checked == false &&
    doughnut.checked == false &&
    line.checked == false
  ) {
    errors.classList.remove("d-none");
    var li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = "You must at least check on one of the charts";
    falsee = false;
  }
  return falsee;
}
