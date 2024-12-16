import './styles/App.css';
import TodoList from './components/TodoList';
import { useState } from 'react';
import './styles/Todo.css'

function App() {
  const [input, setInput] = useState(''); //입력값 저장
  const [todos, setTodos] = useState([]); //투두리스트 데이터 저장

  /* 
  이벤트처리
  추가하기 함수
  완료상태 토글함수
  항목 삭제 함수
  */
  //addTodo 입력값을 출력하는 함수
  const addTodo =()=>{
    if(!input.trim()) return; //빈 입력값 검증
    setTodos((prevTodos)=>[
      ...prevTodos, //새배열 생성, 스프레드 연산자
      {id:Date.now(), text:input, completed:false},

    ]);
    setInput('') //입력값 초기화
    //비어있으면 동작하지 않고 종료, 객체 생성 새 항목 배열 끝에 추가, 입력필드 지우기
  }
  //완료상태 토글
  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  //할 일 삭제
  const deleteTodo = (id)=>{
    setTodos((prevTodos)=> prevTodos.filter((todo)=>todo.id !== id))
  };

  return (
    <div className='wrap'>
      <h2>ToDoList</h2>
      <div className='inputContainer'>
        <input 
        type="text" 
        placeholder='할 일을 입력하세요...' 
        value={input} 
        onChange={(e)=>setInput(e.target.value)} 
        />
        <button onClick={addTodo}>추가</button>
      </div>
      <TodoList 
      todos={todos} 
      toggleComplete={toggleComplete}
      deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;