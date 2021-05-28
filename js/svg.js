function drawVerticalLine(_svg) {
  var verticalLine = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );
  verticalLine.setAttribute("x1", "30");
  verticalLine.setAttribute("y1", "10");
  verticalLine.setAttribute("x2", "30");
  verticalLine.setAttribute("y2", "490");
  verticalLine.setAttribute("style", "stroke:rgb(0,0,0);stroke-width:2");
  _svg.appendChild(verticalLine);
}
function drawHorizontalLine(_svg) {
  var horizontalLine = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );
  horizontalLine.setAttribute("x1", "30");
  horizontalLine.setAttribute("y1", "490");
  horizontalLine.setAttribute("x2", "500");
  horizontalLine.setAttribute("y2", "490");
  horizontalLine.setAttribute("style", "stroke:rgb(0,0,0);stroke-width:2");

  _svg.appendChild(horizontalLine);
}

function drawRepeatedLines(_svg) {
  for (let i = 10; i <= 490; i += 48) {
    var horizontalLines = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );
    horizontalLines.setAttribute("x1", "30");
    horizontalLines.setAttribute("y1", i);
    horizontalLines.setAttribute("x2", "500");
    horizontalLines.setAttribute("y2", i);
    horizontalLines.setAttribute("style", "stroke:rgb(0,0,0);stroke-width:0.5");

    _svg.appendChild(horizontalLines);
  }
}

function drawRepeatedLines2(_svg) {
  for (let i = 60; i <= 490; i += 120) {
    var verticalLines = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );
    verticalLines.setAttribute("x1", i);
    verticalLines.setAttribute("y1", "10");
    verticalLines.setAttribute("x2", i);
    verticalLines.setAttribute("y2", "490");
    verticalLines.setAttribute("style", "stroke:rgb(0,0,0);stroke-width:0.5");
    _svg.appendChild(verticalLines);
  }
}
function drawRepeatedDots(_svg) {
  for (let i = 10; i <= 490; i += 48) {
    var blackDot = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    blackDot.setAttribute("cx", "30");
    blackDot.setAttribute("cy", i);
    blackDot.setAttribute("r", "4");
    blackDot.setAttribute("fill", "black");

    _svg.appendChild(blackDot);
  }
}
function drawNumbers(_svg) {
  var x = 100;
  for (let i = 10; i <= 490; i += 48) {
    var number = document.createElementNS("http://www.w3.org/2000/svg", "text");
    number.setAttribute("x", "0");
    number.setAttribute("y", i);
    number.setAttribute("fill", "black");
    number.innerHTML = x;
    x -= 10;
    _svg.appendChild(number);
  }
}

function drawCateg(_svg) {
  var first = firstChoice.value;
  var second = secondChoice.value;
  var third = thirdChoice.value;
  var forth = fourthChoice.value;
  var firstPlace = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );
  var secondPlace = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );
  var thirdPlace = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );
  var forthPlace = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );
  firstPlace.setAttribute("x", "60");
  firstPlace.setAttribute("y", "520");
  firstPlace.setAttribute("fill", "black");
  firstPlace.innerHTML = first;

  secondPlace.setAttribute("x", "180");
  secondPlace.setAttribute("y", "520");
  secondPlace.setAttribute("fill", "black");
  secondPlace.innerHTML = second;

  thirdPlace.setAttribute("x", "300");
  thirdPlace.setAttribute("y", "520");
  thirdPlace.setAttribute("fill", "black");
  thirdPlace.innerHTML = third;

  forthPlace.setAttribute("x", "420");
  forthPlace.setAttribute("y", "520");
  forthPlace.setAttribute("fill", "black");
  forthPlace.innerHTML = forth;
  //var firstPlace = `<text x="60" y="520" fill="black">${first}</text>`;
  // var secondPlace = `<text x="180" y="520" fill="black">${second}</text>`;
  // var thirdPlace = `<text x="300" y="520" fill="black">${third}</text>`;
  // var forthPlace = `<text x="420" y="520" fill="black">${forth}</text>`;
  _svg.appendChild(firstPlace);
  _svg.appendChild(secondPlace);
  _svg.appendChild(thirdPlace);
  _svg.appendChild(forthPlace);
  //_svg.innerHTML += firstPlace + secondPlace + thirdPlace + forthPlace;
}

function drawRepeatedHorizontalDots(_svg) {
  for (let i = 60; i <= 490; i += 120) {
    var blackDot = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    blackDot.setAttribute("cx", i);
    blackDot.setAttribute("cy", "490");
    blackDot.setAttribute("r", "4");
    blackDot.setAttribute("fill", "black");
    //var blackDot = `<circle cx="${i}" cy="490" r="4" fill="black" />`;
    _svg.appendChild(blackDot);
  }
}

function drawColoredDots(_svg, arr) {
  var x = 60;
  var y;
  var percentArr = [];
  var total =
    parseInt(firstPercent.value) +
    parseInt(secondPercent.value) +
    parseInt(thirdPercent.value) +
    parseInt(forthPercent.value);
  var percentages = {
    first: 100 - (firstPercent.value / total) * 100,
    second: 100 - (secondPercent.value / total) * 100,
    third: 100 - (thirdPercent.value / total) * 100,
    forth: 100 - (forthPercent.value / total) * 100,
  };
  for (const key in percentages) {
    y = (490 * percentages[key]) / 100;
    percentArr.push(y);
  }
  for (let s = 0; s <= 2; s++) {
    var line = `<line x1="${x}" y1="${parseInt(
      percentArr[s]
    )}" x2="${(x += 120)}" y2="${parseInt(
      percentArr[s + 1]
    )}" style="stroke:rgb(0,0,0);stroke-width:2" />`;
    _svg.innerHTML += line;
  }
  x = 60;
  for (let i = 0; i < arr.length; i++) {
    var color = arr[i];
    var dot = `<circle cx="${x}" cy="${parseInt(
      percentArr[i]
    )}" r="4" fill="${color}" />`;
    x += 120;
    _svg.innerHTML += dot;
  }
}

function drawColoredBars(_svg, arr) {
  var x = 60;
  var y;
  var percentArr = [];
  var total =
    parseInt(firstPercent.value) +
    parseInt(secondPercent.value) +
    parseInt(thirdPercent.value) +
    parseInt(forthPercent.value);
  var percentages = {
    first: 100 - (firstPercent.value / total) * 100,
    second: 100 - (secondPercent.value / total) * 100,
    third: 100 - (thirdPercent.value / total) * 100,
    forth: 100 - (forthPercent.value / total) * 100,
  };
  for (const key in percentages) {
    y = (490 * percentages[key]) / 100;
    percentArr.push(y);
  }

  for (let i = 0; i < arr.length; i++) {
    var color = arr[i];
    var rect = `<line x1="${x}" y1="${parseInt(
      percentArr[i]
    )}" x2="${x}" y2="490" style="stroke:${color};stroke-width:25" />`;
    x += 120;
    _svg.innerHTML += rect;
  }
}
