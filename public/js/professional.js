/*!
 * Skill's Engineer Professional Effects
 * Universidad Continental - Escuela de Ingeniería
 */

(function() {
    'use strict';
    
    // Verifica si estamos en un navegador moderno
    if (!window.requestAnimationFrame) {
        return;
    }
    
    // Variables globales
    const doc = document.documentElement;
    const w = window;
    
    // Espera a que todo el contenido esté cargado
    document.addEventListener('DOMContentLoaded', function() {
        // Inicializa todas las funciones
        initNavbarEffects();
        initScrollAnimations();
        initParallaxEffects();
        initUniversityBanner();
        initTextAnimations();
        initSmoothScroll();
        
        // Si hay librerías externas
        initExternalLibraries();
        
        // Inicializar AOS para animaciones al hacer scroll
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: false
        });
        
        // Funcionalidad de parallax al hacer scroll
        initParallaxScroll();
        
        // Funcionalidad de parallax al mover el mouse
        initParallaxMouse();
        
        // Otras inicializaciones...
        initCoursesFilter();
    });
    
    // Efecto de navbar moderno
    function initNavbarEffects() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;
        
        let lastScrollY = 0;
        
        // Función para actualizar la navegación
        function updateNavbar() {
            const scrollY = w.pageYOffset;
            
            // Añade clase 'scrolled' cuando se hace scroll
            if (scrollY > 10) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Oculta/muestra la barra de navegación al hacer scroll hacia abajo/arriba
            if (scrollY > lastScrollY && scrollY > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScrollY = scrollY;
        }
        
        // Evento de scroll
        w.addEventListener('scroll', function() {
            requestAnimationFrame(updateNavbar);
        });
        
        // Aplica animación a los elementos del menú
        const navItems = navbar.querySelectorAll('.nav-item');
        navItems.forEach((item, index) => {
            item.style.opacity = 0;
            item.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.5s ease';
                item.style.opacity = 1;
                item.style.transform = 'translateY(0)';
            }, 100 + (index * 100));
        });
    }
    
    // Animaciones al hacer scroll
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate-up, .animate-right, .animate-left, .animate-zoom');
        if (!animatedElements.length) return;
        
        function checkAnimatedElements() {
            const windowHeight = w.innerHeight;
            const triggerPoint = windowHeight * 0.8;
            
            animatedElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                if (elementTop < triggerPoint) {
                    element.classList.add('active');
                }
            });
        }
        
        // Verificar al cargar la página
        checkAnimatedElements();
        
        // Verificar al hacer scroll
        w.addEventListener('scroll', function() {
            requestAnimationFrame(checkAnimatedElements);
        });
    }
    
    // Efectos de parallax
    function initParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.parallax');
        if (!parallaxElements.length) return;
        
        function updateParallax() {
            const scrollY = w.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = element.getAttribute('data-speed') || 0.5;
                const offset = scrollY * speed;
                element.style.transform = `translateY(${offset}px)`;
            });
        }
        
        w.addEventListener('scroll', function() {
            requestAnimationFrame(updateParallax);
        });
    }
    
    // Banner universitario interactivo
    function initUniversityBanner() {
        const ucBanner = document.querySelector('.uc-banner, .uni-banner, .bg-dark');
        if (!ucBanner) return;
        
        // Efecto al hacer hover
        ucBanner.addEventListener('mousemove', function(e) {
            const rect = ucBanner.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPercent = x / rect.width;
            const yPercent = y / rect.height;
            
            const span = ucBanner.querySelector('strong') || ucBanner.querySelector('p');
            if (span) {
                span.style.textShadow = `
                    ${(xPercent - 0.5) * 15}px 
                    ${(yPercent - 0.5) * 15}px 
                    10px rgba(0,0,0,0.15)
                `;
            }
        });
        
        // Resetear al salir
        ucBanner.addEventListener('mouseleave', function() {
            const span = ucBanner.querySelector('strong') || ucBanner.querySelector('p');
            if (span) {
                span.style.textShadow = '';
            }
        });
    }
    
    // Animaciones de texto
    function initTextAnimations() {
        const textElements = document.querySelectorAll('.text-gradient, .text-gradient-accent');
        if (!textElements.length) return;
        
        // Añade un efecto de resaltado al hacer hover
        textElements.forEach(element => {
            element.addEventListener('mouseover', function() {
                this.style.backgroundSize = '200% 200%';
                this.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            });
            
            element.addEventListener('mouseout', function() {
                this.style.backgroundSize = '100% 100%';
            });
        });
    }
    
    // Implementación de scroll suave
    function initSmoothScroll() {
        const anchors = document.querySelectorAll('a[href^="#"]:not([href="#"])');
        if (!anchors.length) return;
        
        anchors.forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Integración con librerías externas
    function initExternalLibraries() {
        // Integración con AOS (Animate on Scroll)
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-out',
                once: true
            });
        }
        
        // Integración con ScrollReveal
        if (typeof ScrollReveal !== 'undefined') {
            ScrollReveal().reveal('.reveal', {
                duration: 1000,
                distance: '40px',
                easing: 'cubic-bezier(0.5, 0, 0, 1)',
                origin: 'bottom',
                interval: 200
            });
        }
        
        // Integración con Typed.js
        if (typeof Typed !== 'undefined') {
            const typedElements = document.querySelectorAll('.typed-element');
            
            typedElements.forEach(element => {
                const strings = element.getAttribute('data-typed-strings');
                if (strings) {
                    new Typed(element, {
                        strings: strings.split(','),
                        typeSpeed: 50,
                        backSpeed: 30,
                        backDelay: 1500,
                        loop: true
                    });
                }
            });
        }
    }
    
    // Contador para las estadísticas
    document.addEventListener('DOMContentLoaded', function() {
        const statElements = document.querySelectorAll('.stat-value, [data-count]');
        if (!statElements.length) return;
        
        const observerOptions = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const countTo = parseInt(target.getAttribute('data-count'));
                    
                    if (!countTo || target.classList.contains('counted')) return;
                    
                    const duration = 2000;
                    const fps = 30;
                    const steps = duration / (1000 / fps);
                    const increment = countTo / steps;
                    let current = 0;
                    
                    const timer = setInterval(() => {
                        current += increment;
                        
                        if (current >= countTo) {
                            target.textContent = countTo.toLocaleString();
                            target.classList.add('counted');
                            clearInterval(timer);
                        } else {
                            target.textContent = Math.round(current).toLocaleString();
                        }
                    }, 1000 / fps);
                    
                    observer.unobserve(target);
                }
            });
        }, observerOptions);
        
        statElements.forEach(element => {
            observer.observe(element);
        });
    });
    
    // Efecto de partículas en la sección hero (si existe)
    document.addEventListener('DOMContentLoaded', function() {
        const heroSection = document.querySelector('.hero-section');
        if (!heroSection) return;
        
        // Crear canvas para partículas
        const canvas = document.createElement('canvas');
        canvas.className = 'particles-canvas';
        canvas.style.position = 'absolute';
        canvas.style.top = 0;
        canvas.style.left = 0;
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = 1;
        
        heroSection.appendChild(canvas);
        
        // Configuración del canvas
        const ctx = canvas.getContext('2d');
        
        function resizeCanvas() {
            canvas.width = heroSection.offsetWidth;
            canvas.height = heroSection.offsetHeight;
        }
        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        // Partículas
        const particlesArray = [];
        const particleCount = 50;
        const particleColor = 'rgba(255, 255, 255, 0.5)';
        
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }
            
            draw() {
                ctx.fillStyle = particleColor;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        function createParticles() {
            for (let i = 0; i < particleCount; i++) {
                particlesArray.push(new Particle());
            }
        }
        
        function updateParticles() {
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }
            
            connectParticles();
        }
        
        function connectParticles() {
            const maxDistance = 100;
            
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    const dx = particlesArray[a].x - particlesArray[b].x;
                    const dy = particlesArray[a].y - particlesArray[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < maxDistance) {
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 - (distance/maxDistance) * 0.3})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }
        
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            updateParticles();
            requestAnimationFrame(animate);
        }
        
        createParticles();
        animate();
    });
    
    /**
     * Inicializa el efecto parallax al hacer scroll
     */
    function initParallaxScroll() {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            const heroSection = document.querySelector('.hero-video-section');
            
            if (heroSection) {
                // Efecto parallax en el fondo de la sección hero
                heroSection.style.backgroundPosition = `center ${scrollPosition * 0.4}px`;
                
                // Efecto parallax en los elementos con la clase parallax-element
                const parallaxElements = document.querySelectorAll('.parallax-element');
                parallaxElements.forEach(element => {
                    const speed = element.getAttribute('data-speed') || 0.2;
                    const movement = scrollPosition * speed;
                    const yPos = -(movement);
                    element.style.transform = `translateY(${yPos}px)`;
                });
            }
        });
    }
    
    /**
     * Inicializa el efecto parallax al mover el mouse
     */
    function initParallaxMouse() {
        const heroSection = document.querySelector('.hero-video-section');
        
        if (heroSection && window.innerWidth > 768) {
            document.addEventListener('mousemove', function(e) {
                const mouseX = e.clientX;
                const mouseY = e.clientY;
                
                // Calcular el centro de la ventana
                const windowWidth = window.innerWidth;
                const windowHeight = window.innerHeight;
                const windowCenterX = windowWidth / 2;
                const windowCenterY = windowHeight / 2;
                
                // Calcular la distancia desde el centro
                const distanceX = (mouseX - windowCenterX) / windowCenterX;
                const distanceY = (mouseY - windowCenterY) / windowCenterY;
                
                // Aplicar el efecto parallax a los elementos
                const parallaxElements = document.querySelectorAll('.parallax-element');
                parallaxElements.forEach(element => {
                    const depth = element.getAttribute('data-depth') || 20;
                    const movementX = distanceX * depth;
                    const movementY = distanceY * depth;
                    
                    element.style.transform = `translate(${movementX}px, ${movementY}px)`;
                });
                
                // Aplicar efecto sutil al fondo
                const beforeElement = heroSection.querySelector('::before');
                if (beforeElement) {
                    beforeElement.style.transform = `translate(${distanceX * 10}px, ${distanceY * 10}px)`;
                }
            });
        }
    }
    
    /**
     * Inicializa el filtro de cursos
     */
    function initCoursesFilter() {
        const courseFilterBtns = document.querySelectorAll('.course-filter-btn');
        
        if (courseFilterBtns.length > 0) {
            courseFilterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Remover clase active de todos los botones
                    courseFilterBtns.forEach(b => b.classList.remove('active'));
                    
                    // Agregar clase active al botón actual
                    this.classList.add('active');
                    
                    // Obtener el filtro seleccionado
                    const filter = this.getAttribute('data-filter');
                    
                    // Filtrar los cursos
                    const courses = document.querySelectorAll('.card');
                    courses.forEach(course => {
                        if (filter === 'all') {
                            course.style.display = 'block';
                        } else {
                            const courseCategory = course.querySelector('.course-badge').textContent.toLowerCase().trim();
                            if (courseCategory.includes(filter)) {
                                course.style.display = 'block';
                            } else {
                                course.style.display = 'none';
                            }
                        }
                    });
                });
            });
        }
    }
    
    // Añadir efectos de parallax avanzados con detector de movimiento
    if (window.DeviceOrientationEvent && window.innerWidth > 768) {
        window.addEventListener('deviceorientation', function(e) {
            const heroSection = document.querySelector('.hero-video-section');
            if (heroSection) {
                const tiltX = e.beta / 45; // Convertir grados a un valor entre -1 y 1
                const tiltY = e.gamma / 45;
                
                // Aplicar sutilmente el efecto basado en la orientación del dispositivo
                heroSection.style.backgroundPosition = `calc(50% + ${tiltY * 20}px) calc(50% + ${tiltX * 20}px)`;
                
                const parallaxElements = document.querySelectorAll('.parallax-element');
                parallaxElements.forEach(element => {
                    const depth = element.getAttribute('data-depth') || 15;
                    const movementX = tiltY * depth;
                    const movementY = tiltX * depth;
                    
                    element.style.transform = `translate(${movementX}px, ${movementY}px)`;
                });
            }
        });
    }
})(); 