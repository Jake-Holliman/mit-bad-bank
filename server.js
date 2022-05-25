// setup server and datastore client
'use strict';
const express = require('express');
const app = express();
app.enable('trust proxy'); //Security
app.use(express.static('public')); //Allow static files
const Datastore = require('@google-cloud/datastore');
const datastore = Datastore();

//Start Server
const PORT = process.env.PORT || 8080;
app.listen(process.env.PORT || 8080, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
module.exports = app;

function insertOrUpdateAccount(object) {
  datastore.upsert(object).then(() => {
    console.log("Upsert Success");
    return true;
  });
}

function getAllData() {
  const query = datastore
    .createQuery('account')
  return datastore.runQuery(query);
}

function searchAccountByParamValue(param, value) {
  const query = datastore
    .createQuery('account')
    .filter(param, '=', value);
  return datastore.runQuery(query);
}

//***************************** Routes *************************************/

app.get('/', async (req, res, next) => {
  try {
    res
      .status(200)
      .set('Content-Type', 'text/plain')
      .send("Navigate to index.html")
      .end();
  } catch (error) {
    next(error);
  }
});

app.get('/account/create/:name/:email/:password', async (req, res, next) => {
  try {
    //Data Check - Not empty and not existent
    var dataCheck = true;
    var results = await searchAccountByParamValue('email', req.params.email);
    var entities = results[0];
    var msg = "";
    var status = "";

    if (typeof entities != "undefined" && entities != null && entities.length != null && entities.length > 0) {
      msg = "failure";
      dataCheck = false;
      status = 404;
    }

    if (dataCheck) {
      const account_data = {
        name: req.params.name,
        email: req.params.email,
        balance: 0,
        password: req.params.password,
        transactions: []
      };

      const account = {
        key: datastore.key('account'),
        data: account_data,
      };

      insertOrUpdateAccount(account)
      msg = "success"
      status = 200;
    }
    res
      .status(status)
      .set('Content-Type', 'text/plain')
      .send(msg)
      .end();
  }
  catch (error) {
    next(error);
  }
});

app.get('/account/login/:email/:password', async (req, res, next) => {
  try {
    //Data Check - Existent
    var dataCheck = true;
    var results = await searchAccountByParamValue('email', req.params.email);
    var entities = results[0];
    var msg = "";
    var status = "";

    if (typeof entities != "undefined" && entities != null && entities.length != null && entities.length > 0) {
      if (req.params.password == entities[0].password) {
        msg = entities[0];
        status = 200;
      }
      else {
        msg = null;
        status = 404;
        console.log("Passwort not match");
      }
    }
    else {
      msg = "failed";
      status = 404;
    }

    res
      .status(status)
      .set('Content-Type', 'text/plain')
      .send(msg)
      .end();
  }
  catch (error) {
    next(error);
  }
});

app.get('/account/get/:email', async (req, res, next) => {
  try {
    var results = await searchAccountByParamValue('email', req.params.email);
    var entities = results[0];
    var msg = "";
    var status = "";

    if (typeof entities != "undefined" && entities != null && entities.length != null && entities.length > 0) {
      msg = entities[0];
      status = 200;
    }
    else {
      msg = "failure";
      status = 404;
    }

    res
      .status(status)
      .set('Content-Type', 'text/plain')
      .send(msg)
      .end();
  }
  catch (error) {
    next(error);
  }
});

app.get('/account/deposit/:email/:amount', async (req, res, next) => {
  try {
    var results = await searchAccountByParamValue('email', req.params.email);
    var entities = results[0];
    var msg = "";
    var status = "";

    if (typeof entities != "undefined" && entities != null && entities.length != null && entities.length > 0) {
      entities[0].balance = Number(entities[0].balance) + Number(req.params.amount); //Add to balance
      entities[0].transactions.push({ type: "deposit", amount: req.params.amount }); //Add transaction to account
      insertOrUpdateAccount(entities[0]);
      msg = "success";
      status = 200;
    }

    else {
      msg = "failure";
      status = 404;
    }

    res
      .status(status)
      .set('Content-Type', 'text/plain')
      .send(msg)
      .end();
  }
  catch (error) {
    next(error);
  }
});

app.get('/account/withdraw/:email/:amount', async (req, res, next) => {
  try {
    var results = await searchAccountByParamValue('email', req.params.email);
    var entities = results[0];
    var msg = "";
    var status = "";

    if (typeof entities != "undefined" && entities != null && entities.length != null && entities.length > 0) {
      entities[0].balance = Number(entities[0].balance) - Number(req.params.amount); //Withdraw from balance
      entities[0].transactions.push({ type: "withdraw", amount: req.params.amount }); //Add transaction to account
      insertOrUpdateAccount(entities[0]);
      msg = "success";
      status = 200;
    }

    else {
      msg = "failure";
      status = 404;
    }

    res
      .status(status)
      .set('Content-Type', 'text/plain')
      .send(msg)
      .end();
  }
  catch (error) {
    next(error);
  }
});

app.get('/account/transactions/:email', async (req, res, next) => {
  try {
    const results = await searchAccountByParamValue('email', req.params.email);
    const entities = results[0];
    var msg = "";
    var status = "";

    if (typeof entities != "undefined" && entities != null && entities.length != null && entities.length > 0) {
      msg = entities[0].transactions; //return transactions array
      status = 200;
    }
    else {
      msg = "failure";
      status = 404;
    }

    res
      .status(status)
      .set('Content-Type', 'text/plain')
      .send(msg)
      .end();
  }
  catch (error) {
    next(error);
  }
});

app.get('/account/all', async (req, res, next) => {

  try {
    var results = await getAllData();
    var entities = results[0];
    var msg = "";
    var status = "";

    if (typeof entities != "undefined" && entities != null && entities.length != null && entities.length > 0) {
      msg = entities;
      status = 200;
    }
    else {
      msg = "failure";
      status = 404;
    }

    res
      .status(status)
      .set('Content-Type', 'text/plain')
      .send(msg)
      .end();
  }
  catch (error) {
    next(error);
  }
});

app.get('/account/balance/:email', async (req, res, next) => {
  try {
    const results = await searchAccountByParamValue('email', req.params.email);
    const entities = results[0];
    var msg = "";
    var status = "";

    if (typeof entities != "undefined" && entities != null && entities.length != null && entities.length > 0) {
      const balance = entities[0].balance;
      msg = balance.toString();
      status = 200;
    }
    else {
      msg = "failure";
      status = 404;
    }

    res
      .status(status)
      .set('Content-Type', 'text/plain')
      .send(msg)
      .end();
  }
  catch (error) {
    next(error);
  }
});
