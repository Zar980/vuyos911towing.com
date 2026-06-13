
        // Hamburger Menu Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        if (hamburger) {
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }

        // UNIFIED REUSABLE WHATSAPP SCRIPT
        const whatsappNumber = "27632641614";
        const whatsappBtns = document.querySelectorAll('.whatsappActionBtn');
        
        whatsappBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                let msg = prompt("Describe your emergency & location for fastest assistance:", "I need a tow truck / jump start / fuel / accident recovery near me, please help.");
                if (!msg) msg = "Need immediate roadside assistance - Vuyo's 911";
                window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
            });
        });

        // PHOTO GALLERY CAROUSEL LOGIC
        const galleryCarousel = document.getElementById('galleryCarousel');
        const galleryPrev = document.getElementById('galleryPrev');
        const galleryNext = document.getElementById('galleryNext');
        let galleryIndex = 0;
        const totalGallerySlides = document.querySelectorAll('.gallery-slide').length;

        function updateGalleryPosition() {
            galleryCarousel.style.transform = `translateX(-${galleryIndex * 100}%)`;
        }

        if(galleryNext && galleryPrev) {
            galleryNext.addEventListener('click', () => {
                if (galleryIndex < totalGallerySlides - 1) {
                    galleryIndex++;
                } else {
                    galleryIndex = 0; // Wrap around to first image
                }
                updateGalleryPosition();
            });

            galleryPrev.addEventListener('click', () => {
                if (galleryIndex > 0) {
                    galleryIndex--;
                } else {
                    galleryIndex = totalGallerySlides - 1; // Wrap around to last image
                }
                updateGalleryPosition();
            });
        }
