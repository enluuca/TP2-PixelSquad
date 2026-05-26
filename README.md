# TP2 - React en Equipo | PixelSquad

**Enlace al Proyecto Desplegado:** [Acá pegaremos el link de Vercel cuando hagamos el deploy]

## 1. Descripción del Proyecto
Este proyecto es una Single Page Application (SPA) desarrollada en React que funciona como el nodo principal de presentación de nuestro equipo, PixelSquad. El objetivo de este desarrollo es aplicar una arquitectura basada en componentes, gestionando rutas dinámicas, estados y consumo de datos locales y externos. Diseñamos una interfaz estilo Dashboard con una estética minimalista, limpia y premium, centrada en la experiencia del usuario (UX).

## 2. Integrantes del Equipo
El equipo "PixelSquad" (Grupo 7 - IFTS N.°29) está conformado de manera definitiva por:

* **Enzo Giangreco** - Full Stack Developer / Frontend & UI/UX | [Perfil de GitHub](https://github.com/enluuca)
* **Pablo Off** - Backend & Database Developer | [Perfil de GitHub]
* **Alejandro Ramos** - Java Developer Trainee | [Perfil de GitHub]
* **Ivan Faigenbom** - UX/UI & Python Developer | [Perfil de GitHub]

## 3. Tecnologías Utilizadas
Para este desarrollo, abandonamos la estructura estática tradicional para montar un entorno moderno y ágil:
* **Core:** React (con Vite) y JavaScript (ES6+).
* **Navegación:** React Router DOM (manejo de SPA y parámetros dinámicos).
* **Estilos:** CSS3 puro con variables nativas (`:root`) para la paleta de diseño.
* **Iconografía:** Librería `react-icons`.
* **Datos:** JSON para estructura de datos locales.

# 4. Estructura de Archivos
Organizamos el proyecto bajo una arquitectura modular para separar lógica, vistas y componentes reutilizables:

src/
  assets/       # Imágenes, avatares, isologos y recursos estáticos
  components/   # Componentes reutilizables (Sidebar, TripulanteCard, etc.)
  context/      # Estados globales de la aplicación (futura escalabilidad)
  data/         # Archivos JSON locales (team.json, mock_datos.json)
  hooks/        # Custom hooks para lógica asíncrona y llamadas a APIs
  pages/        # Vistas principales de la app (Dashboard, Profile, Explorer, etc.)
  App.jsx       # Enrutador principal y layout base
  index.css     # Reset, variables y estilos globales
  main.jsx      # Punto de entrada de React


## 5. Guía de Estilos
Aplicamos un diseño temático estilo "Archivo Galáctico", inspirado en interfaces de ciencia ficción y la estética de Star Wars, priorizando contrastes altos, fondos oscuros y efectos de neón.

Paleta de Colores (Hexadecimales):**
    * Fondo Principal y Superficies: `#050505` (Negro profundo)
    * Texto Principal: `#ffffff` (Blanco con 88% de opacidad)
    * Texto Secundario: `#a0a0a0` (Blanco con 63% de opacidad)
    * Acento Principal (Láser/Bordes): `#ffe81f` (Amarillo característico)
    * Acento Secundario (Hover/Brillos): `#ff6600` (Naranja intenso)

Tipografía:** Utilizamos Google Fonts para lograr la estética Sci-Fi y mantener legibilidad:
    * `Pathway Gothic One`: Utilizada para títulos principales y encabezados.
    * `Inter`: Utilizada para los textos de lectura, biografías y descripciones.
    * `Exo 2`: Aplicada en la navegación, menús y badges.

Iconografía:** Implementada a través de la librería `react-icons` (específicamente las colecciones de FontAwesome `Fa` y SimpleIcons `Si`).

Efectos Visuales Clave:** Uso extensivo de `box-shadow` para simular resplandores de sables de luz, gradientes lineales dinámicos para los bordes de las tarjetas, y un fondo fijo (`::before`) que simula un campo estelar mediante un `radial-gradient`.

6. Lógica de JavaScript y Componentes React
El proyecto no es solo visual, sino que implementa lógica dinámica en varios puntos clave:

useParams: Lo utilizamos en el componente Profile.jsx para atrapar el ID en la URL (/perfil/:id) y filtrar nuestro archivo JSON, renderizando dinámicamente el perfil correspondiente sin recargar la página.

useState: Aplicado para gestionar el carrusel de proyectos dentro de los perfiles individuales (manejando el índice actual de la imagen visualizada) y para el motor de búsqueda en tiempo real.

Mapeo de Datos: Utilizamos .map() extensamente en el Dashboard para iterar sobre nuestro JSON y generar múltiples instancias del componente <TripulanteCard />.

[Acá insertaremos capturas de pantalla del código de estas funciones dinámicas y de los componentes clave de la UI]

7. Evolución del Proyecto (De HTML a React)
Este Trabajo Práctico representa una evolución radical respecto a nuestra entrega anterior.
En el TP1, maquetamos un diseño centrado en una temática oscura de Star Wars, usando HTML estático, CSS puro y animaciones láser. Para esta etapa, migramos toda la estructura visual y conceptual hacia una arquitectura de componentes.
Limpiamos el código, descartamos las rutas estáticas (.html) y adoptamos el enrutamiento dinámico. Además, depuramos la lista de integrantes originales para reflejar al equipo definitivo de desarrollo, asegurando que la interfaz esté 100% enfocada en una presentación profesional tipo agencia tecnológica.

[Acá agregaremos capturas del "Antes" (TP1 Star Wars) y el "Después" (TP2 Minimalista)]

8. Uso de Inteligencia Artificial (IA)
Durante el desarrollo, integramos la IA como una herramienta de apoyo y pair-programming, manteniendo en todo momento el control de la autoría y la arquitectura lógica del proyecto.

Herramientas Utilizadas: Gemini.

Uso en Código y Contenido: Se utilizó para agilizar la refactorización de etiquetas HTML clásicas a componentes de sintaxis JSX. También fue vital para establecer la base lógica del hook useState en la creación del carrusel interactivo y estructurar los mocks de datos (JSON) con contenido realista.

Generación de Imágenes (Avatares): Los avatares originales de la temática Star Wars fueron reemplazados por renders 3D premium generados por IA.