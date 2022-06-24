import React,{useState} from 'react'

const Input = ({onClick}) => {
  const [value, setValue] = useState('');
const handleAdd=()=>{
  const data={
    title:value,
    status:false,
  }
  onClick(data)
  setValue("")
}
  return (
    <div>
      <input type="text" placeholder="Enter Todo.." onChange={(e)=>setValue(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Input