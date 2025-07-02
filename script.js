document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.expandable-section');
    
    sections.forEach(section => {
        const btn = section.querySelector('.section-toggle');
        const content = section.querySelector('.section-content');
        const icon = section.querySelector('.toggle-icon');
        
        // Começa fechado
        content.style.maxHeight = '0';
        
        btn.addEventListener('click', () => {
            // Fecha todos os outros
            sections.forEach(sec => {
                if (sec !== section) {
                    sec.querySelector('.section-content').style.maxHeight = '0';
                    sec.querySelector('.toggle-icon').style.transform = 'rotate(0deg)';
                }
            });
            
            // Alterna o atual
            if (content.style.maxHeight === '0px') {
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.style.maxHeight = '0';
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
});