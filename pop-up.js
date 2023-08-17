const openPopupLink = document.getElementById('openPopupLink');
const popupContainer = document.getElementById('popupContainer');
const closePopup = document.getElementById('closePopup');

openPopupLink.addEventListener('click', function() {
    popupContainer.style.display = 'block'; // Affiche la pop-up
    popupContainer.style.min-width = '250px';
});

closePopup.addEventListener('click', function() {
    popupContainer.style.display = 'none'; // Masque la pop-up
});
