const passwordInput = document.getElementById('password');
const generatePasswordButton = document.getElementById('generate-password');
const passwordLengthInput = document.getElementById('password-length');
const includeUppercaseCheckbox = document.getElementById('include-uppercase');
const includeNumbersCheckbox = document.getElementById('include-numbers');
const includeSpecialCharactersCheckbox = document.getElementById('include-special-characters');

const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specialCharacters = '!@#$%^&*()_+~`|}{[]:;?><,./';

generatePasswordButton.addEventListener('click', generatePassword);

function generatePassword() {
    let password = '';
    let characters = lowercaseLetters;

    if (includeUppercaseCheckbox.checked) {
        characters += uppercaseLetters;
    }

    if (includeNumbersCheckbox.checked) {
        characters += numbers;
    }

    if (includeSpecialCharactersCheckbox.checked) {
        characters += specialCharacters;
    }

    const passwordLength = parseInt(passwordLengthInput.value);

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    passwordInput.value = password;
}