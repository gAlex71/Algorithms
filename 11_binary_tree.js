//Бинарное дерево поиска, у каждого узла только по два потомка
//В левой части дерева потомок с меньшим значением, в правой - с большим
class BinaryTree{
    constructor(){
        this.root = null
    }
    add(value){
        if(!this.root){
            this.root = new TreeNode(value)
        }else{
            let node = this.root
            let newNode = new TreeNode(value)
            //Засчет этой структуры дерево получается отсортированным
            while(node){
                if(value > node.value){
                    if(!node.rigth){
                        break
                    }
                    node = node.rigth
                }else{
                    if(!node.left){
                        break
                    }
                    node = node.left
                }
            }

            if(value > node.value){
                node.rigth = newNode
            }else{
                node.left = newNode
            }
        }
    }
    //Выводим вначале корневой элемент
    //С левого поддерева
    //С правого поддерева
    print(root = this.root){
        if(!root){
            return true
        }
        console.log(root.value);
        this.print(root.left)
        this.print(root.rigth)
    }
}

class TreeNode{
    constructor(value){
        this.value = value
        this.left = null
        this.rigth = null
    }
}


const tree = new BinaryTree()
tree.add(5)
tree.add(2)
tree.add(6)
tree.add(2)
tree.add(1)
tree.add(7)
tree.print()