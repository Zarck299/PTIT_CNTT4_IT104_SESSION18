import React, { useReducer } from 'react'
type Action = {type: "SET_PROGRESS"; payload: number};
function progressReducer(state: number, action: Action) {
    switch (action.type) {
        case "SET_PROGRESS":
            return action.payload
        default:
            return state
    }
}
export default function TodoList07() {
    const [progress, dispatch] = useReducer(progressReducer, 0);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        dispatch({type: "SET_PROGRESS", payload: Number(e.target.value)});
    }
    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        alert(`Tiến độ công việc hiện tại: ${progress}%`)
    }
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Nhập tiến độ công việc</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleChange}
        />
        <span style={{ marginLeft: "10px" }}>{progress}%</span>
        <br />
        <button type="submit" style={{ marginTop: "20px" }}>
          Submit
        </button>
      </form>

      <h3>Tiến độ: {progress}%</h3>
    </div>
  )
}
