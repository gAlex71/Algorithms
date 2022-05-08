const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 35, 32] //[0, 1, 1, 2 ...]
let count = 0

//Пузыркевая сортировка, одна из самых неэффективных(484 итерации)
function bubbleSort(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            //Если текущий элемент больше следующего, то их необходимо поменять местами
            if(array[j] > array[j + 1]){
                let tmp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tmp
            }
            count += 1
        }
    }
    return array
}

console.log(bubbleSort(arr));
console.log('Count = ', count);//O(n*n)