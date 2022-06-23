import react, {useState} from "react"
import './App.css';

const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState(['ああああ', 'いいいい']);
  const [completeTodos, setCompleteTodos] = useState(['うううう']);
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
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のtodo</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className='list-row'>
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
          </div>
            )
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className='title'>完了のtodo</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickReturn(index)}>戻す</button>
              </div>
            )
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
