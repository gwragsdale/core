let stack = [];
let register = 0;

const STACK_FUNCS = {
  n: (n) => register = n, 
  PUSH: () => stack.push(register),
  ADD: () => register += stack.pop(),
  SUB: () => register -= stack.pop(),
  MULT: () => register *= stack.pop(),
  DIV: () => register = Math.round(register / stack.pop()),
  REMAINDER: () => register = register % stack.pop(),
  POP: () => register = stack.pop(),
  PRINT: () => console.log(register),
}

function isNum(string) {
  let result = Number(string);
  return Number.isInteger(result);
}

function getArgs(string) {
  return string
            .split(' ')
            .map(arg => {
              if (isNum(arg)) {
                return Number(arg);
              } else {
                return arg;
              }
            });
}

function minilang(args) {
  let argsArray = getArgs(args);

  argsArray.forEach(comm => {
    if (isNum(comm)) {
      STACK_FUNCS.n(comm);
    } else {
      STACK_FUNCS[comm]();
    }
  });
}

minilang('PRINT');
0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)