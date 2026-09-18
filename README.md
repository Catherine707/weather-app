# Weather App con OpenCode

Aplicación web del clima desarrollada como ejercicio académico para el curso de **Programación Comercial** de la carrera de Ingeniería en Sistemas de la Universidad Mesoamericana.

El objetivo del ejercicio no fue únicamente construir una aplicación funcional, sino aprender a dirigir un agente de programación mediante **OpenCode**, revisar los cambios generados, detectar errores, probar el funcionamiento de la aplicación y mantener un historial organizado mediante Git y GitHub.

---

## Información del proyecto

**Estudiante:** Catherine Mishell Cotí Godínez  
**Carné:** 202308071  
**Curso:** Programación Comercial  
**Docente:** Ing. Fredy Ramírez Solano  

**Repositorio:**  
https://github.com/Catherine707/weather-app

---

# Objetivo

Desarrollar una aplicación web que permita buscar una ciudad y consultar información meteorológica actual junto con un pronóstico de tres días.

El proyecto también busca demostrar el uso adecuado de herramientas de asistencia mediante inteligencia artificial, específicamente OpenCode, utilizando planificación, revisión manual del código, pruebas funcionales y control de versiones.

---

# Tecnologías utilizadas

El proyecto fue desarrollado sin frameworks ni dependencias externas.

- HTML5.
- CSS3.
- JavaScript puro.
- Fetch API.
- Open-Meteo.
- Git.
- GitHub.
- OpenCode.
- GPT-5.6 Sol mediante OpenAI.

---

# Funcionalidades

La aplicación permite:

- Buscar una ciudad por nombre.
- Ejecutar la búsqueda mediante botón.
- Ejecutar la búsqueda mediante la tecla Enter.
- Obtener las coordenadas mediante geocodificación.
- Mostrar la temperatura actual.
- Mostrar la sensación térmica.
- Mostrar la humedad.
- Mostrar la velocidad del viento.
- Mostrar una descripción de la condición meteorológica mediante códigos WMO.
- Mostrar un pronóstico de tres días.
- Mostrar temperatura máxima y mínima por día.
- Mostrar un indicador de carga durante las peticiones.
- Detectar cuando una ciudad no existe.
- Mostrar un mensaje comprensible cuando no existe conexión a Internet.
- Validar búsquedas con el campo vacío.
- Recuperarse de errores de conexión sin recargar la página.
- Adaptarse a computadoras, tablets y teléfonos.

---

# Diseño visual

La interfaz utiliza principalmente la siguiente paleta:

- `#8b0000`
- `#2d0a0a`
- `#ff4d4d`

El diseño fue desarrollado utilizando CSS puro.

También se implementó un comportamiento responsive para adaptar la distribución de los elementos en pantallas pequeñas.

---

# Estructura del proyecto

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
```

## `index.html`

Contiene la estructura principal de la interfaz:

- buscador;
- botón de búsqueda;
- indicador de carga;
- mensaje de error;
- información del clima actual;
- contenedor para el pronóstico.

## `css/styles.css`

Contiene:

- paleta de colores;
- distribución de los elementos;
- tarjetas del pronóstico;
- estados visuales;
- diseño responsive.

## `js/app.js`

Contiene:

- eventos del botón;
- evento de la tecla Enter;
- validación de la ciudad;
- llamadas a Open-Meteo;
- geocodificación;
- consulta del clima;
- manejo de errores;
- interpretación de códigos WMO;
- actualización del DOM.

## `AGENTS.md`

Contiene el contexto y las instrucciones específicas que OpenCode debe considerar antes de modificar el proyecto.

## `.gitignore`

Define los archivos que Git debe ignorar.

## `README.md`

Contiene la documentación general y técnica del proyecto.

---

# Fuente de datos: Open-Meteo

La aplicación utiliza la API pública de **Open-Meteo**, que para este proyecto no requiere una API key.

Se utilizan dos servicios.

---

## Geocodificación

Endpoint:

```text
https://geocoding-api.open-meteo.com/v1/search
```

Su función es convertir el nombre de una ciudad en coordenadas geográficas.

La aplicación obtiene principalmente:

- nombre;
- país;
- latitud;
- longitud.

Ejemplo del flujo:

```text
Quetzaltenango
       ↓
