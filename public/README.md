# Skill's Engineer - Plataforma de Cursos Tecnológicos

Un sitio web moderno y atractivo para la promoción y acceso a cursos de capacitación tecnológica en las áreas de ciberseguridad, bases de datos, programación y gestión de TI, como parte de la iniciativa oficial de la Escuela de Ingeniería de la Universidad Continental en la modalidad a distancia.

![Skill's Engineer Logo](img/logo.png)

## Descripción

Este proyecto consiste en un sitio web completo para Skill's Engineer, una plataforma educativa de la Universidad Continental, diseñada específicamente para estudiantes de sistemas que deseen especializarse en áreas clave de la tecnología actual. La plataforma está disponible para todos los estudiantes de la universidad y permite explorar diferentes cursos, registrarse, acceder a los contenidos educativos y dar seguimiento a su progreso académico.

## Características Principales

- **Diseño Responsive**: Adaptación perfecta a cualquier dispositivo (móvil, tablet, escritorio)
- **Páginas Temáticas por Especialidad**: Diseños personalizados para cada área tecnológica
- **Efectos Parallax**: Fondos dinámicos que responden al desplazamiento y movimiento del cursor
- **Dashboard Interactivo**: Panel de control personalizado según el tipo de usuario
- **Sistema de Roles**: Funcionalidades diferenciadas para estudiantes básicos, premium y administradores
- **Animaciones y Transiciones**: Efectos visuales que mejoran la experiencia de usuario
- **Componentes Interactivos**: Notificaciones, mensajes, progreso de cursos
- **Diseño Moderno**: Interfaz limpia basada en Bootstrap 5 con personalizaciones avanzadas

## Páginas Temáticas con Parallax

Cada especialidad cuenta con una página dedicada que incluye:

### 1. Ciberseguridad
- **Paleta de Colores**: Tonos azules que transmiten seguridad y confianza
- **Efectos Visuales**: Patrones que evocan código binario y matrices de datos
- **Fondo Parallax**: Representación abstracta de conceptos de seguridad informática
- **Contenido**: Presentación de cursos sobre ethical hacking, seguridad en redes, análisis forense

### 2. Bases de Datos
- **Paleta de Colores**: Tonos verdes que representan organización y estructura
- **Efectos Visuales**: Patrones geométricos que simbolizan la estructura de datos
- **Fondo Parallax**: Fondos con representaciones abstractas de servidores y almacenamiento
- **Contenido**: Cursos de SQL, NoSQL, administración y optimización de bases de datos

### 3. Programación
- **Paleta de Colores**: Tonos morados que simbolizan creatividad e innovación
- **Efectos Visuales**: Patrones basados en código y algoritmos
- **Fondo Parallax**: Representación visual de lenguajes de programación y desarrollo
- **Contenido**: Cursos de desarrollo web, móvil, backend, frontend y fullstack

### 4. Gestión de TI
- **Paleta de Colores**: Tonos ámbar/dorados que representan liderazgo y gestión
- **Efectos Visuales**: Patrones organizativos y estructurales
- **Fondo Parallax**: Fondos abstractos relacionados con gestión y administración
- **Contenido**: Cursos de gestión de proyectos, ITIL, liderazgo tecnológico

## Dashboard Avanzado

El panel de control cuenta con tres vistas diferentes según el tipo de usuario (estudiante, premium, administrador), cada una con funcionalidades específicas:

### Características Comunes
- **Cabecera Mejorada**: Barra de navegación fija con búsqueda, notificaciones y perfil
- **Bienvenida Personalizada**: Saludo adaptado al nombre y tipo de usuario
- **Estadísticas Visuales**: Tarjetas con datos relevantes y progreso académico
- **Cursos en Progreso**: Seguimiento visual de avance en cada curso
- **Actividad Reciente**: Línea de tiempo con las últimas actividades realizadas
- **Recomendaciones**: Sugerencias de cursos basadas en intereses y progreso
- **Modo Claro/Oscuro**: Toggle para cambiar entre temas visuales (en desarrollo)

### Dashboard Estudiante Básico
- Vista enfocada en seguimiento de progreso académico
- Acceso a cursos matriculados
- Calendario de actividades y recordatorios

### Dashboard Estudiante Premium
- Todas las funcionalidades del estudiante básico
- Sección exclusiva de beneficios premium
- Acceso a mentoría personalizada y contenido exclusivo
- Sección de networking empresarial y talleres en vivo

### Dashboard Administrativo
- Panel de estadísticas avanzadas y métricas de la plataforma
- Gestión de usuarios y cursos
- Herramientas de comunicación masiva
- Configuración del sistema y generación de reportes

## Componentes Interactivos

### Notificaciones Mejoradas
- Sistema de notificaciones en tiempo real
- Categorización visual por tipo (información, alerta, éxito, etc.)
- Panel desplegable con historial y opciones de filtrado

### Sistema de Mensajería
- Comunicación directa con instructores y otros estudiantes
- Notificaciones de nuevos mensajes
- Historial de conversaciones

### Progreso Visual
- Barras de progreso para cada curso
- Estadísticas detalladas de actividades completadas
- Visualización de tiempo dedicado al estudio

### Tarjetas Interactivas
- Efectos de hover mejorados para tarjetas de cursos
- Animaciones de entrada y salida
- Información detallada al interactuar

## Estructura del Proyecto

```
/
├── index.html              # Página principal
├── ciberseguridad.html     # Página de cursos de ciberseguridad con parallax
├── bases-datos.html        # Página de cursos de bases de datos con parallax
├── programacion.html       # Página de cursos de programación con parallax
├── gestion-ti.html         # Página de cursos de gestión de TI con parallax
├── acceso.html             # Página de acceso/registro para estudiantes
├── dashboard.html          # Panel de control interactivo
├── curso-modulos.html      # Página de módulos de curso específico
├── nosotros.html           # Página sobre la academia
├── contacto.html           # Página de contacto
├── css/
│   ├── styles.css          # Estilos CSS generales
│   ├── professional.css    # Estilos para efectos avanzados y componentes profesionales
│   └── dashboard.css       # Estilos específicos para el dashboard
├── js/
│   ├── script.js           # Funcionalidades JavaScript generales
│   ├── professional.js     # Funciones para efectos parallax y animaciones avanzadas
│   └── dashboard.js        # Lógica específica del dashboard y sistemas de roles
├── img/                    # Directorio de imágenes
│   ├── hero-images/        # Fondos para secciones hero con parallax
│   ├── course-thumbnails/  # Miniaturas para tarjetas de cursos
│   ├── avatars/            # Imágenes de perfil e instructores
│   └── icons/              # Iconos personalizados
└── README.md               # Documentación del proyecto
```

## Sistema de Roles Detallado

### 1. Estudiante Básico
- **Dashboard Personalizado**: Panel de control con estadísticas básicas
- **Seguimiento de Cursos**: Progreso visual en cursos matriculados
- **Calendario**: Agenda de actividades y recordatorios
- **Comunicación**: Sistema de mensajería con instructores
- **Notificaciones**: Alertas sobre eventos importantes
- **Certificados**: Acceso a certificados de cursos completados

### 2. Estudiante Premium
- **Todas las funciones del estudiante básico**
- **Interfaz Premium**: Tema visual mejorado con acentos dorados
- **Contenido Exclusivo**: Acceso a materiales adicionales
- **Mentoría Personalizada**: Sesiones programadas con expertos
- **Networking Empresarial**: Conexión con empleadores potenciales
- **Talleres en Vivo**: Acceso a webinars y workshops exclusivos
- **Soporte Prioritario**: Atención preferencial a consultas

### 3. Administrador
- **Panel Administrativo**: Interfaz dedicada a la gestión
- **Estadísticas Avanzadas**: Métricas detalladas de la plataforma
- **Gestión de Usuarios**: Alta, baja y modificación de estudiantes
- **Gestión de Cursos**: Creación y edición de contenidos educativos
- **Comunicaciones**: Herramientas para envío de anuncios masivos
- **Reportes**: Generación de informes de actividad y progreso
- **Configuración**: Ajustes generales del sistema

## Efectos Visuales y Animaciones

### Parallax
- **Fondos Dinámicos**: Movimiento en capas que responde al scroll
- **Interactividad con Mouse**: Elementos que reaccionan al movimiento del cursor
- **Profundidad Visual**: Sensación de capas y dimensiones en la interfaz
- **Optimización móvil**: Desactivación automática en dispositivos pequeños

### Animaciones
- **Entrada de Elementos**: Animaciones de aparición al hacer scroll
- **Hover Effects**: Interacciones visuales al pasar el cursor
- **Transiciones Suaves**: Cambios de estado con animaciones fluidas
- **Microinteracciones**: Pequeñas animaciones que mejoran la experiencia

### Elementos Interactivos
- **Botones Animados**: Efectos de pulsación y hover
- **Tarjetas con Profundidad**: Efectos de elevación y sombras dinámicas
- **Badges Animados**: Indicadores visuales con movimiento
- **Progreso Visual**: Barras y círculos de progreso animados

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica y moderna
- **CSS3**: Estilos avanzados con variables, flexbox y grid
- **JavaScript**: Interactividad y funcionalidades dinámicas
- **Bootstrap 5**: Framework CSS para diseño responsive
- **Bootstrap Icons**: Iconografía consistente
- **AOS (Animate On Scroll)**: Biblioteca para animaciones al scroll
- **Chart.js**: Gráficos interactivos para estadísticas
- **LocalStorage/SessionStorage**: Persistencia de datos del lado del cliente

## Personalización

### Temas Visuales
- **Variables CSS**: Cambio rápido de paletas de colores
- **Temas por Rol**: Apariencia visual diferenciada según tipo de usuario
- **Personalización por Área**: Estilos temáticos según especialidad tecnológica

### Componentes Modulares
- **Estructura Componentizada**: Facilidad para añadir o modificar elementos
- **Clases Utilitarias**: Sistema de clases para personalización rápida
- **JavaScript Modular**: Funciones independientes que se pueden combinar

## Instalación y Uso

1. Clona este repositorio:
   ```
   git clone https://github.com/tu-usuario/skills-engineer.git
   ```

2. Configuración con XAMPP:
   - Coloca los archivos en la carpeta `htdocs` de XAMPP
   - Inicia los servicios de Apache
   - Accede a http://localhost/web_/ en tu navegador

3. Navegación por Roles:
   - Para probar diferentes roles, usa el parámetro `?role=student`, `?role=premium` o `?role=admin` en la URL del dashboard
   - Alternativamente, cambia la variable `userType` en el archivo JavaScript del dashboard

## Mejoras Visuales Implementadas

### 1. Cabecera (Navbar) Profesional
- **Barra de Navegación Fija**: Siempre visible al hacer scroll
- **Búsqueda Integrada**: Campo de búsqueda con estilo personalizado
- **Notificaciones Mejoradas**: Panel desplegable con categorización visual
- **Perfil de Usuario**: Menú desplegable con información y acciones rápidas
- **Sistema de Mensajería**: Acceso rápido a comunicaciones

### 2. Dashboard Mejorado
- **Tarjeta de Bienvenida**: Saludo personalizado con acciones principales
- **Estadísticas en Tarjetas**: Visualización clara de métricas importantes
- **Lista de Cursos Interactiva**: Diseño moderno con barras de progreso
- **Línea de Tiempo de Actividad**: Historial visual de acciones recientes
- **Cursos Recomendados**: Sugerencias personalizadas con imágenes atractivas

### 3. Páginas de Cursos con Parallax
- **Efecto Parallax Multidimensional**: Fondos que se mueven a diferentes velocidades
- **Diseño Temático**: Cada especialidad con su propia identidad visual
- **Hero Section Mejorada**: Cabecera con efecto parallax y elementos interactivos
- **Optimización de Rendimiento**: Efectos suaves sin comprometer la velocidad
- **Compatibilidad Cross-Browser**: Funciona en todos los navegadores modernos

## Próximas Funcionalidades Planificadas

- **Modo Oscuro**: Toggle para cambiar entre tema claro y oscuro
- **Progreso Gamificado**: Sistema de puntos, insignias y logros
- **Panel de Comunidad**: Foros y espacios de discusión
- **Aplicación PWA**: Versión instalable como aplicación web progresiva
- **Sincronización con Calendario**: Integración con Google Calendar y otros servicios

## Contribución

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto:

1. Haz un fork del repositorio
2. Crea una rama para tu función (`git checkout -b feature/nueva-funcion`)
3. Haz commit de tus cambios (`git commit -m 'Añadir nueva función'`)
4. Haz push a la rama (`git push origin feature/nueva-funcion`)
5. Abre un Pull Request

## Licencia

Este proyecto está disponible como código abierto bajo la licencia MIT.

## Contacto

Para preguntas o sugerencias, puedes contactar a través de:
- Email: contacto@skillsengineer.edu
- Campus Universitario, Edificio de Tecnología
- Teléfono: +123 456 7890 