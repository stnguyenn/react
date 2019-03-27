
import React from 'react'

import Footer from './Footer'

import AddTodo from '../containers/AddTodo'
// import Todo from './Todo'

import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>

    <p/>

    <AddTodo />

    <p/>

    {/* <Todo /> */}

    <VisibleTodoList />

    <p/>
    
    <Footer />
  </div>
)

export default App

