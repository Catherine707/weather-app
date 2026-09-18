const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error-message');
const errorText = document.getElementById('error-text');
const weatherResult = document.getElementById('weather-result');

const cityNameEl = document.getElementById('city-name');
const currentTempEl = document.getElementById('current-temp');
const apparentTempEl = document.getElementById('apparent-temp');
const weatherDescEl = document.getElementById('weather-description');
const windSpeedEl = document.getElementById('wind-speed');
const humidityEl = document.getElementById('humidity');
const forecastCardsEl = document.getElementById('forecast-cards');

searchBtn.addEventListener('click', handleSearch);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
});

async function handleSearch() {
    const cityName = cityInput.value.trim();
    if (!cityName) {
        showError('Ingresa el nombre de una ciudad.');
        return;
    }

    showLoading();

    try {
        // 1. Obtener coordenadas con la API de Geocodificación
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=es&format=json`;
        const geoResponse = await fetch(geoUrl);
        
        if (!geoResponse.ok) throw new Error('Error de red al buscar la ciudad.');
        
        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            throw new Error(`No se encontró la ciudad "${cityName}". Intenta con otra.`);
        }

        const location = geoData.results[0];
        const latitude = location.latitude;
        const longitude = location.longitude;
        const name = location.name;
        const country = location.country || '';

        // 2. Obtener el clima actual y pronóstico con Open-Meteo asegurando las coordenadas
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,relative_humidity_2m&daily=temperature_2m_max,temperature_2m_min&forecast_days=3&timezone=auto`;
        
        const weatherResponse = await fetch(weatherUrl);

        if (!weatherResponse.ok) throw new Error('Error al obtener los datos del clima.');

        const weatherData = await weatherResponse.json();

        displayWeather(name, country, weatherData);

    } catch (error) {
        const message = error instanceof TypeError
            ? 'No se pudo conectar. Revisa tu conexión a Internet e inténtalo nuevamente.'
            : error.message;
        showError(message);
    }
}

function showLoading() {
    loadingDiv.classList.remove('hidden');
    errorDiv.classList.add('hidden');
    weatherResult.classList.add('hidden');
}

function showError(message) {
    loadingDiv.classList.add('hidden');
    weatherResult.classList.add('hidden');
    errorText.textContent = message;
    errorDiv.classList.remove('hidden');
}

function displayWeather(name, country, data) {
    loadingDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');
    weatherResult.classList.remove('hidden');

    // Clima actual
    cityNameEl.textContent = `${name}, ${country}`;
    currentTempEl.textContent = `${data.current.temperature_2m}°C`;
    apparentTempEl.textContent = `Sensación térmica: ${data.current.apparent_temperature}°C`;
    windSpeedEl.textContent = `${data.current.wind_speed_10m} km/h`;
    humidityEl.textContent = `${data.current.relative_humidity_2m}%`;
    
    // Interpretación del código del clima
    weatherDescEl.textContent = `Condición: ${getWeatherDescription(data.current.weather_code)}`;

    // Pronóstico de 3 días
    forecastCardsEl.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const date = data.daily.time[i];
        const maxTemp = data.daily.temperature_2m_max[i];
        const minTemp = data.daily.temperature_2m_min[i];

        const card = document.createElement('div');
        card.className = 'forecast-card';
        card.innerHTML = `
            <div class="day">${formatDate(date)}</div>
            <div class="temps">Máx: <strong>${maxTemp}°C</strong></div>
            <div class="temps">Mín: <strong>${minTemp}°C</strong></div>
        `;
        forecastCardsEl.appendChild(card);
    }
}

function getWeatherDescription(code) {
    const codes = {
        0: 'Despejado',
        1: 'Principalmente despejado',
        2: 'Parcialmente nublado',
        3: 'Nublado',
        45: 'Niebla',
        48: 'Niebla con escarcha',
        51: 'Llovizna ligera',
        53: 'Llovizna moderada',
        55: 'Llovizna intensa',
        56: 'Llovizna helada ligera',
        57: 'Llovizna helada intensa',
        61: 'Lluvia ligera',
        63: 'Lluvia moderada',
        65: 'Lluvia intensa',
        66: 'Lluvia helada ligera',
        67: 'Lluvia helada intensa',
        71: 'Nevada ligera',
        73: 'Nevada moderada',
        75: 'Nevada intensa',
        77: 'Granos de nieve',
        80: 'Chubascos ligeros',
        81: 'Chubascos moderados',
        82: 'Chubascos intensos',
        85: 'Chubascos de nieve ligeros',
        86: 'Chubascos de nieve intensos',
        95: 'Tormenta eléctrica',
        96: 'Tormenta eléctrica con granizo ligero',
        99: 'Tormenta eléctrica con granizo intenso'
    };
    return codes[code] || `Condición (WMO: ${code})`;
}

function formatDate(dateString) {
    const options = { weekday: 'short', month: 'numeric', day: 'numeric' };
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('es-ES', options);
}
