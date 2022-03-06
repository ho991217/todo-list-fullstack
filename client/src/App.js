import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const TodosUl = styled.ul``;

const TodosLi = styled.li``;

const Form = styled.form``;

const TodoInput = styled.input``;

const SubmitButton = styled.input``;

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  const getTodos = async () => {
    const todos_res = await axios.get(`http://localhost:8000/api/get`);
    setTodos(todos_res.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/insert", {
      id: Date.now(),
      completed: 0,
      todoName: todoText,
    });
    setTodoText("");
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <TodoInput
          type="text"
          placeholder="Enter your ToDos..."
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <SubmitButton type="submit" value="submit" />
      </Form>
      <TodosUl>
        {todos?.map((todo) => (
          <TodosLi key={todo.id}>{todo.todo_name}</TodosLi>
        ))}
      </TodosUl>
    </Wrapper>
  );
}

export default App;
