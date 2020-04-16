import React from 'react'
import Footer from './Footer'
import AddTodo from '../containerComponents/AddTodo'
import VisibleTodoList from '../containerComponents/VisibleTodoList'

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App 