// ── GA4 Event Name Config ─────────────────────────────────────────────────────
// Edit the VALUES (right side) to rename any GA4 event.
// Do NOT change the KEYS (left side) — they match data-track attributes in the HTML.
const EVENT_NAMES = {
    // Hero
    cta_view_my_work:               'cta_view_my_work',
    cta_whatsapp:                   'cta_whatsapp',
    cta_line_id:                    'cta_line_id',

    // Experience
    exp_messagespring_linkedin:     'exp_messagespring_linkedin',
    exp_consensysai_website:        'exp_consensysai_website',
    exp_proximitydesigns_website:   'exp_proximitydesigns_website',
    exp_proximitydesigns_linkedin:  'exp_proximitydesigns_linkedin',
    exp_onow_website:               'exp_onow_website',
    exp_onow_linkedin:              'exp_onow_linkedin',

    // Certifications
    cert_powerbi:                   'cert_powerbi',
    cert_snowprocore:               'cert_snowprocore',
    cert_fabric_analytics:          'cert_fabric_analytics',
    cert_fabric_data_engineer:      'cert_fabric_data_engineer',
    cert_snowpro_associate:         'cert_snowpro_associate',
    cert_aws_data_engineer:         'cert_aws_data_engineer',

    // Projects — Power BI
    proj_northwind_trading:         'proj_northwind_trading',
    proj_road_accident:             'proj_road_accident',
    proj_washington_crime:          'proj_washington_crime',

    // Projects — Data Engineering
    proj_snowflake_crypto_de:       'proj_snowflake_crypto_de',
};
// ─────────────────────────────────────────────────────────────────────────────

document.addEventListener('sectionsReady', () => {
    if (typeof gtag !== 'function') return;

    document.querySelectorAll('[data-track]').forEach(el => {
        el.addEventListener('click', () => {
            const key = el.dataset.track;
            const eventName = EVENT_NAMES[key] ?? key;
            gtag('event', eventName);
        });
    });
});
