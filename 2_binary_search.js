const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let count = 0

//Сложность алгоритма O(log*2(n))
//Элементов 16, поэтому максимальное количество итераций - 4
function binarySearch(array, item){
    let start = 0
    let end = array.length
    let middle
    //Некий флаг, нашли мы элемент в массиве, или нет
    let found = false
    //Позиция самого элемента, который мы будем возвращать из функции
    let position = -1
    //Цикл будем крутить до тех пор, пока не найдем элемент, либо стартовая точка и конечная - не поравнялись
    while(found === false && start <= end){
        count += 1
        //Округляем результат до нижней границы
        middle = Math.floor((start + end)/2)
        if(array[middle] === item){
            found = true
            position = middle
            return position
        }
        //Если искомый элемент не равен центральному, то отбрасываем нужную часть массива и ищем снова
        if(item < array[middle]){
            end = middle -1
        }else{
            start = middle + 1
        }
    }
    return position
}

console.log(binarySearch(array, 14));
console.log(count);