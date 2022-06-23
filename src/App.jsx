import react, {useState} from "react"
import './App.css';
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from './components/CompleteTodo'
import { InputTodo }from './components/InputTodo'

const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText]
    setIncompleteTodos(newTodos);
    setTodoText("");
  }
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    const completeTodo = newIncompleteTodos.splice(index, 1); 
    const newCompleteTodos = [...completeTodos, completeTodo]
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }
  const onClickReturn = (index) => {
    const newCompleteTodos = [...completeTodos]
    const returnTodo = newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, returnTodo];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }
  return (
    <>
      <InputTodo 
        todoText={todoText} 
        onChange={onChangeTodoText}
        onClick={onClickAdd} 
      />
      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo 
        completeTodos={completeTodos}
        onClickReturn={onClickReturn}
      />
    </>
  );
}

export default App;
