/*
Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 
GOOD LUCK  
*/
class BMI {
    constructor(height = 0, weight = 0) {
        this.height = height;
        this.weight = weight;
        this.bmi;
    }
    // calculate BMI method
    calcBMI() {
        let bmi = this.weight / this.height ** 2;
        this.bmi = Math.round(bmi * 100) / 100;
        return this.bmi;
    }
}

const mark = new BMI(1.69, 78);
markBMI = mark.calcBMI();

const jhon = new BMI(1.95, 92);
jhonBMI = jhon.calcBMI();

if (markBMI > jhonBMI) {
    console.log(`Mark's BMI is higher than Jhon's!!`)
    console.log(`Mark's BMI(${markBMI}) is higher than Jhon's(${jhonBMI})!!`)
} else if (jhonBMI > markBMI) {
    console.log(`Jhon's BMI is higher than Mark's!!`)
    console.log(`Jhon's(${jhonBMI}) BMI is higher than Mark's(${markBMI})!!`)
} else {
    console.log(`Mark's and jhon's BMI are equal!!`)
    console.log(`Mark's(${markBMI}) BMI and jhon's(${jhonBMI}) BMI are equal!!`)
}

