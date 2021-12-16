//date for header
let date = new Date();
let today = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
document.querySelector("#dateToday").innerHTML = today + "." + month + "." + year;

//http request
let xmlhttp = new XMLHttpRequest();
let link ;
let select = document.getElementById("city");
let value = select.options[select.selectedIndex].value;
select.addEventListener('change', function() {
  console.log('You selected: ', this.value);

if(this.value == "oulu") {
  link = "http://api.openweathermap.org/data/2.5/weather?q=Oulu&units=metric&appid=8036cdada21ac979d3cc49a785eb76f1"
} else if(this.value == "helsinki") {
  link = "http://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&appid=8036cdada21ac979d3cc49a785eb76f1"
} else if(this.value == "rovaniemi") {
  link = "http://api.openweathermap.org/data/2.5/weather?q=Rovaniemi&units=metric&appid=8036cdada21ac979d3cc49a785eb76f1"
} else if(this.value == "joensuu") {
  link = "http://api.openweathermap.org/data/2.5/weather?q=Joensuu&units=metric&appid=8036cdada21ac979d3cc49a785eb76f1"
}


xmlhttp.open("GET", link ,true);


xmlhttp.send();
});
//event handler
xmlhttp.onreadystatechange=function() {
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200){

        //JSON response parse
        let weather = JSON.parse(xmlhttp.responseText);
        
        //temperature
        document.querySelector("#tempButton").addEventListener("click", function() {
          document.getElementById("temperature").innerHTML = Math.round(weather.main.temp) + "&deg;" + "C";
          document.getElementById("feelsLike").innerHTML = Math.round(weather.main.feels_like) + "&deg;" + "C";
        });

        //weather
        document.querySelector("#weatherButton").addEventListener("click", function() {
          document.getElementById("weather").innerHTML = weather.weather[0].main + ": " + weather.weather[0].description;
      });
        
        
  }
}


