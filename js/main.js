document.addEventListener('sectionsReady', () => {
    const hamburgerButton = document.getElementById('hamburger-button');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('.main-header');

    hamburgerButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburgerButton.querySelector('i').classList.toggle('fa-bars');
        hamburgerButton.querySelector('i').classList.toggle('fa-times');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburgerButton.querySelector('i').classList.add('fa-bars');
                hamburgerButton.querySelector('i').classList.remove('fa-times');
            }
        });
    });

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Power BI Modal
    const pbiModal = document.getElementById('pbi-modal');
    const pbiIframe = document.getElementById('pbi-iframe');

    const openPbiModal = (url) => {
        pbiIframe.src = url;
        pbiModal.classList.add('active');
    };
    const closePbiModal = () => {
        pbiModal.classList.remove('active');
        pbiIframe.src = '';
    };

    document.querySelectorAll('.view-report-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.dataset.embedUrl) openPbiModal(btn.dataset.embedUrl);
        });
    });

    document.getElementById('modal-close-btn').addEventListener('click', closePbiModal);
    pbiModal.addEventListener('click', (e) => { if (e.target === pbiModal) closePbiModal(); });

    // QR Code Modal
    const qrModal = document.getElementById('qr-modal');
    const openQrModal = () => qrModal.classList.add('active');
    const closeQrModal = () => qrModal.classList.remove('active');

    document.getElementById('qr-code-btn').addEventListener('click', openQrModal);
    document.getElementById('qr-modal-close-btn').addEventListener('click', closeQrModal);
    qrModal.addEventListener('click', (e) => { if (e.target === qrModal) closeQrModal(); });

    // WhatsApp Modal
    const whatsappModal = document.getElementById('whatsapp-modal');
    const openWhatsappModal = () => whatsappModal.classList.add('active');
    const closeWhatsappModal = () => whatsappModal.classList.remove('active');

    document.getElementById('whatsapp-btn').addEventListener('click', openWhatsappModal);
    document.getElementById('whatsapp-modal-close-btn').addEventListener('click', closeWhatsappModal);
    whatsappModal.addEventListener('click', (e) => { if (e.target === whatsappModal) closeWhatsappModal(); });

    // Escape key closes any open modal
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        if (pbiModal.classList.contains('active')) closePbiModal();
        if (qrModal.classList.contains('active')) closeQrModal();
        if (whatsappModal.classList.contains('active')) closeWhatsappModal();
    });
});
