// Modern Portfolio JavaScript

// DOM Elements
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;
const cursorFollower = document.querySelector('.cursor-follower');
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section');
const cards = document.querySelectorAll('[data-tilt]');
const sideNav = document.querySelector('.side-nav');
const logoText = document.querySelector('.logo-text');

// Initial Setup
window.addEventListener('load', () => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeSwitch.checked = true;
    }

    // Initialize scroll-based animations
    initScrollAnimations();
    
    // Initialize tilt effect for cards
    initTiltEffect();
    
    // Add loading animation class to body
    body.classList.add('loaded');
    
    // Set active nav item based on current scroll position
    updateActiveNavOnScroll();
});

// Theme Toggle
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    }
});

// Custom Cursor
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) { // Only on larger screens
        cursorFollower.style.display = 'block';
        cursorFollower.style.left = `${e.clientX}px`;
        cursorFollower.style.top = `${e.clientY}px`;
    } else {
        cursorFollower.style.display = 'none';
    }
});

// Cursor interactions with interactive elements
const interactiveElements = document.querySelectorAll('a, button, .skill-card, .approach-card, .glass-card');
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursorFollower.style.width = '50px';
        cursorFollower.style.height = '50px';
        cursorFollower.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        cursorFollower.style.mixBlendMode = 'overlay';
    });
    
    element.addEventListener('mouseleave', () => {
        cursorFollower.style.width = '30px';
        cursorFollower.style.height = '30px';
        cursorFollower.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        cursorFollower.style.mixBlendMode = 'difference';
    });
});

