// Coding Challenge #1 4/21/2023

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).


Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.


TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
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
console.log(mark.calcBMI());

const jhon = new BMI(1.95, 92);
console.log(jhon.calcBMI());
