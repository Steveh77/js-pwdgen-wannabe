// chiedi all'utente il suo nome
// poi chiedi il suo cognome
// poi chiedi il suo colore preferito
// infine scrivi nella pagina nomecognomecolorepreferito21


const password = document.getElementById('result');

const Name = prompt("come ti chiami");
console.log(Name);

const lastName = prompt("qual è il tuo cognome?");
console.log(lastName);

const favouriteColor = prompt("qual è il tuo colore preferito?");
console.log(favouriteColor);

password.innerText ="La tua password è: " + Name + lastName + favouriteColor + "21";
console.log(password);
