
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav-desktop');
    const navButtons = document.querySelector('.nav-buttons');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            // Toggle mobile menu visibility
            if (nav) {
                nav.classList.toggle('mobile-active');
            }
            if (navButtons) {
                navButtons.classList.toggle('mobile-active');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Animate stats on scroll
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe stat items
    document.querySelectorAll('.stat-item').forEach(item => {
        observer.observe(item);
    });
    
    // Form interactions
    const searchInputs = document.querySelectorAll('.search-input input');
    searchInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
    
    // Topic tag interactions
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('click', function() {
            // Toggle active state
            this.classList.toggle('active');
            
            // Add the topic to search input
            const searchInput = document.querySelector('.search-input input');
            if (searchInput && this.classList.contains('active')) {
                const currentValue = searchInput.value;
                const tagText = this.textContent;
                if (!currentValue.includes(tagText)) {
                    searchInput.value = currentValue ? `${currentValue}, ${tagText}` : tagText;
                }
            }
        });
    });
    
    // Button click handlers
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            // Add click animation
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 200);
            
            // Handle specific button actions
            const buttonText = this.textContent.trim();
            
            if (buttonText.includes('Search')) {
                handleSearch();
            } else if (buttonText.includes('Sign Up') || buttonText.includes('Get Started') || buttonText.includes('Go Pro')) {
                handleSignUp(buttonText);
            } else if (buttonText.includes('Contact Sales')) {
                handleContactSales();
            }
        });
    });
    
    function handleSearch() {
        const searchInput = document.querySelector('.search-input input');
        const locationInput = document.querySelectorAll('.search-input input')[1];
        
        console.log('Search triggered:', {
            query: searchInput?.value || '',
            location: locationInput?.value || ''
        });
        
        // Here you would typically make an API call or redirect to search results
        alert('Search functionality would be implemented here!');
    }
    
    function handleSignUp(buttonType) {
        console.log('Sign up clicked:', buttonType);
        // Here you would typically redirect to a sign-up page
        alert(`${buttonType} functionality would be implemented here!`);
    }
    
    function handleContactSales() {
        console.log('Contact sales clicked');
        // Here you would typically open a contact form or redirect
        alert('Contact sales functionality would be implemented here!');
    }
});

// Add some CSS for mobile menu and animations
const additionalStyles = `
    @media (max-width: 767px) {
        .nav-desktop.mobile-active,
        .nav-buttons.mobile-active {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            z-index: 50;
        }
        
        .nav-desktop.mobile-active {
            border-bottom: 1px solid #e5e7eb;
        }
    }
    
    .header.scrolled {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    .stat-item {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease;
    }
    
    .stat-item.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .search-input.focused {
        transform: scale(1.02);
    }
    
    .tag.active {
        background-color: #663090 !important;
        color: white !important;
    }
    
    .btn.clicked {
        transform: scale(0.95);
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
