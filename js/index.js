let passwordHolder = document.getElementById('newPswd');

let firstName = prompt('Qual è il tuo nome?');
let lastName = prompt('Qual è il tuo cognome?');
let color = prompt('Qual è il tuo colore preferito?');
let newPassowrd = firstName+lastName+color+'21';

if (isNaN(firstName) && isNaN(lastName) && isNaN(color)){
    passwordHolder.innerHTML = `
            <p id='newPassword' class="p-3 m-0 fw-bold">  
            ${newPassowrd}
            </p>  
    `
} else {
    
    passwordHolder.innerHTML = `
    <p class="p-3 m-0 fw-bold text-danger"> Reinserisci i tuoi dati per favore. (devono contenere solo testo e non possono essere vuoti.) </p>
`
}
 
