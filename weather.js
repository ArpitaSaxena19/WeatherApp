/*let weather = {
    
    fetchWeather: function (city) {
        fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +b7a82e97f70718625cf271bb4bbb33fe
            
        ).then((response)=>{
            if(!response.ok){
                alert("No weather found");
                throw new Error("No weather found");
            }
            return response.json();
        }).then((data)=>{
             console.log(data);
        })
    }*/

function weather() {
    let city=document.querySelector('.search-bar').value;
    console.log(city);
    url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=b7a82e97f70718625cf271bb4bbb33fe&units=metric";
    fetch(url).then((response)=>{
        if (!response.ok) {
            alert("No such city found .");
            throw new Error("No weather found.");
          }
        return response.json();
    }).then((data)=>{
        console.log(data);
        displayWeather(data);
    })
}
function displayWeather(data)
{
    const {name}=data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".humidity").innerText = "Humidity is " + humidity;
    document.querySelector(".temp").innerText = temp+"°C";
    document.querySelector(".description").innerText =  "It is "+description;
    document.querySelector(".wind").innerText =  "The wind speed is "+speed+" km/hr";
}
//weather();