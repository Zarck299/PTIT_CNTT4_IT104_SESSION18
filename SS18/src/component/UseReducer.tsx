import {useReducer} from 'react'

export default function UseReducer() {
    const initialState = {count: 0};
    const countReducer = (state1: any, action: any) =>{
        console.log("action", action);
        if(action == "INCREASE"){
            return {count: state1.count + action.payload};
        }else if(action == "DECREASE"){
            return {count: state1.count - action.payload};
        }
        return state1;
        
    }
    const [state1, dispatch] = useReducer(countReducer, initialState);
    const increase = () => {
        dispatch({type: "INCREASE", payload: 3});
    }
    const decrease = () => {
        dispatch({type: "DECREASE", payload: 1});
    }
  return (
    <div>
        <h1>Use Reducer</h1>
        <p>giá trị count: {state1.count}</p>
        <button onClick={increase}>Tăng</button>
        <button onClick={decrease}>Gỉam</button>
    </div>
  )
}
