const Todo = require("../Models/Todo")

exports.getTodos = async (req, res) => {
    try {
        const completedTodos = await Todo.countDocuments({ completed: true })
        const todos = await Todo.find()
    res.render('index', {
        pageTitle: "Todo App",
        todos,
        completedTodos,
        remainTodos: todos.length - completedTodos
    })
    } catch (err) {
        console.log(err)
    }
}

exports.addTodo = async (req, res) => {
    try {
        await Todo.create({ text: req.body.text })
        res.redirect('/')
    } catch (err) {
        
    }
}

exports.deletedTodo = async (req, res) => {
    try {
        await Todo.findByIdAndRemove(req.params.id)
        res.redirect('/')
    } catch (err) {
        console.log(err)
    }
}


exports.completedTodo = async (req, res) => {
    try {
        let todo = await Todo.findById(req.params.id)
        todo.completed = !todo.completed
        todo.save()
        res.redirect('/')
    } catch (err) {
        console.log(err)
    }
}