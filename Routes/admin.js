const { Router } = require('express');

const { addTodo, completedTodo, deletedTodo } = require('../Controllers/todos');

const router = new Router()

router.post('/add-todo', addTodo)

router.get('/completed-todo/:id', completedTodo)

router.get('/deleted-todo/:id', deletedTodo)

module.exports = router