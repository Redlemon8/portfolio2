const openPopupLink = document.getElementById('openPopupLink');
const popupContainer = document.getElementById('popupContainer');
const closePopup = document.getElementById('closePopup');

openPopupLink.addEventListener('click', function() {
    popupContainer.style.display = 'block'; 
});

closePopup.addEventListener('click', function() {
    popupContainer.style.display = 'none';
});