API de geocodificación
       ↓
Latitud + longitud
       ↓
API de pronóstico
```

---

## Pronóstico meteorológico

Endpoint:

```text
https://api.open-meteo.com/v1/forecast
```

Para el clima actual se solicitan:

```text
temperature_2m
apparent_temperature
weather_code
wind_speed_10m
relative_humidity_2m
```

Para los datos diarios:

```text
temperature_2m_max
temperature_2m_min
```

También se utilizan:

```text
forecast_days=3
timezone=auto
```

Esto permite obtener exactamente tres días de pronóstico y utilizar la zona horaria correspondiente a la ubicación consultada.

---

# Ejecución de la aplicación

El proyecto no requiere instalación de paquetes ni dependencias.

El archivo principal es:

```text
index.html
```

Puede abrirse directamente en el navegador para realizar las pruebas del ejercicio.

También puede utilizarse un servidor HTTP local o herramientas como Live Server durante el desarrollo.

---

# Modelo utilizado en OpenCode

Para trabajar con OpenCode se conectó el proveedor OpenAI mediante la suscripción de ChatGPT.

El modelo utilizado fue:

```text
GPT-5.6 Sol
openai/gpt-5.6-sol
```

Se eligió por sus capacidades para:

- analizar código;
- planificar modificaciones;
- generar soluciones;
- detectar posibles problemas;
- explicar decisiones técnicas;
- trabajar sobre varios archivos del proyecto.

El código generado por el agente no se aceptó automáticamente. Cada modificación fue revisada y probada antes de registrarse mediante Git.

---

# Instrucciones globales de OpenCode

Se creó el archivo:

```text
~/.config/opencode/AGENTS.md
```

con las siguientes instrucciones:

```markdown
# Reglas personales de desarrollo

- Responder siempre en español, excepto cuando sea necesario conservar términos técnicos en inglés.
- Antes de modificar varios archivos, explicar brevemente qué cambios se realizarán y por qué.
- No instalar paquetes, frameworks o dependencias sin solicitar mi autorización primero.
- Después de modificar código, indicar qué archivos fueron cambiados y explicar cómo comprobar que los cambios funcionan.
```

Para comprobar que las reglas estaban siendo utilizadas se inició una sesión de OpenCode y se solicitó al agente que enumerara las instrucciones que estaba siguiendo.

Las cuatro reglas aparecieron dentro de las instrucciones activas, junto con otras instrucciones propias del agente y del proyecto.

---

# Configuración de `tui.json`

También se personalizó la interfaz de OpenCode mediante:

```text
~/.config/opencode/tui.json
```

La configuración utilizada durante el ejercicio fue:

```json
{
  "$schema": "https://opencode.ai/tui.json",
  "theme": "synthwave84",
  "attention": {
    "enabled": true,
    "sound": true,
    "notifications": true,
    "volume": 0.5
  },
  "scroll_speed": 4,
  "cursor": {
    "style": "underline",
    "blinking": true
  }
}
```

Los principales cambios fueron:

- cambio del tema `opencode` a `synthwave84`;
- aumento del volumen de las notificaciones;
- aumento de la velocidad de desplazamiento;
- modificación del estilo del cursor;
- mantenimiento de sonidos y notificaciones.

El objetivo fue hacer más cómoda la revisión de respuestas largas y recibir avisos cuando OpenCode requiriera atención.

---

# AGENTS.md del proyecto

OpenCode también utiliza un archivo `AGENTS.md` dentro del proyecto.

Este archivo se creó y actualizó utilizando:

```text
/init
```

Posteriormente fue revisado y complementado manualmente.

Se agregaron o ampliaron aspectos como:

- objetivo del proyecto;
- stack tecnológico;
- diseño;
- Open-Meteo;
- forma de ejecución;
- estructura;
- requisitos funcionales;
- convenciones de código;
- flujo de la aplicación;
- relación entre HTML, CSS y JavaScript.

Esto permitió que `AGENTS.md` funcionara como una memoria técnica del proyecto.

---

# `.gitignore`

El archivo `.gitignore` utilizado es:

```gitignore
.DS_Store
Thumbs.db

