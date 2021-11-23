import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import NavBar from './components/NavBar';
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import AddTodo from './components/AddTodo';

const todos = [
  {
      message: "Ranger la vaisselle", 
      isChecked: true
  },
  {
      message: "Répondre appel d'offres", 
      isChecked: false
  },
  {
      message: "Signer contrat", 
      isChecked: false
  },
  {
      message: "Ranger la salon", 
      isChecked: true
  }
]

function Layout() {
  return (
    <section classId="todo">
        <Outlet />
      <NavBar />
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>        
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route path="add-task" element={<AddTodo />} />
                <Route path=":search" element={<TodoList todos={ todos }/>} />
                <Route index element={<TodoList todos={ todos }/>} />
            </Route>
        </Routes>
    </BrowserRouter>    
  );
}

export default App;