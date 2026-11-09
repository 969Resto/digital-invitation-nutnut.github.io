
const pages = document.querySelectorAll(".page");
const music = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");

// GANTI HALAMAN
function goToPage(number) {
    pages.forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById("page" + number)
        .classList.add("active");

    // Putar video sesuai halaman
    const videos = document.querySelectorAll(".page video");

    videos.forEach(video => {
        video.pause();
    });

    const currentVideo = document.querySelector(
        "#page" + number + " video"
    );

    if (currentVideo) {
        currentVideo.currentTime = 0;
        currentVideo.play().catch(() => {});
    }

    // Musik mulai saat undangan dibuka
    if (number === 2 && music.paused) {
        music.play().then(() => {
            musicToggle.textContent = "♪ ON";
        }).catch(() => {});
    }
}

// MUSIK ON / OFF
musicToggle.addEventListener("click", () => {
    if (music.paused) {
        music.play().then(() => {
            musicToggle.textContent = "♪ ON";
        }).catch(() => {});
    } else {
        music.pause();
        musicToggle.textContent = "♪ OFF";
    }
});

// NAMA TAMU DARI URL
const params = new URLSearchParams(window.location.search);
const guest = params.get("to");

if (guest) {
    document.getElementById("guestName").textContent =
        decodeURIComponent(guest.replace(/\+/g, " "));
}
