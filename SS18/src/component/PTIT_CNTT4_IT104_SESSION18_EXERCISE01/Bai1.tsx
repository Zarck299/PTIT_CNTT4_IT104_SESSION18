import {useReducer}from 'react'
const counterReducer = (state: number, action: any) =>{
    switch (action.type) {
      case "INCREASE":
        return state + 1;
      default:
        return state;
    }
  }
export default function Increase() {
  const [count, dispatch] = useReducer(counterReducer, 0)
  return (
    <div style={{textAlign: "center", marginTop: "30px"}}>
      <h2>Gía trị hiện tại: {count}</h2>
      <button onClick={() => dispatch({type: "INCREASE"})}>INCREASE</button>
    </div>
  )
}
