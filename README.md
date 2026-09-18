# Weather App con OpenCode

Aplicación web del clima desarrollada como ejercicio académico para el curso de **Programación Comercial** de la carrera de Ingeniería en Sistemas de la Universidad Mesoamericana.

El objetivo principal del proyecto fue construir una aplicación web funcional utilizando un agente de programación mediante **OpenCode**, aplicando planificación, revisión de cambios, pruebas, manejo de errores y control de versiones con Git y GitHub.

---

## Información del proyecto

**Estudiante:** Catherine Mishell Cotí Godínez  
**Carné:** 202308071  
**Curso:** Programación Comercial  
**Docente:** Ing. Fredy Ramírez Solano  

**Repositorio:**  
https://github.com/Catherine707/weather-app

---

## Tecnologías utilizadas

La aplicación fue desarrollada sin frameworks ni dependencias externas.

- HTML5
- CSS3
- JavaScript puro
- Fetch API
- Open-Meteo
- Git
- GitHub
- OpenCode
- GPT-5.6 Sol mediante OpenAI

---

## Objetivo

Desarrollar una aplicación web que permita buscar una ciudad y consultar información meteorológica actual y un pronóstico de tres días.

Además de construir la aplicación, el ejercicio busca demostrar el uso correcto de un agente de programación, revisando cada cambio antes de aceptarlo y utilizando Git como herramienta de control de versiones y recuperación.

---

## Funcionalidades

La aplicación permite:

- Buscar una ciudad por nombre.
- Ejecutar la búsqueda mediante el botón o la tecla Enter.
- Convertir el nombre de la ciudad en latitud y longitud.
- Mostrar la temperatura actual.
- Mostrar la sensación térmica.
- Mostrar la humedad.
- Mostrar la velocidad del viento.
- Interpretar el código meteorológico WMO.
- Mostrar un pronóstico de tres días.
- Mostrar temperatura máxima y mínima de cada día.
- Mostrar un estado de carga mientras se consulta la API.
- Mostrar un mensaje cuando una ciudad no existe.
- Mostrar un mensaje comprensible cuando no existe conexión a Internet.
- Validar búsquedas con el campo vacío.
- Recuperarse de un error de conexión sin necesidad de recargar la página.
- Adaptarse a computadoras, tablets y dispositivos móviles.

---

## Diseño visual

La interfaz utiliza principalmente la siguiente paleta de colores:

- `#8b0000`
- `#2d0a0a`
- `#ff4d4d`

El diseño fue realizado mediante CSS puro y utiliza media queries para adaptar la interfaz a pantallas pequeñas.

---

## Estructura del proyecto

```text
weather-app/
│
├── css/
│   └── styles.css
│
├── js/
│   └── app.js
│
├── .gitignore
├── AGENTS.md
├── index.html
└── README.md