.vscode/
.idea/

.env
.env.*

*.log
```

## Explicación de cada entrada

- `.DS_Store`: archivo generado automáticamente por macOS.
- `Thumbs.db`: archivo generado automáticamente por Windows para almacenar miniaturas.
- `.vscode/`: contiene configuraciones personales de Visual Studio Code.
- `.idea/`: contiene configuraciones personales de IDE de JetBrains.
- `.env`: puede contener variables de entorno o información sensible.
- `.env.*`: evita subir otras variantes de archivos de variables de entorno.
- `*.log`: evita versionar archivos de registro generados durante ejecución o depuración.

`AGENTS.md` no se ignora porque forma parte de la documentación técnica del proyecto y debe mantenerse dentro del repositorio.

---

# Explicaciones de las herramientas utilizadas

Durante el desarrollo se utilizaron diferentes funciones de OpenCode y Git. Cada una tuvo un propósito dentro de la planificación, construcción, revisión y documentación del proyecto.

---

## `/init`

El comando `/init` analiza el proyecto actual y genera o actualiza el archivo `AGENTS.md`.

Este archivo ayuda al agente a comprender:

- estructura;
- tecnologías;
- archivos principales;
- funcionamiento;
- convenciones;
- instrucciones específicas.

Durante este proyecto se ejecutó `/init` para que OpenCode analizara la Weather App.

El resultado generado no se aceptó automáticamente.

Primero se revisó y posteriormente se complementó manualmente con información específica del proyecto.

Esto permitió mantener un `AGENTS.md` actualizado y útil durante el desarrollo.

---

## Modo Plan

El modo **Plan** permite que OpenCode analice el proyecto y proponga una estrategia sin modificar los archivos.

Se utilizó para identificar:

- requisitos implementados;
- requisitos pendientes;
- errores;
- casos límite;
- pruebas necesarias;
- manejo de errores;
- pruebas responsive.

El primer plan generado no fue aceptado inmediatamente.

Se discutió con el agente y se solicitó cambiar el orden de algunas pruebas antes de continuar.

Esto permitió participar activamente en la planificación en lugar de aceptar automáticamente las decisiones de la inteligencia artificial.

---

## Modo Build

El modo **Build** permite que OpenCode realice cambios directamente en los archivos.

Se utilizó después de revisar el plan para aplicar cambios específicos.

Entre los cambios realizados se encuentran:

- corrección de parámetros de Open-Meteo;
- mejora del manejo de conexión;
- ampliación de códigos WMO;
- validación de búsqueda vacía.

Después de cada cambio se ejecutó:

```bash
git diff
```

para comprobar exactamente qué había modificado OpenCode.

Los cambios solamente fueron registrados mediante commits después de comprobar su funcionamiento.

---

## `.gitignore`

`.gitignore` indica a Git qué archivos no deben incluirse en el control de versiones.

Su utilización evita subir archivos personales, temporales o potencialmente sensibles.

En este proyecto se utilizó principalmente para excluir:

- archivos de sistema;
- configuraciones de editores;
- variables de entorno;
- logs.

---

## `/undo`

El comando `/undo` permite revertir la última modificación realizada por OpenCode dentro de una sesión.

Para probarlo se solicitó temporalmente un rediseño de la Weather App.

La prueba modificó principalmente:

```text
index.html
css/styles.css
```

La interfaz roja fue sustituida temporalmente por un diseño azul.

Después se utilizó:

```text
/undo
```

para comprobar la recuperación del estado anterior.

Esta prueba permitió comprender que OpenCode puede revertir cambios realizados por el agente y que Git funciona como una red de seguridad adicional.

---

## `/redo`

`/redo` permite volver a aplicar una modificación que previamente fue revertida mediante `/undo`.

Durante la prueba se ejecutó:

```text
/redo
```

y el rediseño temporal volvió a aparecer.

Esto permitió comprobar que OpenCode podía recuperar nuevamente los cambios previamente deshechos.

También se observó que `/undo` y `/redo` dependen del historial de acciones existente dentro de la sesión.

---

## `/compact`

El comando `/compact` resume el historial acumulado de una sesión.

Una sesión extensa puede contener:

- prompts;
- respuestas;
- análisis;
- archivos leídos;
- decisiones;
- pruebas;
- correcciones.

Todo esto consume espacio dentro de la ventana de contexto del modelo.

Después de ejecutar:

```text
/compact
```

OpenCode reemplazó gran parte del historial por un resumen que conservó principalmente:

- objetivo;
- decisiones importantes;
- estado del proyecto;
- archivos relevantes;
- problemas detectados.

Después de la compactación se observó aproximadamente:

```text
6.0K (2%)
```

en el indicador de contexto.

Esto permitió comprobar una reducción considerable del contexto utilizado.

También se observó que el resumen puede contener información correspondiente a una etapa anterior del desarrollo.

Por esta razón, las decisiones importantes se mantienen adicionalmente dentro de `AGENTS.md` y Git.

Durante la prueba fue necesario recuperar una sesión anterior porque la sesión más reciente contenía poco historial y producía un resumen mínimo.

Esto permitió comprender que cerrar sesiones constantemente fragmenta el contexto disponible para el agente.

---

# Plan contra resultado

El plan inicial generado por OpenCode proponía:

1. Revisar la estructura.
2. Completar requisitos funcionales.
3. Ejecutar pruebas.
4. Validar el diseño responsive.
5. Realizar una revisión final.

Antes de aceptar el plan se solicitó un cambio.

Se pidió que las pruebas de:

- ciudad inexistente;
- pérdida de conexión;

se realizaran antes de cualquier mejora visual adicional.

La razón técnica fue priorizar la robustez de la aplicación, debido a que el manejo de errores era un requisito obligatorio.

La decisión fue útil porque durante la prueba sin conexión se descubrió que la aplicación mostraba:

```text
Failed to fetch
```

Aunque la interfaz no quedaba bloqueada y el indicador de carga desaparecía, el mensaje era técnico y estaba en inglés.

Se solicitó entonces a OpenCode modificar únicamente el manejo de errores de conexión.

El resultado fue:

```text
No se pudo conectar. Revisa tu conexión a Internet e inténtalo nuevamente.
```

Después de la corrección se comprobó que:

- el loading desaparecía;
- el mensaje estaba en español;
- los resultados anteriores permanecían ocultos;
- los controles continuaban funcionando;
- era posible recuperar la conexión;
- podía realizarse otra búsqueda sin recargar la página.

El resultado confirmó que cambiar el orden del plan permitió detectar un problema funcional antes de trabajar en mejoras visuales.

---

# Dónde se equivocó el agente

Durante las pruebas iniciales se detectó un error real generado durante el desarrollo de la aplicación.

La geocodificación funcionaba correctamente.

Sin embargo, la segunda petición realizada a Open-Meteo devolvía:

```text
HTTP 400 Bad Request
```

La aplicación mostraba:

```text
Error al obtener los datos del clima.
```

Se revisó la solicitud utilizando las herramientas de desarrollo del navegador y después se inspeccionó:

```text
js/app.js
```

La URL contenía:

```text
daily=temperature_2m_max,temperature_2m_min,time
```

El problema era que el agente había incluido:

```text
time
```

como una variable dentro del parámetro `daily`.

La aplicación ya podía utilizar:

```javascript
data.daily.time
```

sin solicitar `time` como variable diaria.

Se indicó a OpenCode que corrigiera únicamente ese problema y limitara el pronóstico a tres días.

La petición quedó utilizando:

```text
daily=temperature_2m_max,temperature_2m_min&forecast_days=3
```

Antes de aceptar el cambio se ejecutó:

```bash
git diff -- js/app.js
```

para revisar qué había modificado el agente.

Después se volvió a probar la aplicación con:

```text
Quetzaltenango
```

y la API respondió correctamente.

La aplicación mostró:

- temperatura actual;
- sensación térmica;
- condición;
- velocidad del viento;
- humedad;
- tres días de pronóstico;
- máxima y mínima.

La corrección fue registrada mediante el commit:

```text
fix: corregir parámetros de forecast de Open-Meteo
```

Este error permitió comprobar que el código generado por un agente no debe aceptarse automáticamente.

El proceso fue:

```text
OpenCode genera código
        ↓
