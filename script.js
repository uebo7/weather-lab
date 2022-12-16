$(document).ready(function() {

$("button").on("click", function() {

let $input = $("input").val()
let $ajax = $.ajax({
        type: 'GET',
        dataType: 'json',
        url: "https://api.openweathermap.org/data/2.5/weather?q="+$input+"&appid=440505b92e234fc087756502a5241120",
        success: function(data) {
            console.log(data)

let temp = Math.round(((data.main.temp-273.15)*1.8)+32)
let feel = Math.round(((data.main.feels_like-273.15)*1.8)+32)

$("#location").text("Weather For: "+ data.name)
$("#temp").text("Temperature: "+ temp)
$("#feel").text("Feels Like: "+ feel)
$("#weather").text("Weather: "+data.weather[0].main)
        }
    
})

})
})
