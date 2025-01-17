'use strict';

const taskManager = {
    tasks: [],

    addTask (title, priority) {
        if (typeof title !== 'string' || typeof priority !== 'number') {
            return 'Вы некорректно ввели значения!'
        } else {
            const arrId = [title, priority];
            const id = this.tasks.length + 1
            arrId.push(id);
            const obj = {
                id: arrId[2],
                priority: arrId[1],
                title: arrId[0],
            }
            return this.tasks.push(obj);
        }
    },

    deleteTask (id) {
        if (typeof id !== 'number') {
            return 'Вы не ввели ID'
        } 
        
        const taskExists = this.tasks.some(task => task.id === id);

        if (taskExists) {
            this.tasks = this.tasks.filter(task => task.id !== id)
            return this.tasks
        } else {
            return 'Задача с таким ID не найдена!'
        }
    },

    // updateTask (id, update) {
    //     if (typeof id !== 'number') return 'Это не ID';

    //     const findId = this.tasks.find(task => task.id === id);

    //     if (findId == this.tasks.title) {
    //         this.tasks.title = update
    //         return this.tasks;
    //     } else {
    //         this.tasks.
    //     }
    // },

    // sortTasks (criteria, order) {

    // },
}
taskManager.addTask('Почисить душ', 20);
taskManager.addTask('Помыть машину', 30);
taskManager.updateTask(1);
console.log(taskManager);