document.addEventListener('sectionsReady', () => {
    const track = (eventName, params) => {
        if (typeof gtag !== 'function') return;
        gtag('event', eventName, params);
    };

    // Hero CTA buttons
    document.querySelector('a.cta-button[href="#projects"]')
        ?.addEventListener('click', () => track('cta_click', { button: 'view_my_work' }));

    document.getElementById('whatsapp-btn')
        ?.addEventListener('click', () => track('cta_click', { button: 'whatsapp_id' }));

    document.getElementById('qr-code-btn')
        ?.addEventListener('click', () => track('cta_click', { button: 'line_id' }));

    // Company profile links in experience section
    document.querySelectorAll('.timeline-meta a[href^="http"]').forEach(link => {
        link.addEventListener('click', () => {
            track('company_profile_click', {
                company: link.textContent.trim().replace(/\s+/g, ' ')
            });
        });
    });

    // Certification links
    document.querySelectorAll('#certification .skill-card a').forEach(link => {
        link.addEventListener('click', () => {
            track('certification_click', {
                certification: link.textContent.trim().replace(/\s+/g, ' ')
            });
        });
    });

    // Project report buttons
    document.querySelectorAll('.view-report-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const project = btn.closest('.card')?.querySelector('h3')?.textContent.trim();
            track('project_report_click', { project });
        });
    });
});
