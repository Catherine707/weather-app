# AGENTS.md — Weather App (Open-Meteo)

## 1. Stack Tecnológico
- **Frontend:** HTML5, CSS3 y JavaScript (Vanilla / puro), sin frameworks externos.
- **Estilos:** Diseño personalizado con una paleta de colores **rojo oscuro** (`#8b0000`, `#b22222`, `#4a0000`) como tema principal, asegurando un diseño limpio y moderno.
- **Control de versiones:** Git / GitHub (`https://github.com/Catherine707`).

## 2. Fuente de Datos (API)
- Se utiliza la API pública y gratuita de **Open-Meteo** (sin necesidad de API keys):
  - **Geocodificación:** `https://geocoding-api.open-meteo.com/v1/search?name={ciudad}` para resolver las coordenadas de cualquier ciudad.
  - **Clima actual y Pronóstico:** `https://api.open-meteo.com/v1/forecast` para obtener la temperatura, sensación térmica, viento, humedad y el pronóstico de 3 días (máximas y mínimas).

## 3. Requisitos Funcionales Obligatorios
1. **Campo de búsqueda:** Permite buscar ciudades y mapear sus coordenadas automáticamente.
2. **Clima actual:** Muestra temperatura, condición del cielo, viento y humedad con un diseño en tonos rojo oscuro.
3. **Pronóstico de 3 días:** Visualización clara de las temperaturas máximas y mínimas de los próximos días.
4. **Estado de carga (Loading):** Indicador visual activo mientras se consultan las APIs.
5. **Manejo robusto de errores:** Mensajes claros en pantalla si la ciudad no existe, si hay errores de red o desconexión (evitando bloqueos en la interfaz).
6. **Diseño Responsivo:** Adaptado completamente para dispositivos móviles y computadoras.

## 4. Convenciones de Código y Reglas del Proyecto
- El código debe estar limpio, comentado y estructurado de forma modular (separando la lógica de la API de la manipulación del DOM).
- No incluir credenciales ni llaves sensibles en el código versionado.
- Explicar las decisiones técnicas y cambios realizados en cada paso.