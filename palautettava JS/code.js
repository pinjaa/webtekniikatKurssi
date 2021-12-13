//date for header
let date = new Date();
let today = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
document.querySelector("#dateToday").innerHTML = today + "." + month + "." + year;

//http request
let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Oulu&units=metric&appid=8036cdada21ac979d3cc49a785eb76f1",true);

xmlhttp.send();

//event handler
xmlhttp.onreadystatechange=function() {
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200){

        //JSON response parse
        let weather = JSON.parse(xmlhttp.responseText);
        
        //temperature
        document.querySelector("#tempButton").addEventListener("click", function() {
          document.getElementById("temperature").innerHTML = weather.main.temp + "&deg;" + "C";
          document.getElementById("feelsLike").innerHTML = weather.main.feels_like + "&deg;" + "C";
        });

        //weather
        document.querySelector("#weatherButton").addEventListener("click", function() {
          document.getElementById("weather").innerHTML = weather.weather[0].main + ", " + weather.weather[0].description;
      });
        
        
  }
}


