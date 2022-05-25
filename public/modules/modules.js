var ui = {};

ui.navigation = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#">
<img src="bank.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
Bad Bank by Rajesh
</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" href="#" onclick="loadCreateAccount()" >Create Account</a>
      <a class="nav-item nav-link" href="#" onclick="loadLogin()" >Login</a>
      <a class="nav-item nav-link" href="#" onclick="loadDeposit()" >Deposit</a>
      <a class="nav-item nav-link" href="#" onclick="loadWithdraw()" >Withdraw</a>
      <a class="nav-item nav-link" href="#" onclick="loadTransactions()" >Transaction</a>
      <a class="nav-item nav-link" href="#" onclick="loadBalance()" >Balance</a>
      <a class="nav-item nav-link" href="#" onclick="loadAllData()" >AllData</a>
    </div>
  </div>
</nav>
`;

ui.createAccount = `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Create Account</div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter Name">
                </div>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter Password">
                </div>
                <button type="button" class="btn btn-light" onclick="create()">Create Account</button>
            </form>
        </div>
    </div>
`;

ui.login = `
<div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
<div class="card-header">Login</div>
<div class="card-body">
    <form>
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter Password">
        </div>
        <button type="button" class="btn btn-light" onclick="login()">Login</button>
    </form>
</div>
</div>
`;

ui.deposit = `
    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
        <div class="card-header">Deposit</div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="amount">Amount</label>
                    <input type="number" min="0" class="form-control" id="amount" placeholder="Amount">
                </div>
                <button type="button" class="btn btn-light" onclick="deposit()">Deposit</button>
            </form>
        </div>
    </div>
`;

ui.withdraw = `
<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
    <div class="card-header">Withdraw</div>
    <div class="card-body">
        <form>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="amount">Amount</label>
                <input type="number" min="0" class="form-control" id="amount" placeholder="Amount">
            </div>
            <button type="button" class="btn btn-light" onclick="withdraw()">Withdraw</button>
        </form>
    </div>
</div>
`;

ui.transactions = `
<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header">Transactions</div>
    <div class="card-body">
        <form>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <button type="button" class="btn btn-light" onclick="transactions()">Show Transactions</button>
        </form>
    </div>
</div> 
`;

ui.balance = `
<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header">Balance</div>
    <div class="card-body">
        <form>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <button type="button" class="btn btn-light" onclick="balance()">Show Balance</button>
        </form>
    </div>
</div> 
`;

ui.default = `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Welcome</div>
        <div class="card-body">
            <p class="card-text">Welcome to the Bad Bank by Rajesh Ramatchandran. This is the result of the MIT Digital Transformation Online Course. I'm happy to spend your money :-). Merry Christmas and a Happy New Year</p>
        </div>
    </div>
`;

ui.allData = `
<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
    <div class="card-header">All Bank Data</div>
    <div class="card-body">
        <form>
            <button type="button" class="btn btn-light" onclick="allData()">Show All Bank Data</button>
        </form>
    </div>
</div> 
`;

ui.content = `
<div class="card border-light mb-3" style="max-width: 80rem;">
    <div class="card-header">Output</div>
    <div class="card-body">
        <form>
            <textarea rows="8" cols="120" id="output">
            </textarea>
        </form>
    </div>
</div> 
`;

var target = document.getElementById('target');
var navigation = document.getElementById('navigation');
var content = document.getElementById('content');
navigation.innerHTML += ui.navigation;
content.innerHTML += ui.content;



var loadCreateAccount = function () {
    target.innerHTML = ui.createAccount;
    document.getElementById('output').value = "";
};

var loadLogin = function () {
    target.innerHTML = ui.login;
    document.getElementById('output').value = "";
};

var loadDeposit = function () {
    target.innerHTML = ui.deposit;
    document.getElementById('output').value = "";
};

var loadWithdraw = function () {
    target.innerHTML = ui.withdraw;
    document.getElementById('output').value = "";
};

var loadTransactions = function () {
    target.innerHTML = ui.transactions;
    document.getElementById('output').value = "";
};

var loadBalance = function () {
    target.innerHTML = ui.balance;
    document.getElementById('output').value = "";
};

var defaultModule = function () {
    target.innerHTML = ui.default;
    document.getElementById('output').value = "";
};

var loadAllData = function () {
    target.innerHTML = ui.allData;
    document.getElementById('output').value = "";
};

defaultModule();
