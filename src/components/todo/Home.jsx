import React, { useEffect } from "react";
import Input from "./Input";

import { useSelector, useDispatch ,shallowEqual} from "react-redux";
import {
  getDataSuccess,
  getDataFailure,
  getDataRequest,
  addDataSuccess,
  addDataFailure,
  addDataRequest,
  deleteDataTodo,
} from "../../redux/action.js";

import axios from "axios";
import Todo from "./Todo";
import { Link } from "react-router-dom";

const Home = () => {
  const { todos, isLoading, isError } = useSelector((state) => state.data,shallowEqual);

  const dispatch = useDispatch();
  const handleFetchData = (payload) => {
    dispatch(getDataRequest(payload));
    axios
      .get("http://localhost:8080/Todos")
      .then((res) => {
        dispatch(getDataSuccess(res.data));
      })
      .catch((err) => dispatch(getDataFailure(err)));
  };

  // post

  const handlePostData = (payload) => {
    dispatch(addDataRequest(payload));
    axios
      .post("http://localhost:8080/todos", payload)
      .then((res) => {
        dispatch(addDataSuccess(res.data));
        handleFetchData();
      })
      .catch((err) => dispatch(addDataFailure(err)));
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  if (isLoading) {
    return <div>Is Loading Wait...</div>;
  }

  if (isError) {
    return (
      <div>
        Something is wrong.. <br />
        Try to Refresh once
      </div>
    );
  }
  const handleDelete = (fd) => {
    axios.delete(`http://localhost:8080/Todos/${fd}`).then((res) => {
      dispatch(deleteDataTodo(fd));
      handleFetchData();
    });
  };
  const handleComplete = (value) => {
    const data = {
      title: value.title,
      id: value.id,
      status: !value.status,
    };
    axios
      .patch(`http://localhost:8080/todos/${value.id}`, data)
      .then((res) => handleFetchData());
  };

  return (
    <div>
         <Link to="/total">Total</Link>
   Home
      <Input onClick={handlePostData} />
      {todos &&
        todos.map((el, id) => (
          <div key={id} style={{lineHeight:"2"}}>
            <Link to={`/todo/${el.id}/${el.title}/${el.status}`}>
              {el.title}
            </Link>
            <button onClick={() => handleDelete(el.id)}>Delete</button>
            <button onClick={() => handleComplete(el)}>Mark as Complete</button>
             <button><Link to={`/todo/${el.id}/edit`}>Edit</Link></button>
            
          </div>
        ))}
    
    </div>
  );
};

export default Home;
