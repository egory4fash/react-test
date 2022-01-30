// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<any>): number {
    let sum = nums.reduce((partialSum, a) => partialSum + a, 0)
    return sum
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b < c || a + c < b || b + c < a) {
        return '00'
    } else if (a === b && a === c) {
        return '10'
    } else if (a === b || a === c || b === c) {
        return '01'
    } else {
        return '11'
    }
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    let sum = 0
    let string = number.toString()
    for (let i = 0; i < string.length; i++) {
        sum += +(string[i])
    }
    return sum
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let evenSum = 0
    let oddSum = 0
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            evenSum += arr[i]
        } else {
            oddSum += arr[i]
        }
    }
    return evenSum > oddSum
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    let squareArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0 && array[i] % 1 === 0) {
            squareArray.push(array[i] ** 2)
        }
    }
    return squareArray
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    return ((1 + N) / 2) * N
}


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


// export function getBanknoteList(amountOfMoney: number): Array<number> {
//     const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
//     let result = []
//
//     for (let i = 0; i < banknotes.length; i++) {
//         if (banknotes[i] > amountOfMoney) {
//             continue
//         } else {
//             for (let j = 0; j < Math.ceil(amountOfMoney / banknotes[i]); j++) {
//                 result.push(banknotes[i])
//                 amountOfMoney = amountOfMoney - banknotes[i]
//                 if (amountOfMoney === 0) {
//                     return result
//                 }
//             }
//         }
//     }
//     return result
// }

///////////

export function testing(n: number): number {
    return n * 2
}

export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let result = []

    for (let i = 0; i < banknotes.length; i++) {
        while (amountOfMoney >= banknotes[i]) {
            result.push(banknotes[i])
            amountOfMoney -= banknotes[i]
        }
    }

return result
}