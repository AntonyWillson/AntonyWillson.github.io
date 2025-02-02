document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.querySelector(".no-btn");
    const yesBtn = document.querySelector(".yes-btn");
    const clickSound = document.getElementById("clickSound");

    function moveButton() {
        const btnGroup = document.querySelector(".btn-group"); // Ambil parent tombol
        const maxX = btnGroup.clientWidth - noBtn.clientWidth; // Maksimum pergerakan X
        const maxY = btnGroup.clientHeight - noBtn.clientHeight; // Maksimum pergerakan Y
        
        const randomX = Math.random() * maxX; // Posisi X acak dalam batasan parent
        const randomY = Math.random() * maxY; // Posisi Y acak dalam batasan parent
        
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`; // Pindah posisi dengan transform
    }

    // PC: Tombol "No" bergerak saat hover
    noBtn.addEventListener("mouseover", moveButton);

    // Mobile: Tombol "No" bergerak saat disentuh
    noBtn.addEventListener("touchstart", moveButton);

    // Efek animasi dan suara saat tombol "Yes" ditekan
    yesBtn.addEventListener("click", function () {
        clickSound.play();
        document.body.innerHTML = `
            <div class="wrapper">
                <h2 class="question">Yay! I knew you would say yes! ❤️</h2>
                <img class="gif" alt="gif" src="https://media.giphy.com/media/111ebonMs90YLu/giphy.gif" />
            </div>
        `;
    });
});
