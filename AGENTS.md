# AGENTS.md — Weather App (Open-Meteo)

## 1. Objetivo del proyecto

Desarrollar una aplicación web del clima que permita buscar una ciudad,
consultar sus coordenadas mediante Open-Meteo y mostrar el clima actual
junto con un pronóstico de tres días.

## 2. Stack tecnológico

- HTML5 para la estructura de la interfaz.
- CSS3 para el diseño visual y responsivo.
- JavaScript puro (Vanilla JavaScript) para la lógica.
- Fetch API para realizar las peticiones HTTP.
- Git y GitHub para control de versiones.
- No utilizar frameworks ni dependencias externas.

## 3. Diseño visual

La interfaz utiliza una paleta basada en tonos rojo oscuro:

- `#8b0000`
- `#2d0a0a`
- `#ff4d4d`

El diseño debe funcionar correctamente tanto en computadoras como en
dispositivos móviles.

## 4. Fuente de datos

La aplicación utiliza la API pública y gratuita de Open-Meteo,
sin necesidad de API keys.

### Geocodificación

`https://geocoding-api.open-meteo.com/v1/search`

Se utiliza para transformar el nombre de una ciudad en latitud y longitud.

### Pronóstico

`https://api.open-meteo.com/v1/forecast`

Se utiliza para obtener:

- Temperatura actual.
- Sensación térmica.
- Humedad.
- Velocidad del viento.
- Código meteorológico WMO.
- Temperatura máxima y mínima para el pronóstico de tres días.

## 5. Ejecución del proyecto

La aplicación no requiere instalación de dependencias.

El archivo principal es:

`index.html`

Para realizar una comprobación sencilla puede abrirse localmente en el
navegador. Durante el desarrollo también puede utilizarse un servidor HTTP
local si se requiere.

## 6. Requisitos funcionales

1. Permitir buscar una ciudad.
2. Ejecutar la búsqueda mediante botón o tecla Enter.
3. Mostrar el clima actual.
4. Mostrar un pronóstico de al menos tres días.
5. Mostrar un indicador de carga durante las peticiones.
6. Mostrar mensajes comprensibles cuando la ciudad no existe.
7. Manejar errores de conexión sin congelar la aplicación.
8. Adaptar la interfaz a pantallas de computadora y teléfono.

## 7. Estructura del proyecto

- `index.html`: estructura principal de la aplicación.
- `css/styles.css`: estilos y diseño responsivo.
- `js/app.js`: lógica JavaScript, llamadas a las APIs y manipulación del DOM.
- `AGENTS.md`: reglas y contexto del proyecto para OpenCode.
- `.gitignore`: archivos que Git debe ignorar.
- `README.md`: documentación general del repositorio.

## 8. Convenciones de código

- Utilizar nombres descriptivos para variables y funciones.
- Mantener separados HTML, CSS y JavaScript.
- Utilizar `async/await` para las operaciones asíncronas.
- Utilizar `try/catch` para manejar errores.
- No incluir credenciales ni llaves en archivos versionados.
- Evitar dependencias externas innecesarias.
- Mantener funciones pequeñas y con una responsabilidad clara.
- Explicar decisiones técnicas importantes.
- Revisar los cambios antes de realizar un commit.

## 9. Flujo de la aplicación

- `handleSearch()` obtiene el nombre de la ciudad ingresada por el usuario.
- La API de geocodificación de Open-Meteo devuelve el primer resultado utilizando `count=1`.
- La latitud y longitud obtenidas se utilizan para realizar la consulta del clima.
- La consulta de pronóstico utiliza `timezone=auto` y `forecast_days=3`.
- Los datos actuales utilizados son temperatura, sensación térmica, humedad, velocidad del viento y código meteorológico WMO.
- El pronóstico utiliza `data.daily.time`, `temperature_2m_max` y `temperature_2m_min`.
- Si la ciudad no existe o una petición falla, la aplicación debe mostrar un mensaje de error y salir del estado de carga.

## 10. Relación entre archivos

- `index.html` contiene la estructura de la interfaz y los identificadores utilizados por JavaScript.
- `css/styles.css` contiene el diseño visual y la adaptación responsive.
- `js/app.js` contiene la lógica, las peticiones a Open-Meteo y la manipulación del DOM.
- Si se modifica un identificador utilizado por JavaScript, también debe actualizarse en `index.html`.
- Las clases `hidden`, `forecast-grid` y `forecast-card` relacionan el estado generado por JavaScript con la presentación definida en CSS.