Prueba en navegador
        ↓
HTTP 400
        ↓
Revisión en DevTools
        ↓
Revisión de app.js
        ↓
Identificación del error
        ↓
Corrección mediante OpenCode
        ↓
git diff
        ↓
Nueva prueba
        ↓
Commit
```

La experiencia demostró la importancia de revisar, comprender y probar cada modificación antes de integrarla definitivamente.

---

# Otras mejoras realizadas

Además del error HTTP 400, durante el desarrollo se identificaron otros aspectos que podían mejorarse.

---

## Manejo de pérdida de conexión

Inicialmente una pérdida de conexión mostraba:

```text
Failed to fetch
```

Posteriormente se reemplazó por:

```text
No se pudo conectar. Revisa tu conexión a Internet e inténtalo nuevamente.
```

Esto permitió ofrecer un mensaje más comprensible para el usuario.

---

## Códigos meteorológicos WMO

La primera versión de la aplicación solamente reconocía algunos códigos meteorológicos.

Posteriormente la función encargada de interpretar los códigos fue ampliada para soportar más condiciones utilizadas por Open-Meteo.

También se mantuvo un fallback para mostrar el número WMO si se recibe un código no contemplado.

---

## Validación de entrada vacía

Inicialmente `handleSearch()` contenía:

```javascript
if (!cityName) return;
```

Esto provocaba que una búsqueda vacía no mostrara ninguna explicación al usuario.

Posteriormente se modificó a una validación que muestra:

```text
Ingresa el nombre de una ciudad.
```

La validación funciona cuando:

- el campo está vacío;
- solamente contiene espacios;
- se pulsa el botón;
- se presiona Enter.

---

# Estado de carga

La aplicación muestra un indicador visual mientras se realizan las peticiones a Open-Meteo.

Cuando ocurre un error:

- el indicador de carga desaparece;
- los resultados permanecen ocultos;
- aparece un mensaje comprensible.

También se comprobó que después de un error es posible volver a realizar una búsqueda.

---

# Pruebas realizadas

Durante el proyecto se probaron los siguientes escenarios:

- búsqueda de Quetzaltenango;
- búsqueda de Guatemala;
- búsqueda mediante botón;
- búsqueda mediante Enter;
- ciudad inexistente;
- entrada vacía;
- entrada con espacios;
- pérdida de conexión;
- recuperación después de pérdida de conexión;
- geocodificación;
- Forecast API;
- error HTTP 400;
- estado de carga;
- mensajes de error;
- códigos WMO;
- tres días de pronóstico;
- temperaturas máximas;
- temperaturas mínimas;
- pantalla móvil;
- tablet;
- escritorio;
- consola del navegador;
- pestaña Network de DevTools.

---

# Diseño responsive

La aplicación fue probada utilizando las herramientas responsive del navegador.

Se comprobaron diferentes tamaños correspondientes a:

- teléfono;
- tablet;
- computadora.

Se verificó:

- ausencia de desplazamiento horizontal innecesario;
- visibilidad del buscador;
- visibilidad del botón;
- legibilidad del clima actual;
- distribución de las tarjetas;
- visualización de mensajes de error;
- correcto comportamiento del desplazamiento vertical.

La interfaz se adapta correctamente a pantallas pequeñas.

---

# Control de versiones con Git

Todo el proyecto fue desarrollado dentro de un repositorio Git.

Se utilizaron commits independientes para registrar cada etapa importante.

Entre los commits realizados se encuentran:

```text
feat: add initial .gitignore

