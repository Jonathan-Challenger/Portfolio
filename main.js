$('i.fa-bars').on('click', () => {
    $(".navbar-links").toggleClass("open")
})

const cards = document.querySelectorAll(".item");

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', () => {
        cards[i].classList.toggle("flipped")
    })
}