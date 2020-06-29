import * as fs from "fs";

// CODING TOGETHER

//Exercício 1


// function sum(number1: number, number2: number, number3: number) {
//   const total: number = number1 + number2 + number3;
//   console.log(`O valor total é ${total}`);
// }
//
// const firstNumber: number = Number(process.argv[2]);
// const secondNumber: number = Number(process.argv[3]);
// const thirdNumber: number = Number(process.argv[4]);
//
// sum(firstNumber, secondNumber, thirdNumber);

//Exercício 2

// const today: number = new Date().getTime();
// const christmas: number = new Date('2020-12-25').getTime();
//
// const timeUntilChristmas: number =  christmas - today;
//
// const christmasInSeconds: number = timeUntilChristmas/1000;
// const christmasInMinutes: number = christmasInSeconds/60;
// const christmasInHours: number = christmasInMinutes/60;
// const christmasInDays: number = christmasInHours/24;
//
// console.log(`Faltam ${christmasInDays.toFixed(0)} dias até o natal`);


//Exercício 3

const fileName: string = 'users.json';

try {
  const data: Buffer = fs.readFileSync(fileName);
  const treatedData: string = data.toString();
  const users: any = JSON.parse(treatedData);
  const usersInfo: string[] = users.map((user: any) => `${user.username} - ${user.email}`);
  console.log(usersInfo);
  console.log('Número total de usuários: ', users.length)
} catch (e) {
  console.log(e)
}