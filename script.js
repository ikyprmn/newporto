document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form untuk refresh halaman

            // Ambil data dari form
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Di sini Anda bisa menambahkan logika untuk mengirim data,
            // misalnya ke backend atau menampilkan pesan sukses.
            console.log(`Pesan baru dari ${name} (${email}): ${message}`);
            
            alert('Pesan Anda telah terkirim! Terima kasih.');

            // Reset form setelah dikirim
            contactForm.reset();
        });
    }

    // Smooth scroll untuk navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Dapatkan elemen tombol hamburger dan daftar tautan navigasi
    const hamburgerMenu = document.getElementById('hamburger-menu'); 
    const navLinks = document.getElementById('nav-links'); 

    // Pastikan kedua elemen ditemukan di DOM
    if (hamburgerMenu && navLinks) {
        // Tambahkan event listener untuk mendeteksi klik pada tombol hamburger
        hamburgerMenu.addEventListener('click', () => {
            // Tambah atau hapus kelas 'active' pada daftar tautan navigasi
            navLinks.classList.toggle('active');
        });

        // Tambahkan event listener pada setiap tautan untuk menutup menu
        // setelah diklik (opsional, tapi disarankan)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Kode smooth scroll (dapat dipertahankan)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});