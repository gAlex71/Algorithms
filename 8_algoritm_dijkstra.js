//Алгоритм дейкстры для поиска кратчайшего пути(учитывая длину пути)

const graph = {}
graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}

function shortPath(graph, start, end){
    //Кратчайшие пути
    const costs = {}
    //Те узлы, которые мы уже проверили
    const processed = []
    //Соседние узлы рассматриваемого узла
    let neighbors = {}

    //Объект в который добавляем ближайших соседей
    //В виде ключей получаем все вершины, и итерируемся по ним
    Object.keys(graph).forEach(node => {
        //Если текущий элемент вершины не равен стартовому, то заполняем значение
        if(node !== start){
            let value = graph[start][node]
            costs[node] = value || 1000000000 //(graph, 'a', 'g') - {b:2, c:1, d:1000000, e:1000000, f:1000000, g:1000000}
        }
    })

    //Далее находим вершину, в которую можем перейти, и в которую путь самый короткий
    let node = findNodeLowestCost(costs, processed)

    // Узел с минимальной стоимостью
    //Будем крутить цикл, пока эта node не пустая
    while(node){
        const cost = costs[node]
        //Добавляем узлы, в которые можем итерироваться в объект, чтобы пройтись по нему
        neighbors = graph[node]
        Object.keys(neighbors).forEach(neighbor => {
            //Высчитываем новую стоимость
            let newCost = cost + neighbors[neighbor]
            //Если это меньшая стоимость, которая лежит в таблице для этого узла, то перезаписываем ее
            if(newCost < costs[neighbor]){
                costs[neighbor] = newCost
            }
        })
        //Добавляем в массив обработанных вершин
        processed.push(node)
        //Ищем новую вершину
        node = findNodeLowestCost(costs, processed)
    }
    //Возвращаем объект, который хранит самые кратчайшие пути
    return costs
}

//Ищем новый узел
function findNodeLowestCost(costs, processed){
    //Минимальное значение
    let lowestCost = 1000000000
    let lowestNode
    //Пробегаемся по компоненту, который хранит 'стоимость' ключей
    Object.keys(costs).forEach(node => {
        //Стоимость вершины
        let cost = costs[node]
        //Если стоимость меньше минимальной, и она не находится в массиве проверенных узлов
        if(cost < lowestCost && !processed.includes(node)){
            //Мы нашли путь короче
            lowestCost = cost
            lowestNode = node
        }
    })
    //Возвращаем вершину с минимальной стоимостью
    return lowestNode
}

console.log(shortPath(graph, 'a', 'g'));