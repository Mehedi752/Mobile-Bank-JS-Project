document.getElementById('add-money-button').addEventListener('click', function (event) {

    //Prevent the default behaviour or not to reload the page.
    event.preventDefault();

    // Get money to be added to the acount by using function.
    const addMoney = getInputValueById('add-money-amount');
    console.log(addMoney);

    const pinNumber = document.getElementById('add-money-pin').value;
    console.log(pinNumber);

    // Pin number Validation.
    if (isNaN(addMoney)) {
        alert('Failed to add money. Amount must be a number.');
        return;
    }

    if (pinNumber === '1234') {
        console.log('Adding money to your acount.')

        // Get the current balance by using function.
        const currentBalance = getTextValueById('current-account-balance');
        console.log(currentBalance);

        const newBalance = currentBalance + addMoney;
        console.log(newBalance);

        // Set the new balance in the current account.
        document.getElementById('current-account-balance').innerText = newBalance;

        // Add to transaction history.
        const history = document.createElement('p');
        history.innerText = `Added ${addMoney} Taka to your Account. Your New Balance is ${newBalance}.`;
        document.getElementById('transactions-container').appendChild(history);
    }
    else
        alert('Failed to add money. Please try again.')

})
