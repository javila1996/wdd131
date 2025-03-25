document.addEventListener("DOMContentLoaded", function () {
    const temperature = parseFloat(document.getElementById("temperature").textContent);
    const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);
    const windChillElement = document.getElementById("windChill");

    // Wind Chill Calculation
    function calculateWindChill(temp, wind) {
        return (temp <= 10 && wind > 4.8) 
            ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(2) + "°C"
            : "N/A";
    }

    // Display wind chill
    windChillElement.textContent = calculateWindChill(temperature, windSpeed);

    // Set the current year in the footer
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Set the last modified date
    document.getElementById("lastmodified").textContent = document.lastModified;
});
