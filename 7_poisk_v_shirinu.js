//Поиск в ширину в графе

// Найти кратчайший путь от точки A в точку G
//Каждое поле равно массиву вершин, к которому у него есть путь
const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

//Решение задачи с помощью Очереди
function breadthSearch(graph, start, end){
    let queue = []
    queue.push(start)
    while(queue.length > 0){
        //Выбираем первый элемент из массива
        const current = queue.shift()
        if(!graph[current]){
            graph[current] = []
        }
        if(graph[current].includes(end)){
            return true
        }else{
            queue = [...queue, ...graph[current]]
        }
    }
    return false
}

console.log(breadthSearch(graph, 'a', 'g'));