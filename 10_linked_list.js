class LinkedList{
    constructor(){
        this.size = 0
        this.root = null
    }
    //Функция, с помощью которой в этот список будем добавлять какие-то значения
    add(value){
        if(this.size === 0){
            this.root = new Node(value)
            this.size += 1
            return true
        }
        let node = this.root
        //Будем крутиться, пока есть следующий элемент
        while(node.next){
            node = node.next
        }
        //Создаем новую Ноду, передаем в нее значение
        let newNode = new Node(value)
        //И узлу, до которого мы доитерировались передаем ссылку на следующий элемент
        node.next = newNode
        this.size += 1
    }

    getSize(){
        return this.size
    }

    print(){
        let result = []
        let node = this.root
        while(node){
            result.push(node.value)
            //Присваиваем ноде следующий элемент в списке
            node = node.next
        }
        console.log(result); 
    }
}

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

//Вызываем список
const list = new LinkedList()
list.add(5)
list.add(3)
list.add(7)
list.add(4)
list.add(8)
list.add(1)

list.print()