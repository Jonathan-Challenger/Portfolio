$('i.fa-bars').on('click', () => {
    $(".navbar-links").toggleClass("open")
})

const cards = document.querySelectorAll(".item");

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', () => {
        cards[i].classList.toggle("flipped")
    })
}

const lets = document.querySelectorAll('.letter');

for (let i = 0; i < lets.length; i++) {
    lets[i].addEventListener('mouseover', () => {
        lets[i].classList.add("triggered")
        setTimeout(function() {
            lets[i].classList.remove("triggered")
        }, 1100)
    })
}