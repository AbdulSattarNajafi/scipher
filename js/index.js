'use strict';

// Main Page Profile Dropdown
(function() {
    const dropdownBtn = document.getElementById('profile-dropdown-btn');
    const dropdownContent = document.getElementById('profile-dropdown');
    
    dropdownBtn.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });
})();

const toggleCreateCustom = () => {
    const createCustomModal = document.getElementById('create-custom-modal');
    createCustomModal.classList.toggle('show');
    document.body.classList.toggle('no-overflow');
};

const toggleCreateTaboo = () => {
    const createCustomModal = document.getElementById('create-taboo-modal');
    createCustomModal.classList.toggle('show');
    document.body.classList.toggle('no-overflow');
};

const toggleUserSettings = () => {
    const userSettingsModal = document.getElementById('user-settings');
    const dropdownContent = document.getElementById('profile-dropdown');
    userSettingsModal.classList.toggle('show');
    document.body.classList.toggle('no-overflow');
    dropdownContent.classList.remove('show');
};


// Selects
$(document).ready(function() {
    $('#grid-size').select2();
    $('#theme').select2();
    $('#theme').select2();
    $('#privacy').select2();
    $('#settings').select2();

    // Create Taboo
    $('#room-privacy').select2();
    $('#total-team').select2();
    $('#game-mode').select2();
    $('#standard-mode-difficulty').select2();
    $('#time-bank').select2();
    $('#words-per-turn').select2();

    // User settings selects
    $('#win-rate').select2();
    $('#detailed-statistics').select2();
    $('#trophy-number').select2();
    $('#allowing-friends').select2();
});
