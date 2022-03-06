import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const TodosUl = styled.ul``;

const TodosLi = styled.li``;

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("nooo");
  const getTodos = async () => {
    const todos_res = await axios.get(`http://localhost:8000/api/get`);
    setTodos(todos_res.data);
  };

  const onSubmit = async () => {
    const response = await axios.post("http://localhost:8000/api/insert", {
      id: Date.now(),
      completed: 0,
      todoName: todoText,
    });
    console.log(response);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Wrapper>
      <button onClick={onSubmit}>check</button>
      <button onClick={() => console.log(todos)}>check todos</button>
      <TodosUl>
        {todos &&
          todos.map((todo) => (
            <TodosLi key={todo.id}>{todo.todo_name}</TodosLi>
          ))}
      </TodosUl>
    </Wrapper>
  );
}

export default App;
