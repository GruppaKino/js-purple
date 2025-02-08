'use strict';

const taskManager = {
    tasks: [],

    addTask (title, priority,) {
        if (typeof title !== 'string' || typeof priority !== 'number') {
            return 'Вы некорректно ввели значения!'
        } else {
            const arrId = [title, priority,];
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
            this.tasks = this.tasks.filter(task => task.id !== id);
            return this.tasks
        } else {
            return 'Задача с таким ID не найдена!';
        }
    },

    updateTask (id, update) {
        if (typeof id !== 'number' || (typeof update !== 'string' && typeof update !== 'number')) {
            return 'Вы не правильно ввели значения!';
        };

        const findID = this.tasks.findIndex(element => element.id === id);

        if (findID === -1) {
            return 'Такого ID с задачй нет!';
        };

        this.tasks[findID].title = update;
        return this.tasks[findID];
    },

    sortTasks (criteria) {
        if (typeof criteria !== 'string') {
            return 'Вы некорректно ввели значения!'
        }

        if (criteria === 'priority') {
            this.tasks.sort((a, b) => a.priority - b.priority);
        } else if (criteria === 'id') {
            this.tasks.sort((a, b) => a.id - b.id);
        } else if (criteria === 'title'){
            this.tasks.sort((a, b) => a.title - b.title);
        } else {
            return 'Вы некорректно ввели значение'
        }

        return this.tasks;
    },
}
taskManager.addTask('Почисить душ', 20);
taskManager.addTask('Помыть машину', 30);
taskManager.updateTask(1, 'Сходить на рынок');
// console.log(taskManager);



function newObj () {
    const taskManager2 = {
        tasks: [],
    
        addTask (title, priority, description) {
            if (typeof title !== 'string' || typeof priority !== 'number' || typeof description !== 'string') {
                return 'Вы некорректно ввели значения!'
            } else {
                const arrId = [title, priority, description];
                const id = this.tasks.length + 1
                arrId.push(id);
                const obj = {
                    id: arrId[3],
                    priority: arrId[1],
                    description: arrId[2],
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
                this.tasks = this.tasks.filter(task => task.id !== id);
                return this.tasks
            } else {
                return 'Задача с таким ID не найдена!';
            }
        },
    
        updateTask (id, update) {
            if (typeof id !== 'number' || (update !== 'string' && update !== 'number')) {
                return 'Вы не правильно ввели значения!';
            };
    
            const findID = this.tasks.findIndex(element => element.id === id);
    
            if (findID === -1) {
                return 'Такого ID с задачй нет!';
            };
    
            this.tasks[findID].title = update;
            return this.tasks[findID];
        },
    
        sortTasks (criteria) {
            if (typeof criteria !== 'string') {
                return 'Вы некорректно ввели значения!'
            }
    
            if (criteria === 'priority') {
                this.tasks.sort((a, b) => a.priority - b.priority);
            } else if (criteria === 'id') {
                this.tasks.sort((a, b) => a.id - b.id);
            } else if (criteria === 'title'){
                this.tasks.sort((a, b) => a.title - b.title);
            } else {
                return 'Вы некорректно ввели значение'
            }
    
            return this.tasks;
        },
    };
    return function () {
        return taskManager2;
    }
}

const getObjOfTaskMeneger = newObj()();
getObjOfTaskMeneger.addTask('Погулять с собакой', 3, 'Просто пойти погулять!');
console.log(getObjOfTaskMeneger);
console.log(taskManager);

