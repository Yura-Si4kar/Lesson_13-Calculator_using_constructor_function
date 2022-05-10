'use strict';

const calc = new Calculator(10);

function Calculator(base) {
	
  this.sum = (b) => (base += b),
  
  this.mult = (b) => (base *= b),

  this.sub = (b) => (base -= b),

  this.div = (b) => (base /= b),
  
  this.set = (b) => (base = b),
  
  this.result = () => (base)    
}

console.log (calc.sum(5));
console.log (calc.mult(10));
console.log (calc.sub(40));
console.log(calc.div(10));
calc.set(11);

console.log(calc.result());