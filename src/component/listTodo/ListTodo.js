import React from "react";
import ElemTodo from "../elemTodoo/ElemTodo";

const ListTodo = ({ list, del, complete }) => {
  return (
    <div className="map">
      {list.map((el) => (
        <ElemTodo el={el} cle={el.id} del={del} comp={complete} />
      ))}
    </div>
  );
};

export default ListTodo;
