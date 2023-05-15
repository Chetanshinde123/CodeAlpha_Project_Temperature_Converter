function convert() {
  var temperature = parseFloat(document.getElementById("temperature").value);
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var result;
  
    if (from === "Celsius") {
      if (to === "Fahrenheit") {
        result = temperature * 9/5 + 32;
      } else if (to === "Kelvin") {
        result = temperature + 273.15;
      } else {
        result = temperature;
      }
    } 
    else if (from === "Fahrenheit") {
      if (to === "Celsius") {
        result = (temperature - 32) * 5 / 9;
      } else if (to === "Kelvin") {
        result = (temperature - 32) * 5 / 9 + 273.15;
      } else {
        result = temperature;
      }
    } 
    else if(from === "Kelvin") {
      if (to === "Celsius") {
        result = (temperature) - 273.15;
      } else if (to === "Fahrenheit") {
        result = (temperature - 273.15) * 9 / 5 + 32;
      } else {
        result = temperature;
      }
    }
  
    document.getElementById("result").value = result.toFixed(2);
  }
  
