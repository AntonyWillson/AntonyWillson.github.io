document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.querySelector(".no-btn");
    const yesBtn = document.querySelector(".yes-btn");
    const clickSound = document.getElementById("clickSound");

    function moveButton() {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth - 20);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight - 20);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
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
