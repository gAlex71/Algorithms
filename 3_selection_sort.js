const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 35, 32] //[0, 1, 1, 2 ...]
let count = 0

// Сортировка выбором(231 итерация)
function selectionSort(array){
    for(let i = 0; i < array.length; i++){
        let indexMin = i
        for(let j = i + 1; j < array.length; j++){
            if(array[indexMin] > array[j]){
                indexMin = j
            }
            count += 1
        }
        let tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp
    }
    return array
}

console.log(selectionSort(arr));
console.log('Count = ', count);