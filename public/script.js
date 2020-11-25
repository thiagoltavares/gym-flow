/* const modalOverlay = document.querySelector('.modal-overlay'); */
const cards = document.querySelectorAll('.card')
console.log(cards);
for (const card of cards) {
    card.addEventListener('click', function () {
     const videoId = card.getAttribute("id")
     window.location.href = `/video?id=${videoId}`
    })
}