docs: add project AGENTS.md with dark red theme specifications

feat: implement weather app structure, styles in dark red and open-meteo logic

refactor: organizar archivos CSS y JavaScript

docs: completar instrucciones del proyecto

fix: corregir parámetros de forecast de Open-Meteo

docs: actualizar AGENTS con flujo real del proyecto

fix: mejorar manejo de errores de conexión

feat: completar descripciones de códigos WMO

feat: validar búsqueda de ciudad vacía
```

Antes de realizar cada commit se utilizaron comandos como:

```bash
git status
git diff
```

Esto permitió revisar qué archivos habían cambiado antes de registrar una versión.

---

# GitHub

El repositorio local fue conectado con GitHub mediante:

```text
origin
```

La rama utilizada durante el proyecto es:

```text
master
```

El repositorio remoto es:

```text
origin/master
```

Repositorio:

https://github.com/Catherine707/weather-app

---

# Flujo de trabajo seguido

El proceso utilizado durante el desarrollo fue:

```text
Requisito
   ↓
Modo Plan
   ↓
Revisión del plan
   ↓
Cambio solicitado al plan
   ↓
Modo Build
   ↓
OpenCode modifica
   ↓
git diff
   ↓
Prueba en navegador
   ↓
Corrección si es necesaria
   ↓
