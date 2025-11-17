// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Update active nav link based on current page
function updateActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call on page load
updateActiveNav();

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.querySelectorAll('.intro-card, .skill-category, .project-card, .contact-card, .social-link').forEach(el => {
    el.classList.add('fade-in-element');
    observer.observe(el);
});

// Video autoplay on hover
const videos = document.querySelectorAll('video');
videos.forEach(video => {
    video.addEventListener('mouseenter', function() {
        this.play();
    });
    
    video.addEventListener('mouseleave', function() {
        this.pause();
    });
});

// Enhance project cards with additional interaction
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
});

// Skill progress animation
const skillProgressBars = document.querySelectorAll('.skill-progress');
skillProgressBars.forEach(bar => {
    const widthValue = bar.style.width;
    bar.style.width = '0%';
    
    setTimeout(() => {
        bar.style.width = widthValue;
    }, 100);
});

// Smooth page transitions
document.querySelectorAll('a:not([target="_blank"])').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
            // Allow normal navigation for same-domain links
        }
    });
});

// Performance optimization - debounce scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        // Scroll event logic here
    }, 100);
});
