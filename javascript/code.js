//date for header
let date = new Date();
let today = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
document.querySelector("#dateToday").innerHTML = today + "." + month + "." + year;

//http request
let xmlhttp = new XMLHttpRequest();

document.querySelector("#submitButton").addEventListener("click", function() {

  let city = document.getElementById("cityInput").value
  
  if(city == ""){
    alert("Please insert a city")
  }

  else {
  let link = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8036cdada21ac979d3cc49a785eb76f1`
  xmlhttp.open("GET", link ,true);


  xmlhttp.send();
  }
  
  document.getElementById("cityName").innerHTML = city[0].toUpperCase()
 + city.substring(1)
});
//event handler
xmlhttp.onreadystatechange=function() {
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200){

        //JSON response parse
        let weather = JSON.parse(xmlhttp.responseText);

        let iconcode = weather.weather[0].icon;
        let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        
        
        //temperature
          document.getElementById("temperature").innerHTML = Math.round(weather.main.temp) + "&deg;" + "C";
          document.getElementById("feelsLike").innerHTML = Math.round(weather.main.feels_like) + "&deg;" + "C";
  
        //weather
          document.getElementById("weather").innerHTML = weather.weather[0].main + ": " + weather.weather[0].description;
          document.getElementById("weatherImg").src = iconurl;
      
        
        
  }

}


