document.getElementById('cash-out-button').addEventListener('click', function (event) {

    //Prevent the default behaviour or not to reload the page.
    event.preventDefault();

    // Get the amount to be cash out.
    const cashOut = getInputValueById('cash-out-amount');
    console.log(cashOut);

    // Get the pin number.
    const cashOutPin = document.getElementById('cash-out-pin').value;
    console.log(cashOutPin);

    // Validation.
    if (isNaN(cashOut)) {
        alert('Failed to cash out. Amount must be a number.');
        return;
    }

    if (cashOutPin === '1234') {
        console.log('Cash Out money from your account.')

        // Get the current account balance.
        const currentBalance = getTextValueById('current-account-balance');
        console.log(currentBalance);
        const remainingBalance = currentBalance - cashOut;

        if (remainingBalance < 0) {
            alert('Insufficient Balance. Failed to cash out.');
            return;
        }
        
        else {
            document.getElementById('current-account-balance').innerText = remainingBalance;

            // Add to transaction history.
            const history = document.createElement('p');
            history.innerText = `Cash Out ${cashOut} Taka from your Account. Your New Balance is ${remainingBalance}.`;
            document.getElementById('transactions-container').appendChild(history);
        }
    }

    else
        alert('Failed to cash out. Please try again.')
})