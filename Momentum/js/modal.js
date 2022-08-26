const modal = document.querySelector(".modal");
const btnOpenPopup = document.querySelector(".btn-open-popup");
const btnClosePopup = document.querySelector(".modal_close");

btnOpenPopup.addEventListener('click', () => {
    modal.style.display = 'block';
});

btnClosePopup.addEventListener('click', () => {
    modal.style.display = 'none';
});

