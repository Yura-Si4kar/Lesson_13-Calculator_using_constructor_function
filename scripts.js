'use strict';

const calc = new Calculator(10);

function Calculator(base) {
    this.result = base;
}

Calculator.prototype.add = function (b) {
    return (this.result += b);
};
Calculator.prototype.sub = function (b) {
    return (this.result -= b);
};
Calculator.prototype.mult = function (b) {
    return (this.result *= b);
};
Calculator.prototype.div = function (b) {
    return (this.result /= b);
};
Calculator.prototype.set = function (b) {
    return (this.result = b);
};