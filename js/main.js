const app = new Vue({
    el: '#app',
    data :{
    title: 'Todo App',
    newTodo: '',
    todoData: [],
    
    },
    methods: {
        addTodo(){
            if (this.newTodo.trim() != ""){
            this.todoData.push({
                title: this.newTodo,
                done: false,
            },            
            );                        
            this.newTodo = ""
        }},

        removeTodo(index){
            this.todoData.splice(index, 1);
        },
        toggleComplete(item) {
            item.done = !item.done;},
    }
    },);

