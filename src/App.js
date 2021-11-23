import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import TodoList from './components/TodoList';
import NavBar from './components/NavBar';
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import data from './data.json';

function Layout() {
  return (
    <section classID="todo">
        <Outlet />
      <NavBar />
    </section>
  )
}

function App() {
  const [tasks, setTasks] = useState(data);

  let addTask = (task) => {
    setTasks([...tasks,task]);
  }

  return (
    <BrowserRouter>        
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route path="add-task" element={<AddTodo addTask={addTask} />} />
                <Route path=":search" element={<TodoList tasks={ tasks }/>} />
                <Route index element={<TodoList tasks={ tasks }/>} />
            </Route>
        </Routes>
    </BrowserRouter>    
  );
}

export default App;