git add
   ↓
git commit
   ↓
git push
```

Este proceso permitió mantener control sobre las modificaciones realizadas por el agente.

---

# Seguridad

El proyecto no contiene API keys ni credenciales.

Open-Meteo puede utilizarse sin almacenar una llave de API para este ejercicio.

Como medida preventiva, `.gitignore` excluye:

```text
.env
.env.*
```

Esto reduce el riesgo de subir accidentalmente archivos con información sensible.

---

# Aprendizajes obtenidos

El desarrollo de la Weather App permitió comprender que utilizar un agente de programación no significa aceptar automáticamente el código generado.

Fue necesario:

- proporcionar instrucciones claras;
- revisar planes antes de ejecutar cambios;
- trabajar en etapas pequeñas;
- utilizar `git diff`;
- realizar pruebas reales;
- detectar errores;
- validar el comportamiento de las APIs;
- utilizar Git como red de seguridad;
- mantener documentación actualizada.

Uno de los aprendizajes principales fue comprobar que un agente puede generar código aparentemente correcto que falla al ejecutarse.

El error HTTP 400 de Open-Meteo demostró la importancia de probar cada funcionalidad y comprender el código antes de aceptarlo.

También se comprobó que archivos como `AGENTS.md` ayudan a conservar decisiones importantes cuando las conversaciones se vuelven extensas o se utiliza `/compact`.

---

# Resultado final

La aplicación cumple con los principales requisitos planteados:

- búsqueda de ciudades;
- geocodificación;
- clima actual;
- sensación térmica;
- humedad;
- viento;
- códigos WMO;
- pronóstico de tres días;
- máxima y mínima;
- estado de carga;
- manejo de ciudad inexistente;
- manejo de pérdida de conexión;
- validación de entrada vacía;
- funcionamiento mediante botón y Enter;
- diseño responsive;
- Git;
- GitHub;
- documentación mediante `AGENTS.md`;
- uso de Plan y Build;
- prueba de `/undo`;
- prueba de `/redo`;
- prueba de `/compact`;
- revisión de los cambios generados por IA.

---

# Repositorio

El código completo y el historial del proyecto se encuentran en:

**https://github.com/Catherine707/weather-app**
