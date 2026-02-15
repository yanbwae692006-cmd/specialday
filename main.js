function openGift() {
    document.getElementById("giftModal").style.display = "flex";
}

function closeGift(event) {
    if (event.target.classList.contains("modal") ||
        event.target.classList.contains("modal-close")) {
        document.getElementById("giftModal").style.display = "none";
    }
}