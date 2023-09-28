/**
Coding Challenge #3 
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy! 
Your tasks: 
1. Calculate the average score for each team, using the test data below 
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score) 
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks 😉 
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy 
Test data: 
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 
 
GOOD LUCK 😀 
*/

class Team {
    name = ""
    match1 = 0;
    match2 = 0;
    match3 = 0;
    promedio = 0;

    constructor(name, match1, match2, match3) {
        this.name = name
        this.match1 = match1;
        this.match2 = match2;
        this.match3 = match3;
    }

    getPromedio() {
        this.promedio = (this.match1 + this.match2 + this.match3) / 3;
        return this.promedio;
    }

}
class Tournament {

    team1 = new Team();
    team2 = new Team();

    constructor(team1, team2) {
        this.team1 = team1;
        this.team2 = team2;
    }
    getTotalWinner() {
        if (this.team1.getPromedio() >= this.team2.getPromedio()) {

            return this.team1.name

        } else if (this.team1.getPromedio() == this.team2.getPromedio()) {

            return 'Draw'

        } else {

            return this.team2.name
        }
    }

    getWinnerMatch(gameNumber) {
        let team1 = 0;
        let team2 = 0;
        if (gameNumber === 1) {
            team1 = this.team1.match1;
            team2 = this.team2.match1;
        } else if (gameNumber === 2) {
            team1 = this.team1.match2;
            team2 = this.team2.match2;
        } else if (gameNumber === 3) {
            team1 = this.team1.match3;
            team2 = this.team2.match3;
        }

        if (team1 >= team2 && team1 >= 100) {
            return this.team1.name
        } else if (team1 === team2 && team1 >= 100) {
            return 'Draw'
        } else if (team2 >= team1 && team2 >= 100) {
            return this.team2.name
        } else {
            return 'There is no winner'
        }
    }

    getWinnerMatch1() {
        if (this.team1.match1 >= this.team2.match1 && this.team1.match1 >= 100) {
            return this.team1.name
        } else if (this.team1.match1 === this.team2.match1 && this.team1.match1 >= 100) {
            return 'Draw'
        } else if (this.team2.match1 >= this.team1.match1 && this.team2.match1 >= 100) {
            return this.team2.name
        } else {
            return 'There is no winner'
        }
    }

    getWinnerMatch2() {
        if (this.team1.match2 >= this.team2.match1 && this.team1.match2 >= 100) {
            return this.team1.name
        } else if (this.team1.match2 === this.team2.match1 && this.team1.match2 >= 100) {
            return 'Draw'
        } else if (this.team2.match2 >= this.team1.match1 && this.team2.match2 >= 100) {
            return this.team2.name
        } else {
            return 'There is no winner'
        }
    }
    getWinnerMatch3() {
        if (this.team1.match3 >= this.team2.match1 && this.team1.match3 >= 100) {
            return this.team1.name
        } else if (this.team1.match3 === this.team2.match1 && this.team1.match3 >= 100) {
            return 'Draw'
        } else if (this.team2.match3 >= this.team1.match1 && this.team2.match3 >= 100) {
            return this.team2.name
        } else {
            return 'There is no winner'
        }
    }


}


const Dolphins = new Team('Dolphins', 96, 108, 89);
const Koalas = new Team('Koalas', 88, 91, 110)

const tournament = new Tournament(Dolphins, Koalas);
console.log(tournament.getTotalWinner())
console.log(tournament.getWinnerMatch1())
console.log(tournament.getWinnerMatch2())
console.log(tournament.getWinnerMatch3())

console.log(tournament.getWinnerMatch(1))
console.log(tournament.getWinnerMatch(2))
console.log(tournament.getWinnerMatch(3))



// if (Dolphins.getPromedio() >= Koalas.getPromedio()) {
//     console.log('Dolphins are the winners')
// } else if (Dolphins.getPromedio() == Koalas.getPromedio()) {
//     console.log('Draw')
// } else {
//     console.log('Koalas are the winners')
// }





// const Dolphins = [96, 108, 89];
// const Koalas = [88, 91, 110];
// let totalDolphins = 0
// Dolphins.forEach((element) => {
//     totalDolphins += element;
// });
// const promedioDolphins = totalDolphins / 3;

// let totalKoalas = 0
// Koalas.forEach((element) => {
//     totalKoalas += element;
// });
// const promedioKoalas = totalKoalas / 3;

// if (promedioDolphins >= promedioKoalas) {
//     console.log('Dolphins are the winners')
// } else if (promedioDolphins === promedioKoalas) {
//     console.log('Draw')
// } else {
//     console.log('Koalas are the winners')
// }