/*  Original Code by Jaap de Maat & Sion Fletcher - CSM GCD BA Y1 Unit 3 - Jan 2017
    edited by June Huebner - ADD DATA
*/


function setup() {
  //set Canvas to size of window
  createCanvas(windowWidth, windowHeight);

  //Intoduction Page
    background(0);

  //create Button object 1 (London)
  button1 = createButton('London');
  button1.position(25, 20);
  //Load Data when Button 1 is Pressed
  button1.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });

  //create Button object 2 (New York)
  button2 = createButton('New York');
  button2.position(85, 20);
  //Load Data when Button 2 is Pressed
  button2.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22New%20York%2C%20New%20York%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  //create Button object 3 (tokyo)
  button3 = createButton('Tokyo');
  button3.position(156, 20);
  //Load Data when Button 3 is Pressed
  button3.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Tokyo%2C%20Tokyo%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  //create Button object 4 (Bangkok)
  button4 = createButton('Bangkok');
  button4.position(210, 20);
  //Load Data when Button 4 is Pressed
  button4.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22bangkok%2C%20th%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  //create Button object 5 (Munich)
  button5 = createButton('Munich');
  button5.position(275, 20);
  //Load Data when Button 5 is Pressed
  button5.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22munich%2C%20de%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
}


function weatherLoaded(data) {
  var temp = data.query.results.channel.item.condition.temp;
  var windSpeed = data.query.results.channel.wind.speed;
  var windDirection = data.query.results.channel.wind.direction;
  
  //forcast data
  var tempD2H = data.query.results.channel.item.forecast[0].high;
  var tempD2L = data.query.results.channel.item.forecast[0].low;

// HOW to get avarage of tempD2H+tempD2L?!?!
//var tempforcast1 = ((tempD2H+tempD2L)/2);
 



//print data to the console
//print(temp);
//print(windSpeed);
print(tempD2H);
print(tempD2L);
//print(tempforcast1);


  background(0);

  //add data info in bottom left corner of the screen
  //for more information about using text in a P5js sketch visit:
  //http://creative-coding.decontextualize.com/text-and-type/
  
  textSize(15);
  textFont("Helvetica");
  textAlign(CENTER);
     
    fill(205, 219, 242)
    text(windSpeed, 30, windowHeight - 50);
    fill(255, 38, 150);
    text(temp, 30, windowHeight - 30);
    fill(255, 250, 168);
    text(windDirection, 30, windowHeight - 10);
    // text(windangle, 30 windowHeight);

  //create ellipse and set width and height of the ellipse to windSpeed data
  fill(205, 219, 242);
  noStroke();
  ellipse(windowWidth / 2, windowHeight / 2, windSpeed * 10, windSpeed * 10);
  
   //create ellipse and set width and height of the ellipse to temp data
  noFill();
  strokeWeight(8, 150);
  stroke(255, 38, 150, 150);
  ellipse(windowWidth / 4, windowHeight / 2, temp * 2, temp * 2);
  
  
  //create rect and set rotation of rect to windDirection
  translate(windowWidth / 2, windowHeight / 2);
  noFill();
  strokeWeight(10);
  stroke(255, 250, 168);
  angleMode(DEGREES); // Change the mode to DEGREES
  rotate(windDirection);
  rect(0, 0, 150, 5);
  



}