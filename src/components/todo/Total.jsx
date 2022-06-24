import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Total = () => {
  const { todos } = useSelector((state) => state.data);
  let inComplete = 0;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].status) {
    } else {
      inComplete++;
    }
  }
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>
        Total Task: {todos.status === false ? "0" : inComplete}/
        {`${todos.length}`}
      </h1>
      <hr />
      <h4>InComplete Task details</h4>
      {todos &&
        todos.map((el, id) => (
          <div key={id}>
            {el.status ? <h1>Not Exist</h1> : (
              <h4>
                {" "}
                <br />
                <p>
                  {" "}
                  {id}. Title : {el.title} Status : {`${el.status}`}
                </p>
              </h4>
            )}
          </div>
        ))}
    </div>
  );
};

export default Total;
