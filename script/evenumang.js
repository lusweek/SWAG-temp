const modal = document.querySelector('.modal-section');
const modalImg = document.querySelector('#modal-img');
const modalTitle = document.querySelector('#modal-title');
const modalText = document.querySelector('#modal-text');
const liPlats = document.querySelector('#li-plats');
const liTid = document.querySelector('#li-tid');
const liPris = document.querySelector('#li-pris');
const modalFooter = document.querySelector('.modal-footer');


const closeModal = () => {
    const button = document.querySelector('#button')
    button.remove()
    modal.style.display='none';
} 
const openModal = () => modal.style.display='flex';

const openSM = () => {
    openModal()
    console.log('yes den är öppen');
    modalTitle.innerHTML="NU SNACKAR VI!"
    modalText.innerHTML="Tite text som förklarar saker och ting"
    liPlats.innerHTML="Plats: Hos din mamma."
    liTid.innerHTML="Tid: Kvart i sex"
    liPris.innerHTML="Pris: 500 kr timmen"

    const button = document.createElement("button")
    button.setAttribute('id', 'button')
    button.innerHTML='Prova klicka här du!'
    modalFooter.appendChild(button)

}