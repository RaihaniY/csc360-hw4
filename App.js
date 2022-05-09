import React, { useEffect, useState, useReducer } from "react";
import UserBar from './UserBar'
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
import appReducer from "./reducers";
function App() {
  //const [user, setUser] = useState("");
  //const todos = [{title: 'First todo', desc: 'Take out the trash', creation: '4/25'}]
  //const [todos, setTodos] = useState([])
  const [state, dispatch] = useReducer(appReducer, {user:'', todos: [] })

  useEffect(()=> {
    console.log('user effect hook firing')
    if (state.user){
      document.title = `${state.user}'s Todos`
    } else {
      document.title = 'My Blog'
    }
  }, [state.user]
  )


  useEffect(() => {
    console.log('post effect hook firing')
   }, [state.todos]
  )


  return (
    <div>
      <UserBar user={state.user}  dispatch={dispatch} />
      {state.user && <CreateTodo todos = {state.user} Todos={state.todos} dispatch = {dispatch}/>}
      <TodoList todos={state.todos} />
    </div>
  );
}

export default App;
