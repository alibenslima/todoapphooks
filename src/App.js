import { useState } from "react";
import "./App.css";
import AddTodo from "./component/addTodo/AddTodo";
import ListTodo from "./component/listTodo/ListTodo";
const todos = [
  {
    id: Math.random(),
    skill: "Learn HTML and CSS",
    istermine: true,
  },
  {
    id: Math.random(),
    skill: "Learn Hooks",
    istermine: false,
  },
  {
    id: Math.random(),
    skill: "Learn jsx",
    istermine: true,
  },
];
function App() {
  const [todo, Settodo] = useState(todos);

  const handelDelete = (idskill) => {
    Settodo(todo.filter((el) => el.id !== idskill));
  };

  const handelcomplete = (idskill) => {
    Settodo(
      todo.map((el) =>
        el.id === idskill ? { ...el, istermine: !el.istermine } : el
      )
    );
  };
  const handeladd = (newskill) => {
    const ajouttodo = { id: Math.random(), skill: newskill, istermine: false };
    Settodo([...todo, ajouttodo]);
  };
  return (
    <div className="App">
      <h1>Todo App Hooks</h1>
      <AddTodo add={handeladd} />
      <ListTodo list={todo} del={handelDelete} complete={handelcomplete} />
    </div>
  );
}

export default App;
