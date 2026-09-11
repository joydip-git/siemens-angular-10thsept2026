type myType = number | boolean | undefined
type Person = {
    id: number,
    name: string,
    salary: number,
    location?: string
}

const value: myType = 12
const joydip: Person = {
    id: 1,
    name: 'joydip',
    salary: 1000,
    location: 'Bangalore'
}

// type logicFnType = (x: number) => boolean

// function filterValues(arr: number[], logic: logicFnType) {
//     const result = []
//     for (const element of arr) {
//         if (logic(element))
//             result.push(element)
//     }

//     return result
// }


// const isEven = function (element: number): boolean {
//     return element % 2 == 0
// }
// const isOdd = function (element: number): boolean {
//     return element % 2 != 0
// }
// const add = function (a: number, b: number) {
//     return a + b
// }
//const filteredNumbers = filterValues(numbers, isEven)
//const filteredNumbers = numbers.filter(isEven)
//const filteredNumbers = numbers.filter(isOdd)
// const filteredNumbers = numbers.filter(function (num) {
//     return num > 4
// })
// for (const element of filteredNumbers) {
//     console.log(element);
// }

// filteredNumbers.forEach(
//     function (ele) {
//         console.log(ele);
//     }
// )

/**
 * (value: number, index: number, array: number[]) => unknown
 * (value: number, index: number, array: number[]) => void
 */

const numbers = [1, 4, 3, 5, 2, 6, 9, 7, 0, 8]
numbers
    .filter((num) => num % 2 == 0)
    .map((num) => (num * 2).toString())
    .forEach((numStr) => console.log(numStr))