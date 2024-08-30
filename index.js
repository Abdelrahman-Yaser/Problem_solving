// // day 1
// // ### 1. **Find the Smallest Number**
// // **Challenge:** Write a function to find the smallest number in an array.
// // - **Input:** `[3, 1, 4, 1, 5, 9]`
// // - **Output:** `1`
// const arr: number[] = [3, 1, 4, 1, 5, 9];
// function findNum(arr: number[]): number | undefined {
//     let result = arr.find(num => num == 1);
//     return result;
// }
// console.log(findNum(arr)); // تمرير المصفوفة 'numbers' كمعامل
// // ### 2. **Check for Even Number**
// // **Challenge:** Write a function that checks if a number is even.
// // - **Input:** `4`
// // - **Output:** `true`
// // - **Input:** `7`
// // - **Output:** `false`
// function even(e :number) {
//     if (e % 2=== 0) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(even(2))
// function evenSw(e: number):boolean {
//     switch (e % 2=== 0) {
//         case true:
//             return true;
//         case false:
//             return false
//             break;
//     }
// }
// console.log(evenSw(2))
// // ### 3 **Sum of Positive Numbers**
// // **Challenge:** Write a function to sum all positive numbers in an array.
// // - **Input:** `[1, -2, 3, -4, 5]`
// // - **Output:** `9`
// let Numbers:number[]= [1, -2, 3, -4, 5];
// let result = arr.filter(num => num > 0);
// let sum = result.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum)
// // ### 4. **Find the First Non-Repeating Character**
// // **Challenge:** Write a function to find the first non-repeating character in a string.
// // - **Input:** `"swiss"`
// // - **Output:** `'w'`
// // - **Input:** `"hello"`
// // - **Output:** `'h'`
// function char(wor:string,index :number){
// let resault=wor.charAt(index)
//     console.log(resault)
// }
// char("swiss",1)
// char("hello", 0)
// // ### 5. **Generate Multiplication Table**
// // **Challenge:** Write a function to generate a multiplication table for a given number up to 10.
// // - **Input:** `3`
// // - ** Output:** `[3, 6, 9, 12, 15, 18, 21, 24, 27, 30]`
// function Multiplication  (arr:number){
// let result = [3]
// for (let i=3;i<=arr;i+=3){
//  result.push(i)
// }
// return result
// }
// console.log(Multiplication(30))
// // ### 7. **Calculate Factorial**
// // **Challenge:** Write a function to calculate the factorial of a number.
// // - **Input:** `5`
// // - **Output:** `120`
// // - **Input:** `3`
// // - **Output:** `6`
// function Factorial(n: number) {
//     let num = 1
// let factorial=1
// while (num <=  n){
// factorial *=num
// num ++
// }
// console.log (num)
// }

