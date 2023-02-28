import React, { useState } from "react";
import "./AddTodo.css";
const AddTodo = ({ add }) => {
  const [text, settext] = useState("");
  const handelchange = (event) => settext(event.target.value);
  const handelsubmit = (e) => {
    e.preventDefault();
    text.trim() === "" ? alert(`saisir une valeur`) : add(text);
    settext("");
  };

  return (
    <div>
      <form action="" onSubmit={handelsubmit}>
        <input type="text" value={text} onChange={handelchange}></input>
        <button class="button" type="Submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