// Update active navigation item based on scroll position
function updateActiveNavOnScroll() {
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${sectionId}`) {
                    item.classList.add('active');
                }
            });
        }
    });
}

// Trigger updateActiveNavOnScroll on scroll
window.addEventListener('scroll', updateActiveNavOnScroll);

// Smooth scrolling for navigation links
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
        
        // Update active nav item
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});

// Scroll indicator click handler
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    const aboutSection = document.getElementById('about');
    window.scrollTo({
        top: aboutSection.offsetTop - 50,
        behavior: 'smooth'
    });
});

// Initialize tilt effect on cards
function initTiltEffect() {
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(cards, {
            max: 5,
            speed: 400,
            glare: true,
            "max-glare": 0.1
        });
    }
}

// Initialize scroll-based animations
function initScrollAnimations() {
    // Detect elements in viewport and add 'in-view' class
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe all sections and cards
    document.querySelectorAll('section, .glass-card').forEach(element => {
        observer.observe(element);
        // Add animated class for CSS animations
        element.classList.add('animated');
    });
}

// Form submission handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple form validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would normally send the form data to a server
        // For this demo, we'll just show a success message
        contactForm.innerHTML = `<div class="success-message">
            <i class="fas fa-check-circle"></i>
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out, ${name}. I'll get back to you soon.</p>
        </div>`;
    });
}

// Add mobile navigation toggle functionality
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');

mobileNavToggle.addEventListener('click', () => {
    sideNav.classList.toggle('active');
    document.body.classList.toggle('nav-open');
    
    // Reset logo animation when toggling mobile nav
    if (sideNav.classList.contains('active')) {
        logoText.style.animation = 'none';
        // Trigger reflow
        void logoText.offsetWidth;
        logoText.style.animation = 'logoReveal 0.5s ease-out';
    }
});

// Close mobile nav when clicking outside
document.addEventListener('click', (e) => {
    if (sideNav.classList.contains('active') && 
        !e.target.closest('.side-nav') && 
        !e.target.closest('.mobile-nav-toggle')) {
        sideNav.classList.remove('active');
        document.body.classList.remove('nav-open');
    }
});

// Close mobile nav when clicking on a nav link (on mobile)
if (window.innerWidth <= 768) {
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            sideNav.classList.remove('active');
            document.body.classList.remove('nav-open');
        });
    });
}

// Update navigation on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        sideNav.classList.remove('active');
        document.body.classList.remove('nav-open');
    }
});

// Add text glitch effect to the hero title
const glitchText = document.querySelector('.glitch-text');
if (glitchText) {
    // Create layers for glitch effect
    const originalText = glitchText.innerHTML;
    glitchText.innerHTML = `
        <span class="glitch-layer layer1">${originalText}</span>
        <span class="glitch-layer layer2">${originalText}</span>
        <span class="glitch-layer layer3">${originalText}</span>
        ${originalText}
    `;
    
    // Add CSS for glitch effect
    const glitchStyle = document.createElement('style');
    glitchStyle.innerHTML = `
        .glitch-text {
            position: relative;
        }
        
        .glitch-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
        }
        
        @keyframes glitch-anim-1 {
            0% { opacity: 1; transform: translate3d(10px, 0, 0); clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%); }
            2% { clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%); }
            4% { clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%); }
            6% { clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%); }
            8% { clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); }
            10% { clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%); }
            12% { clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%); }
            14% { clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%); }
            16% { clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%); }
            18% { clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%); }
            20% { clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%); }
            21.9% { opacity: 1; transform: translate3d(10px, 0, 0); }
            22%, 100% { opacity: 0; transform: translate3d(0, 0, 0); }
        }
        
        .layer1 {
            transform: translate3d(-10px, 0, 0);
            animation: glitch-anim-1 4s infinite linear alternate;
        }
        
        .light-mode .layer1 { color: var(--accent-primary-light); }
        .dark-mode .layer1 { color: var(--accent-primary-dark); }
        
        @keyframes glitch-anim-2 {
            0% { opacity: 1; transform: translate3d(-10px, 0, 0); clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%); }
            3% { clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%); }
            5% { clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%); }
            7% { clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%); }
            9% { clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%); }
            11% { clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%); }
            13% { clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%); }
            15% { clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%); }
            17% { clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%); }
            19% { clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%); }
            20% { clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%); }
            21.9% { opacity: 1; transform: translate3d(-10px, 0, 0); }
            22%, 100% { opacity: 0; transform: translate3d(0, 0, 0); }
        }
        
        .layer2 {
            transform: translate3d(10px, 0, 0);
            animation: glitch-anim-2 3s infinite linear alternate;
        }
        
        .light-mode .layer2 { color: var(--accent-secondary-light); }
        .dark-mode .layer2 { color: var(--accent-secondary-dark); }
        
        @keyframes glitch-anim-3 {
            0% { opacity: 1; transform: translate3d(0, 5px, 0) scale3d(1.1, 0.9, 1); clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%); }
            1.5% { clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%); }
            2% { clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%); }
            2.5% { clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%); }
            3% { clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%); }
            5.5% { clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%); }
            6% { clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%); }
            7.5% { clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%); }
            8% { clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%); }
            9.5% { clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%); }
            10% { clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%); }
            11.5% { clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%); }
            12% { clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%); }
            14% { clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%); }
            14.5% { clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%); }
            15% { clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%); }
            16% { clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%); }
            18% { clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%); }
            19.9% { opacity: 1; transform: translate3d(0, 5px, 0) scale3d(1.1, 0.9, 1); }
            20%, 100% { opacity: 0; transform: translate3d(0, 0, 0) scale3d(1, 1, 1); }
        }
        
        .layer3 {
            transform-origin: center;
            animation: glitch-anim-3 2.5s infinite ease-in-out alternate;
        }
        
        .light-mode .layer3 { color: var(--accent-tertiary-light); }
        .dark-mode .layer3 { color: var(--accent-tertiary-dark); }
    `;
    document.head.appendChild(glitchStyle);
}

// Add animated background gradient
const gradientBackground = document.createElement('div');
gradientBackground.classList.add('gradient-background');
document.body.insertBefore(gradientBackground, document.body.firstChild);

const gradientStyle = document.createElement('style');
gradientStyle.innerHTML = `
    .gradient-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        pointer-events: none;
        opacity: 0.5;
    }
    
    .light-mode .gradient-background {
        background: linear-gradient(40deg, rgba(114, 9, 183, 0.03), rgba(67, 97, 238, 0.03), rgba(0, 194, 168, 0.03));
        background-size: 400% 400%;
        animation: gradient-shift 15s ease infinite;
    }
    
    .dark-mode .gradient-background {
        background: linear-gradient(40deg, rgba(191, 90, 242, 0.05), rgba(94, 129, 252, 0.05), rgba(0, 212, 177, 0.05));
        background-size: 400% 400%;
        animation: gradient-shift 15s ease infinite;
    }
    
    @keyframes gradient-shift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
`;
document.head.appendChild(gradientStyle);

// Add page transition effects
const pageTransitionStyle = document.createElement('style');
pageTransitionStyle.innerHTML = `
    body {
        opacity: 0;
        transition: opacity 0.6s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .animated {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .animated.in-view {
        opacity: 1;
        transform: translateY(0);
    }
    
    .glass-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease;
        transition-delay: calc(var(--card-index, 0) * 0.1s);
    }
    
    .glass-card.in-view {
        opacity: 1;
        transform: translateY(0);
    }
    
    .success-message {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
        padding: 30px;
        text-align: center;
    }
    
    .success-message i {
        font-size: 3rem;
        color: #4BB543;
    }
`;
document.head.appendChild(pageTransitionStyle);

// Set index for staggered animations
document.querySelectorAll('.glass-card').forEach((card, index) => {
    card.style.setProperty('--card-index', index);
});