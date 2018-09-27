class SmartCalculator {
  constructor(initialValue) {
    this.value=String(initialValue);
  }
  add(number) {
    this.value = (this.value + '+' +  number);
    return this;
  }
  subtract(number) {
     this.value = (this.value + '-' +  number);
     return this;
  }
  multiply(number) {
     this.value = (this.value + '*' +  number);
     return this;
  }
  devide(number) {
     this.value = (this.value + '/' +  number);
     return this;
  }
  pow(number) {
      this.value = (this.value + '**' +  number);
     return this;
  }
  valueOf(){
    let finalValue = eval(this.value);
    return finalValue;
  }
}

module.exports = SmartCalculator;
