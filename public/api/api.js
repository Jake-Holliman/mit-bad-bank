
function create() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (name != null && email != null && password != null && name != '' && email != '' && password != '') {
        const Http = new XMLHttpRequest();
        var url = '/account/create/' + name + '/' + email + '/' + password;
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange = (e) => {
            if (Http.responseText != null && Http.responseText != '') {
                if (Http.status == 200) {
                    document.getElementById('output').value = "Account was created successful.";
                }
                else {
                    document.getElementById('output').value = "Account with same email already exists.";
                }
            }
            else {
                document.getElementById('output').value = "Create account request failed"
            }
        }
    }
    else {
        document.getElementById('output').value = "Name, email and password are required";
    }

}

function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email != null && password != null && email != '' && password != '') {
        const Http = new XMLHttpRequest();
        var url = '/account/login/' + email + '/' + password;
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange = (e) => {
            if (Http.responseText != null && Http.responseText != '') {
                if (Http.status == 200) {
                    document.getElementById('output').value = "Login was successful. Your account:\n " + Http.responseText;
                }
                else {
                    document.getElementById('output').value = "The email you entered was not found";
                }
            }
            else {
                document.getElementById('output').value = "Login request failed or password was not correct"
            }
        }
    }
    else {
        document.getElementById('output').value = "Email and password are required";
    }
}

function deposit() {
    var email = document.getElementById('email').value;
    var amount = document.getElementById('amount').value;
    if (email != null && amount != null && email != '' && amount != '' && amount > 0) {
        const Http = new XMLHttpRequest();
        var url = '/account/deposit/' + email + '/' + amount;
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange = (e) => {
            if (Http.responseText != null && Http.responseText != '') {
                if (Http.status == 200) {
                    document.getElementById('output').value = "Deposit was successful";
                }
                else {
                    document.getElementById('output').value = "The email you entered was not found";
                }
            }
            else {
                document.getElementById('output').value = "Deposit request failed "
            }
        }
    }
    else {
        document.getElementById('output').value = "Email and amount are required and amount needs to be bigger than 0";
    }
}

function withdraw() {
    var email = document.getElementById('email').value;
    var amount = document.getElementById('amount').value;
    if (email != null && amount != null && email != '' && amount != '' && amount > 0) {
        const Http = new XMLHttpRequest();
        var url = '/account/withdraw/' + email + '/' + amount;
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange = (e) => {
            if (Http.responseText != null && Http.responseText != '') {
                if (Http.status == 200) {
                    document.getElementById('output').value = "Withdraw was successful";
                }
                else {
                    document.getElementById('output').value = "The email you entered was not found";
                }
            }
            else {
                document.getElementById('output').value = "Withdraw request failed "
            }
        }
    }
    else {
        document.getElementById('output').value = "Email and amount are required and amount needs to be bigger than 0";
    }
}

function transactions() {
    var email = document.getElementById('email').value;
    if (email != null && email != '') { //check if email is not empty
        const Http = new XMLHttpRequest();
        var url = '/account/transactions/' + email;
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange = (e) => {
            if (Http.responseText != null && Http.responseText != '') {
                if (Http.status == 200) {
                    document.getElementById('output').value = Http.responseText;
                }
                else {
                    document.getElementById('output').value = "The email you entered was not found";
                }
            }
            else { //empty server response
                document.getElementById('output').value = "Transaction request failed "
            }
        }
    }
    else {
        document.getElementById('output').value = "Email is required";
    }
}


function balance() {
    var email = document.getElementById('email').value;
    if (email != null && email != '') {
        const Http = new XMLHttpRequest();
        var url = '/account/balance/' + email;
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange = (e) => {
            if (Http.responseText != null && Http.responseText != '') {
                if (Http.status == 200) {
                    document.getElementById('output').value = Http.responseText;
                }
                else {
                    document.getElementById('output').value = "The email you entered was not found";
                }
            }
            else {
                document.getElementById('output').value = "Balance request failed "
            }
        }
    }
    else {
        document.getElementById('output').value = "Email is required";
    }
}

function allData() {
    const Http = new XMLHttpRequest();
    var url = '/account/all';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        if (Http.responseText != null && Http.responseText != '') {
            if (Http.status == 200) {
                document.getElementById('output').value = Http.responseText;
            }
            else {
                document.getElementById('output').value = "No data was found";
            }
        }
        else { //empty server response
            document.getElementById('output').value = "All accounts request failed "
        }
    }
}
