"use strict";

const HTTP = require('http');
const PORT = 3000;
const URL = require('url').URL;
const APR = 5;

const HTML_START = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Loan Calculator</title>
    <style type="text/css">
      body {
        background: rgba(250, 250, 250);
        font-family: sans-serif;
        color: rgb(50, 50, 50);
      }

      article {
        width: 100%;
        max-width: 40rem;
        margin: 0 auto;
        padding: 1rem 2rem;
      }

      h1 {
        font-size: 2.5rem;
        text-align: center;
      }

      table {
        font-size: 2rem;
      }

      th {
        text-align: right;
      }
    </style>
  </head>
  <body>
    <article>
      <h1>Loan Calculator</h1>
      <table>
        <tbody>
`;

const HTML_END = `
        </tbody>
      </table>
    </article>
  </body>
</html>`;

function getParams(path) {
  const myURL = new URL(path, `http://localhost:${PORT}`);
  return myURL.searchParams;
}

function calculateMonthlyPayment(amount, duration) {
  let apr = (APR / 100) / 12;
  return (amount * (apr / (1 - Math.pow((1 + apr), -duration)))).toFixed(2);
}

function loanInfo(params) {
  let amount = Number(params.get("amount"));
  let years = Number(params.get("duration"));
  let duration = years ? (years * 12) : 0; 
  let monthly = calculateMonthlyPayment(amount, duration);
  duration = params.get("duration");

  let decreaseAmt = `/?amount=${amount - 100}&duration=${duration}`;
  let increaseAmt = `/?amount=${amount + 100}&duration=${duration}`;
  let decreaseDur;
  let increaseDur;
  if (years) {
    decreaseDur = `/?amount=${amount}&duration=${years - 1}`;
    increaseDur = `/?amount=${amount}&duration=${years + 1}`;
  } else {
    decreaseDur = `/?amount=${amount}&duration=${-1}`;
    increaseDur = `/?amount=${amount}&duration=${1}`;

  }

  return `
  ${HTML_START}
    <tr>
      <th>Amount:</th>
        <td>
          <a href=${decreaseAmt}>- $100</a>
        </td>
        <td>$
          ${amount}
        </td>
        <td>
          <a href=${increaseAmt}>+ $100 </a>
        </td>
    </tr>
    <tr>
      <th>Duration:</th>
      <td>
        <a href=${decreaseDur}>- 1 year</a>
      </td>
      <td>
        ${duration} years
      </td>
      <td>
        <a href=${increaseDur}>+ 1 year</a>
      </td>
    </tr>
    <tr>
      <th>APR:</th>
      <td colspan='3'>${APR}%</td>
    </tr>
    <tr>
      <th>Monthly payment:</th>
      <td colspan='3'>${monthly}<td>
    </tr>
    ${HTML_END}`;
}

const SERVER = HTTP.createServer((req, res) => {
  let path = req.url;

  if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
    let content = loanInfo(getParams(path));

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(`${content}\n`);
    res.end();
  }
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});