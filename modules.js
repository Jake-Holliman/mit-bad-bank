var ui = {};


 ui.navigation = `
 <nav aria-label="breadcrumb">
  <ol class="breadcrumb arr-right bg-body">
    <li class="breadcrumb-item"><a href="#" onclick="defaultModule()">BadBank</a></li>
    <li class="breadcrumb-item"><a href="#" onclick="loadCreateAccount()">Create Account</a></li>
    <li class="breadcrumb-item"><a href="#" onclick="loadLogin()">Login</a></li>
    <li class="breadcrumb-item"><a href="#" onclick="loadDeposit()">Deposit</a></li>
    <li class="breadcrumb-item"><a href="#" onclick="loadWithdraw()">Withdraw</a></li>
    <li class="breadcrumb-item"><a href="#" onclick="loadTransactions()">Transaction</a></li>
    <li class="breadcrumb-item"><a href="#" onclick="loadBalance()">Balance</a></li>
    <li class="breadcrumb-item"><a href="#" onclick="loadAllData()">AllData</a></li>
  </ol>
</nav>
`;


ui.createAccount = `
<div class="card text-white bg-primary mb-5 " style="max-width: 18rem;">
 <div class="card-header">Create a Big Account</div>
    <div class="card-body">
     <form>
        <div class="form-group">
         <label for="name">Name</label>
         <input type="text" class="form-control" id="name" placeholder="Enter name">
        </div>
        <div class="form-group">
         <label for="email">Email address</label>
         <input type="email" class="form-control" id="email" placeholder="email@BigBank.com">
        </div>
        <div class="form-group">
         <label for="password">Password</label>
         <input type="password" class="form-control" id="password" placeholder="Enter Password">
        </div>
        <div class="form-group" "col-sm-10">
         <button type="button" class="btn btn-light btn-sm" onclick="Create()">Create Account</button>
        </div>
        <div id ='createstatus'></div>
      </form>
    </div>
</div>
`;

ui.login = `
<div class="card text-white bg-secondary mb-3 " style="max-width: 18rem;">
 <div class="card-header">Login</div>
    <div class="card-body">
        <form>
            <div class="form-group">
                <label for="email1">Email address</label>
                <input type="email" class="form-control" id="loginEmail" placeholder="email@example.com">
            </div>
            <div class="form-group">
                <label for="password1">Password</label>
                 <input type="password" class="form-control" id="loginPassword" placeholder="Enter Password">
            </div>
            <div class="form-group" "col-sm-10">
                <button type="button" class="btn btn-light btn-sm" onclick="Login()">Login</button>
            </div>
            <div id ='loginstatus'></div>
        </form>
    </div>
</div>
`;

ui.deposit = `
<div class="card text-white bg-warning mb-3 " style="max-width: 18rem;">
 <div class="card-header">Deposit</div>
    <div class="card-body">
        <form>
            <div class="form-group">
                <label for="email1">Email address</label>
                <input type="email" class="form-control" id="depositEmail" placeholder="email@example.com">
            </div>
            <div class="form-group">
                <label for="amount1">Amount</label>
                <input type="Amount" class="form-control" id="depositAmount" placeholder="Enter amount">
            </div>
            <div class="form-group" "col-sm-10">
                <button type="button" class="btn btn-light btn-sm" onclick="Deposit()">Deposit</button>
            </div>
            <div id ='depositstatus'></div>   
        </form>
    </div>
</div>
`;

ui.withdraw = `
<div class="card text-white bg-success mb-3 " style="max-width: 18rem;">
 <div class="card-header">Withdraw</div>
    <div class="card-body">
      <form>
            <div class="form-group">
                <label for="email1">Email address</label>
                <input type="email" class="form-control" id="withdrawEmail" placeholder="email@example.com">
            </div>
            <div class="form-group">
                <label for=" amount1">Amount</label>
                <input type="Amount" class="form-control" id="withdrawAmount" placeholder="Enter amount">
            </div>
            <div class="form-group" "col-sm-10">
                <button type="button" class="btn btn-light btn-sm" onclick="Withdraw()">Submit</button>
            </div> 
            <div id ='withdrawstatus'></div> 
        </form>
    </div>
</div>
`;

ui.transactions = `
<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
  <div class="card-header">Transactions</div>
    <div class="card-body">
        <form>
            <div class="form-group">
                <label for="email1">Email address</label>
                <input type="email" class="form-control" id="transactionEmail" placeholder="email@example.com">
            </div>
            <div class="form-group" "col-sm-10">
                <button type="button" class="btn btn-light btn-sm" onclick="Transactions()">Show Transactions</button>
            </div>
            <div id ='transactionstatus'></div>      
        </form>
    </div>
</div>
`;

ui.balance = `
<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
  <div class="card-header">Transactions</div>
    <div class="card-body">
        <form>
            <div class="form-group">
                <label for="email1">Email address</label>
                <input type="email" class="form-control" id="balanceEmail" placeholder="email@example.com">
            </div>
            <div class="form-group" "col-sm-10">
                <button type="button" class="btn btn-light btn-sm" onclick="Balance()">Show Balance</button>
            </div>
            <div id ='balancestatus'></div>
        </form>
    </div>
</div>
`;

ui.default = `
<div class="card bg-light mb-2" style="max-width:18rem;">
  <div class="card-header">BadBank Landing Module</div>
    <div class="card-body">
        <h5 class="card-title">Welcome to the bank</h5>
        <p class="card-text">You can move around using navigation bar.</p>
        <img class ="card-img-top" src="bank.png" alt="Card image">
    </div>
</div>
`;


ui.allData = `
<p class= "font-weight-bold ">All Data in Store</p>
<form>
    <div class="form-group" "ml-5">
        <button type="button" class="btn btn-secondary btn-sm" onclick="AllData()">Show All Data</button>
    </div>
    <div id ='AllDatastatus'></div>
<form>
`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');

navigation.innerHTML += ui.navigation;

var loadCreateAccount = function (){
    target.innerHTML = ui.createAccount;
};

var loadLogin = function (){
    target.innerHTML = ui.login;
};

var loadDeposit = function (){
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function (){
    target.innerHTML = ui.withdraw;
};

var loadTransactions = function (){
    target.innerHTML = ui.transactions;
};

var loadBalance = function (){
    target.innerHTML = ui.balance;
};

var defaultModule = function (){
    target.innerHTML = ui.default;
};

var loadAllData = function (){
    target.innerHTML = ui.allData;
};


defaultModule();
