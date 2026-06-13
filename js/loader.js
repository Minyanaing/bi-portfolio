const sections = [
    { id: 'section-hero',           file: './sections/hero.html' },
    { id: 'section-experience',     file: './sections/experience.html' },
    { id: 'section-certifications', file: './sections/certifications.html' },
    { id: 'section-skills',         file: './sections/skills.html' },
    { id: 'section-projects',       file: './sections/projects.html' },
];

document.addEventListener('DOMContentLoaded', async () => {
    await Promise.all(sections.map(async ({ id, file }) => {
        const res = await fetch(file);
        const html = await res.text();
        document.getElementById(id).outerHTML = html;
    }));
    document.dispatchEvent(new Event('sectionsReady'));
});
