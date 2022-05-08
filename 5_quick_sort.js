const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 35, 32] //[0, 1, 1, 2 ...]
let count = 0

//сортировка Хоара, или быстрая сортировка(97 итераций)

//Из массива выбирается опорное число(Чаще всего центральное), оно делит его пополам
//Слева - меньшие числа, справа - большие
//И так происходит, пока массив не станет равным 1
//В конце эти маленькие массивы собираются в один
function quickSort(array){
    if(array.length <= 1){
        return array
    }
    //Опорный элемент(индекс)
    let baseIndex = Math.floor(array.length / 2)
    // Сам элемент
    let base = array[baseIndex]
    //Массив с меньшими числами
    let less = []
    //Массив с большими числами
    let greater = []
    //Пробегаемся по массиву, и сравниваем каждый элемент с опорным
    for(let i = 0; i < array.length; i++){
        count += 1
        if(i === baseIndex)
            continue
        if(array[i] < base){
            less.push(array[i])
        }else{
            greater.push(array[i])
        }
    }
    //Склеиваем все в один большой массив
    return [...quickSort(less), base, ...quickSort(greater)]
}

console.log(quickSort(arr));
console.log('Count = ', count);