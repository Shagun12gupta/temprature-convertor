function convertToCelsius() {
  var celsiusInput = document.getElementById('celsius');
  var celsius = parseFloat(celsiusInput.value);
  var fahrenheit = (celsius * 9 / 5) + 32;
  var result = document.getElementById('result');
  result.innerHTML = fahrenheit.toFixed(2) + '°F';
  moveArrow(celsius);
}

function convertToFahrenheit() {
  var fahrenheitInput = document.getElementById('fahrenheit');
  var fahrenheit = parseFloat(fahrenheitInput.value);
  var celsius = (fahrenheit - 32) * 5 / 9;
  var result = document.getElementById('result');
  result.innerHTML = celsius.toFixed(2) + '°C';
  moveArrow(celsius);
}

function moveArrow(temperature) {
  const scale = document.querySelector('.scale');
  const arrow = document.getElementById('arrow');
  const maxTemperature = 500;
  const minTemperature = -500;

  if (temperature >= maxTemperature) {
    arrow.style.left = '100%';
  } else if (temperature <= minTemperature) {
    arrow.style.left = '0';
  } else {
    const percentage = ((temperature - minTemperature) / (maxTemperature - minTemperature)) * 100;
    arrow.style.left = percentage + '%';
  }
}

