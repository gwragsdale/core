// Problem 2

function makeObj() {
  return {
    propA: 10,
    propB: 20,
  };
}

// Problem 3

// let invoice = {
//   phone: 3000,
//   internet: 6500,
// };

// let payment = {
//   phone: 1300,
//   internet: 5500,
// };

// let invoiceTotal = invoice.phone + invoice.internet;
// let paymentTotal = payment.phone + payment.internet;
// let remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal);
// console.log(remainingDue);

function createInvoice(services = {}) {
  let obj = {
    phone: 3000,
    internet: 5500,

    total: function() {
      return this.phone + this.internet;
    },
  };

  return Object.assign(obj, services);
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoices = [];

invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices)); // 31000

// Problem 4

function createPayment(services = {}) {
  let obj = {
    internet: 0,
    phone: 0,

    total: function() {
      return this.internet + this.phone;
    }
  }

  return (obj, services);
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000