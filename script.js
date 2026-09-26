// File script.js saat ini hanya untuk penanganan dasar formulir.

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                fullName: formData.get('fullName'),
                message: formData.get('message')
            };

            console.log('Data Formulir Dikirim:', data);
            contactForm.reset();
            alert('Pesan Anda telah dikirim! Terima kasih ' + data.name + '.');
        });
    }

    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');

            if (!targetId || !targetId.startsWith('#')) return;

            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            event.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});
document.body.insertAdjacentHTML('beforeend', modalHTML);

const modal = document.getElementById('customModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeModal = document.getElementById('closeModal');

const openModal = (title, desc) => {
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modal.classList.add('active');
};

closeModal.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
});

// --- 2. Event Klik Kartu Skill ---
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    item.addEventListener('click', () => {
        const skillName = item.querySelector('p')?.textContent || 'Skill';
        openModal(skillName, `Kamu mengklik keahlian ${skillName}. Keahlian ini digunakan untuk membangun aplikasi web modern yang responsif dan performan.`);
    });
});

// --- 3. Event Klik Kartu Proyek ---
const projectItems = document.querySelectorAll('.project-item');
projectItems.forEach(item => {
    item.addEventListener('click', () => {
        const projectTitle = item.querySelector('h3')?.textContent || 'Detail Proyek';
        const projectDesc = item.querySelector('p')?.textContent || 'Deskripsi proyek tidak tersedia.';
        openModal(projectTitle, projectDesc);
    });
});

// --- 4. Event Klik Foto Profil (Efek Interaktif) ---
const profileFrames = document.querySelectorAll('.profile-frame');
profileFrames.forEach(frame => {
    frame.addEventListener('click', () => {
        frame.style.transform = 'scale(0.95)';
        setTimeout(() => {
            frame.style.transform = 'scale(1)';
        }, 150);
    });
});

// --- 5. Handling Form Kontak ---
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name') || 'Teman',
            email: formData.get('email'),
            message: formData.get('message')
        };

        openModal('Pesan Terkirim!', `Terima kasih ${data.name}, pesan Anda telah berhasil dikirim. Saya akan segera menghubungi Anda kembali!`);
        contactForm.reset();
    });
    
}
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Buat Elemen Modal Popup Dinamis di HTML ---
    const modalHTML = `

// --- 6. Smooth Scroll Navigation ---
const navLinks = document.querySelectorAll('header nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');

        if (!targetId || !targetId.startsWith('#')) return;

        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        event.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

`;
document.body.insertAdjacentHTML('beforeend', modalHTML);

// Seleksi Elemen Modal
const modal = document.getElementById('customModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeModal = document.getElementById('closeModal');

// Fungsi Buka Modal
const openModal = (title, desc) => {
    if (!modal) return;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modal.classList.add('active');
};

// Event Tutup Modal
if (closeModal) {
    closeModal.addEventListener('click', () => modal.classList.remove('active'));
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });
}

// 2. Event Klik Kartu Skill
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    item.addEventListener('click', () => {
        const skillName = item.querySelector('p')?.textContent || 'Skill';
        openModal(skillName, `Kamu mengklik keahlian ${skillName}. Keahlian ini digunakan untuk membangun aplikasi web modern yang responsif dan performan.`);
    });
});

// 3. Event Klik Kartu Proyek
const projectItems = document.querySelectorAll('.project-item');
projectItems.forEach(item => {
    item.addEventListener('click', () => {
        const projectTitle = item.querySelector('h3')?.textContent || 'Detail Proyek';
        const projectDesc = item.querySelector('p')?.textContent || 'Deskripsi proyek tidak tersedia.';
        openModal(projectTitle, projectDesc);
    });
});

// 4. Event Klik Foto Profil (Efek Interaktif)
const profileFrames = document.querySelectorAll('.profile-frame');
profileFrames.forEach(frame => {
    frame.addEventListener('click', () => {
        frame.style.transform = 'scale(0.95)';
        setTimeout(() => {
            frame.style.transform = 'scale(1)';
        }, 150);
    });
});

// 5. Handling Form Kontak
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name') || formData.get('fullName') || 'Teman';

        openModal('Pesan Terkirim!', `Terima kasih ${name}, pesan Anda telah berhasil dikirim. Saya akan segera menghubungi Anda kembali!`);
        contactForm.reset();
    });
}

// 6. Smooth Scroll Navigation
const navLinks = document.querySelectorAll('header nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');

        if (!targetId || !targetId.startsWith('#')) return;

        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        event.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});