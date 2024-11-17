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

function toggleDetails(id, button) {
    var element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
        button.textContent = "Hide Details";
    } else {
        element.style.display = "none";
        button.textContent = "Show Details";
    }
}

setInterval(updateClock, 1000);
updateClock();


document.addEventListener('DOMContentLoaded', function () {
    const bars = document.querySelectorAll('.bar_front');
    function isElementInView(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    function animateBars() {
        bars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            if (isElementInView(bar)) {
                bar.style.width = targetWidth;
            }
        });
    }
    window.addEventListener('scroll', animateBars);
    animateBars();
});

document.addEventListener('DOMContentLoaded', function () {
    const quoteElement = document.getElementById('quote');
    const quoteText = quoteElement.querySelector('p');
    const quoteAuthor = quoteElement.querySelector('cite');

    async function getRandomQuote() {
        try {
            const response = await fetch('https://programming-quotes-api.herokuapp.com/quotes/random');
            const data = await response.json();
            quoteText.textContent = `“${data.en}”`;
            quoteAuthor.textContent = `— ${data.author}`;
        } catch (error) {
            console.error("Error while retrieving the quote:", error);
        }
    }

    getRandomQuote();
});
