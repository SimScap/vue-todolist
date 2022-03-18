const app = new Vue({
    el: '#app',
    data :{
    title: 'Todo App',
    newTodo: '',
    todoData: [],

    },
    methods: {
        addTodo(){
            this.todoData.push({
                title: this.newTodo,
                done:false,
            });   
            
            this.newTodo = "" //Resetto l'input dove aver confermato il testo da inserire
        
        }
    },
})