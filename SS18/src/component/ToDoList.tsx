import React, { useReducer } from 'react'
type Job= {
  id:number;
  title:string;
  completes:boolean
}
export default function Todos() {
  const initial={
     jobs:[
      {
        id:1,
        title:"học C++",
        completed:true
      },
       {
        id:2,
        title:"python",
        completed:false
      }
     ],
     new_title:""
  }
  const todoReducer=(state:any, action:any)=>{
      switch (action.type) {
        case "ADD":
          console.log("thêm công việc");
          return {jobs:[...state.jobs,action.payload]}
        case "EDIT":
          console.log("Sửa thông tin công việc");
          let index = state.jobs.findIndex((item: Job) => item.id == action.payload);
          state.jobs.splice(index, 1, action.payload); 
          return {jobs: state.jobs};
        case "DELETE":
          console.log("tiến hành xóa công việc");
          let result= state.jobs.filter((item:Job)=>item.id!=action.payload);
          return {jobs:result};
        default:
         state;
      }
  }
  const [todos, dispatch]= useReducer(todoReducer,initial);
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value);
        initial.new_title=e.target.value;
  }
  const addTodo=()=>{
     // bắn dispatch kèm thông tin công việc lên trên hàm reducer sẽ xử lý
     const newTodo={
      id: Math.floor(Math.random()*9999999),
      title:initial.new_title,
      completed:false
     }
     dispatch({type:"ADD",payload:newTodo});
  }
  const deleteJob=(id:number)=>{
        dispatch({type:"DELETE",payload:id})
  }
  const editJob=(item:Job)=>{
      let new_title= prompt("mời nhập tên công việc mới");
      let new_job= {...item,title:new_title};
      dispatch({type:"EDIT",payload:new_job});
  }
  return (
    <div>
      <input onChange={handleChange} type="text" name="" id="" />
      <button onClick={addTodo}>Thêm công việc</button>
      <h1 > DANH SÁCH CÔNG VIỆC</h1>
       {todos.jobs.map((item:Job,index:number)=>{
        return <li key={index}>{item.title} <button onClick={()=>deleteJob(item.id)}>Xóa </button>
        <button onClick={()=>editJob(item.id)}> Sửa </button>
        </li>
       })}
    </div>
  )
}