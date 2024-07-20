/*
# problem

input: payment object
  {phone: 0, internet: 0, amount: 0, total()}

output: updated invoice object
  - with the appropriate amounts updated in the invoice object

rules: 
  - if payment is just an amount, apply it to the largest portion of the invoice (addPayment() - singular)
  - if it is multiple payments, the input is an array of payment objects
  - apply single "amount" property to the largest portion of invoice
  - apply internet payment to internet portion of invoice
  - apply phone payment to phone portion of invoice
  - if there is a remainder, apply it to the other portion of the invoice

# examples

input: payment1 ==> { phone: 0, internet: 0, amount: 2000, total: [Function (anonymous)] }
output: invoice ==> { phone: 1200, internet: 4000 } ==> { phone: 1200, internet: 2000 }
explanation: because the amount due for the phone portion of the invoice is less than the payment made,
             the amount of the payment is substracted from the internet portion of the invoice

input: payment2 ==> { phone: 1000, internet: 1200 }
output: invoice ==> { phone: 1200, internet: 2000 } ==> { phone: 200, internet: 800 }
explanation: the payment for each portion of the invoice is subtracted from the appropriate property of 
             the invoice object

input: payment3 ==> { phone: 1000, internet: 0, amount: undefined }
output: invoice ==> { phone: 200, internet: 800 } ==> { phone: 0, internet: 0 }
explanation: because the payment amount for phone > the amount due, the remainder 
             is applied to the internet portion of the invoice

# data structures

- payment object, invoice object
- loop while payment amount is > 0

# algorithm

addPayment
  - set payment = payment.paymentTotal()
  - determine highest amount of invoice portion
- while payment > 0
  - while internet > 0 || payment > 0
    - if internet > phone
      - internet -= payment
      - payment -= internet
  - while phone > 0 || payment > 0
      - phone -= payment
      - payment -= phone

addPayments
  - loop over array and call applyPayment method


*/

function createInvoice(services = {}) {
  let phoneCharge = services.phone;
  if (phoneCharge === undefined) {
    phoneCharge = 3000;
  }

  let internetCharge = services.internet;
  if (internetCharge === undefined) {
    internetCharge = 5500;
  }

  return {
    phone: phoneCharge,
    internet: internetCharge,

    total: function() {
      return this.phone + this.internet;
    },

    addPayment: function(paymentObj) {
      let payment = paymentObj.total();
      
      while (payment > 0) {
    
        while (this.internet > 0 && payment > 0) {
          let internetTotal = this.internet;
          this.internet -= payment;
          payment -= internetTotal;
        }

        while (this.phone > 0 && payment > 0) {
          let phoneTotal = this.phone;
          this.phone -= payment;
          payment -= phoneTotal;
        }

        if (this.internet < 0) {
          this.internet = 0;
        } else if (this.phone < 0) {
          this.phone = 0;
        }
      }
    },

    addPayments: function(paymentArray) {
      for (let idx = 0; idx < paymentArray.length; idx += 1) {
        let currentPayment = paymentArray[idx];
        this.addPayment(currentPayment);
      }
    },

    amountDue: function() {
      console.log(`Total amount due: ${this.total()}`);
    },
  };
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

function createPayment(services = {}) {
  let payment = {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
  };

  payment.total = function() {
    return this.amount || (this.phone + this.internet);
  }

  return payment;
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 }); 
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

console.log(invoice);
invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
invoice.amountDue();       // this should return 0

console.log(invoice);