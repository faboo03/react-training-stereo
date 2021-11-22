import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import NavBar from './components/NavBar';

function App() {
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

  return (
    <section classId="todo">
      <h1 className="m-3">Liste de tâches</h1>
      <TodoList todos={todos}/>
      <NavBar />
    </section>
  );
}

export default App;