import React, { useReducer } from 'react'
type Action = { type: "CHANGE"; payload: string };
function inputReducer(state: string, action: Action): string{
    switch (action.type){
        case "CHANGE":
            return action.payload;
        default:
            return state;
    };
    }
export default function Increase() {
    const [text, dispatch] = useReducer(inputReducer, "");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        dispatch({type: "CHANGE", payload: e.target.value})
    }
  return (
    <div style={{textAlign: "center", marginTop: "50px"}}>
      <h1>Text/Input</h1>
      <input type="text" placeholder='Nhap chuoi...' value={text} onChange={handleChange} style={{ padding: "8px", minWidth: "250px"}}/>
    </div>
  )
}
