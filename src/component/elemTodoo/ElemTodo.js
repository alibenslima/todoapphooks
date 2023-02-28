import React from "react";
import "./ElemTodo.css";
const ElemTodo = ({ el, del, comp }) => {
  return (
    <div className="listskill">
      <p className={el.istermine ? "notbarre" : null}>{el.skill}</p>
      <button class="button1" onClick={() => comp(el.id)}>
        {el.istermine ? "UNDO" : "COMPLETE"}
      </button>
      <button class="button2" onClick={() => del(el.id)}>
        Delete
      </button>
    </div>
  );
};

export default ElemTodo;
