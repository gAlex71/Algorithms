const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11]
let count = 0

//Сложность этого алгоритма O(n) - где n - количество итераций
function linearSearch(array, item){
    for(let i = 0; i < array.length; i++){
        //Количество итераций
        count += 1
        if(array[i] === item){
            return i
        }
    }
    return null
}

console.log(linearSearch(array, 11));
console.log('count =', count);