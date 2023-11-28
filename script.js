function updateCountdown() {
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 13, 2024 00:00:00").getTime();

    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown in the "countdown" div
    document.getElementById("countdown").innerHTML = days + "ថ្ងៃ​​ " + hours + "ម៉ោង "
        + minutes + "នាទី " + seconds + "វិនាទី ";

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}

// Update the countdown every 1 second
var interval = setInterval(updateCountdown, 1000);
updateCountdown();
document.getElementById('fast-scroll-button').addEventListener('click', function () {
    const targetElement = document.getElementById('qr-block');

    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
});