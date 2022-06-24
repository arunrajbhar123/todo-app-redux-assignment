import React,{useEffect,useState} from 'react'
import { useParams } from "react-router-dom";
import  axios  from "axios";

import {useNavigate,Link} from "react-router-dom";

const Edit = () => {
  const {id}=useParams();
const navigate=useNavigate();
const [value, setvalue] = useState('');



  useEffect(() => {
    if(id){
      axios.get(`http://localhost:8080/Todos/${id}`)
      .then((d)=> {
        setvalue(d.data);
       
      })
    }
    }, [id])



    const handleSave=(newvalue)=>{
      const data = {
        title: value,
        id: newvalue.id,
        status: !newvalue.status,
      };
      
      axios
        .patch(`http://localhost:8080/todos/${id}`, data)
        .then((res) =>  navigate("/"));

    }
  return (
    <div>
      <h1>Hey Guys Edit Your Task as you want!</h1>
      <Link to="/">Home</Link><br /><br /><br />

      Title: <input value={value.title} onChange={(e)=>setvalue(e.target.value)}/>
      <button onClick={()=>handleSave(value)}>Save</button>
    </div>
  )
}

export default Edit
