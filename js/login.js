document.getElementById('login-button').addEventListener('click', function (event) {

    //Prevent the default behaviour or not to reload the page.
    event.preventDefault();

    // Get the phone number and the pin number.
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);

    // Validity Condition.
    if (phoneNumber === '1234' && pinNumber === '1234') {
        console.log("You are logged in.");
        window.location.href = '/home.html';
    }

    else
        alert('Wrong phone number or pin number.')

})