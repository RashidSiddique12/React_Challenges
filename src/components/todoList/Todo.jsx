import React, { useState } from 'react'
import Lists from './Lists';

let id = 0;
function Todo() {
    const [data, setData] = useState([]);
    const [val, setVal] = useState("");
    const [isEdit, setEdit] = useState(false);
    const [upId, setUpId] = useState("");

    // console.log(data);
    // console.log(val);

    const handleAdd = ()=>{
        setData([...data, {id : id++, name:val }])
        setVal("");

    }
    const handleDelete = (idx)=>{
        setData(data.filter((d)=> d.id !== idx))
    }
    const handleEdit = ()=>{
        setData(data.map((d)=>{
            if(d.id === upId){
                return {...d , name : val}
            }else{
                return d
            }
        }))
        setUpId("");
        setEdit(false);
        setVal("");
    } 
    const handleUpdate = (idx,name)=>{
        setUpId(idx)
        setEdit(true);
        setVal(name)
    }
  return (
    <div>
      <div>
       {/* <form> */}
       <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} /> <br />
        {isEdit ? <button onClick={handleEdit}>update</button> : <button onClick={handleAdd}>Add</button>}
       {/* </form> */}
      </div>

      {data && data.map(({id, name})=>(
        <Lists key={id}  name={name} handleDelete={()=>handleDelete(id)} handleUpdate={()=>handleUpdate(id, name)}/>
      ))}
    </div>
  )
}

export default Todo
