document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize Bootstrap popovers
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Add animation classes on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkIfInView() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('animate-fade-in');
            }
        });
    }

    if (animateElements.length > 0) {
        window.addEventListener('scroll', checkIfInView);
        checkIfInView(); // Check on initial load
    }

    // Course filter functionality
    const filterButtons = document.querySelectorAll('.course-filter-btn');
    const courseItems = document.querySelectorAll('.course-item');

    if (filterButtons.length > 0 && courseItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Filter course items
                courseItems.forEach(item => {
                    if (filterValue === 'all') {
                        item.style.display = 'block';
                    } else if (item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Form validation
    const forms = document.querySelectorAll('.needs-validation');
    
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            
            form.classList.add('was-validated');
        }, false);
    });

    // Countdown timer for course enrollment
    const countdownElement = document.getElementById('enrollment-countdown');
    
    if (countdownElement) {
        const countdownDate = new Date(countdownElement.getAttribute('data-countdown')).getTime();
        
        const countdownTimer = setInterval(function() {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            
            if (distance < 0) {
                clearInterval(countdownTimer);
                countdownElement.innerHTML = "¡Inscripciones cerradas!";
            }
        }, 1000);
    }

    // Sticky navbar on scroll
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    // Course progress calculation
    const progressBars = document.querySelectorAll('.course-progress');
    
    progressBars.forEach(progressBar => {
        const completedLessons = parseInt(progressBar.getAttribute('data-completed'));
        const totalLessons = parseInt(progressBar.getAttribute('data-total'));
        const progressPercentage = (completedLessons / totalLessons) * 100;
        
        progressBar.style.width = progressPercentage + '%';
        progressBar.setAttribute('aria-valuenow', progressPercentage);
    });

    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Demo Modal Video Handler - Moved from inline script to here
    const demoModal = document.getElementById('demoModal');
    if (demoModal) {
        demoModal.addEventListener('show.bs.modal', function(event) {
            const button = event.relatedTarget;
            const videoSrc = button.getAttribute('data-video');
            const videoFrame = document.getElementById('videoFrame');
            videoFrame.setAttribute('src', videoSrc);
        });
        
        demoModal.addEventListener('hidden.bs.modal', function() {
            const videoFrame = document.getElementById('videoFrame');
            videoFrame.setAttribute('src', '');
        });
    }
    
    // Code Access Form - Moved from inline script to here
    const codeAccessForm = document.getElementById('codeAccessForm');
    if (codeAccessForm) {
        codeAccessForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const code = document.getElementById('studentCodeInput').value;
            
            // Demo access codes
            const validCodes = {
                'ABC1234': { name: 'Juan Pérez', course: 'Ciberseguridad', role: 'student' },
                'XYZ5678': { name: 'María López', course: 'Bases de Datos', role: 'premium' },
                'DEF9012': { name: 'Carlos Gómez', course: 'Programación', role: 'student' },
                'ADMIN01': { name: 'Administrador', course: 'Panel de Administración', role: 'admin' }
            };
            
            if (validCodes[code]) {
                // Simulate redirect to dashboard with role parameter
                alert(`¡Bienvenido/a, ${validCodes[code].name}! Accediendo a tu panel de ${validCodes[code].course}...`);
                window.location.href = `dashboard.html?role=${validCodes[code].role}`;
            } else {
                alert('Código no válido. Por favor, verifica e intenta nuevamente.');
            }
        });
    }
    
    // Stats counter animation - Mantenerlo como respaldo adicional
    const statValues = document.querySelectorAll('.stat-value');
    if (statValues.length > 0 && typeof IntersectionObserver !== 'undefined') {
        const options = {
            threshold: 0.7
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    const target = entry.target;
                    const countTo = parseInt(target.getAttribute('data-count'));
                    let count = 0;
                    const interval = setInterval(() => {
                        target.innerText = count.toLocaleString();
                        count++;
                        if (count > countTo) {
                            clearInterval(interval);
                            target.innerText = countTo.toLocaleString();
                            target.classList.add('counted');
                        }
                    }, 2000 / countTo);
                    observer.unobserve(target);
                }
            });
        }, options);
        
        statValues.forEach(stat => observer.observe(stat));
    }
    
    // Inicializar AOS si está disponible
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true
        });
    }
    
    // Inicializar Typed.js si está disponible
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
}); 