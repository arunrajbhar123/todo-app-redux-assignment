import React,{useEffect,useState} from 'react'
import {useParams,Link} from "react-router-dom";
import axios from "axios";
const Todo = () => {
  const {id}=useParams();
 
  const [product, setProduct] = useState('')
  useEffect(() => {
  if(id){
    axios.get(`http://localhost:8080/Todos/${id}`)
    .then((d)=> setProduct(d.data))
  }
  }, [id])
  return (
    <div>
    <Link to="/">Back to Home</Link>
      <div>Todo id:{id}</div>
      <div>Todo:{product.title}</div>
      <div>Complete Status:{`${product.status}`}</div>
 
    </div>
  )
}

export default Todo