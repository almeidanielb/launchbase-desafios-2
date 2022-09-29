const   modalOverlay = document.querySelector(".modal-overlay")
const   cards = document.querySelectorAll(".card")

for (let card of cards) {
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${videoId}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector('iframe').src = ""
})


/* Além do botão de fechar o modal, é preciso implementar a funcionalidade de maximizar o modal 
(dica: utilize a mesma lógica implementada para fechar o modalOverlay, mas trabalhe com a classe modal e utilize o método contains
do classList para verificar se o elemento está ou não com a classe maximize). */

document.querySelector(".maximize-modal").addEventListener("click", function() {
    if (!modalOverlay.classList.contains("fullscreen")) {
        modalOverlay.classList.add("fullscreen")
    }   else {
        modalOverlay.classList.remove("fullscreen")
    }
})

// element.classList.contains(className);