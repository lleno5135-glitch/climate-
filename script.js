function showClimate() {

    var city = "Chennai";
    var temperature = 32;
    var humidity = 70;
    var condition = "Sunny";

    document.getElementById("city").innerHTML = city;
    document.getElementById("temp").innerHTML = temperature + " °C";
    document.getElementById("humidity").innerHTML = humidity + " %";
    document.getElementById("condition").innerHTML = condition;

    alert("Climate data loaded successfully!");
}
