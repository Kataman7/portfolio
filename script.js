const options = {
    timeZone: 'Europe/Paris',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
};

function updateClock() { 
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('fr-FR', options);
    const timeString = formatter.format(now);

    document.getElementById('clock').textContent = timeString;
}

function copyMail() {
    navigator.clipboard.writeText("antonin.chabaud-pech@etu.umontpellier.fr")
    alert("Email address copied to your clipboard")
}

setInterval(updateClock, 1000);
updateClock();
