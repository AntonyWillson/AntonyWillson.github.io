document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.querySelector(".no-btn");
    const yesBtn = document.querySelector(".yes-btn");
    const clickSound = document.getElementById("clickSound");

    // Array untuk menyimpan teks yang akan ditampilkan
    const messages = [
        "Whyyyyyy 😢",
        "Yes, Pleaseeeeee😊",
        "Cmonnnnn 😢",
        "Tell meee whyyyy",
        "Kenapaaa looo",
        "Hmmmmm"
    ];
    let currentMessageIndex = 0; // Indeks untuk melacak pesan saat ini
    let scale = 1.5; // Skala awal untuk tombol "Yes"

    yesBtn.addEventListener("click", function () {
        clickSound.play();
        document.body.innerHTML = `
            <div class="wrapper">
                <h2 class="question">Yay! I knew you would say yes! </h2>
                <img class="gif" alt="gif" src="https://media.giphy.com/media/111ebonMs90YLu/giphy.gif" />
            </div>
        `;
    });

    // Event listener untuk tombol "No"
    noBtn.addEventListener("click", function () {
        scale += 0.1; // Tambahkan skala setiap kali tombol "No" diklik
        yesBtn.style.transform = `scale(${scale})`; // Memperbesar tombol "Yes"
        
        // Menampilkan pesan baru
        const newText = document.createElement("h3");
        newText.textContent = messages[currentMessageIndex];
        newText.style.color = "#ff4d79"; // Warna teks sesuai dengan tema
        
        // Menghapus teks sebelumnya jika ada
        const existingText = document.querySelector(".wrapper h3");
        if (existingText) {
            existingText.remove();
        }
        
        document.querySelector(".wrapper").appendChild(newText);
        
        // Mengupdate indeks pesan
        currentMessageIndex = (currentMessageIndex + 1) % messages.length; // Mengulangi pesan
    });
});
