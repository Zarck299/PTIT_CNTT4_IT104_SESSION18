import React, {useReducer}from 'react'
type Action = {type: "CHANGE", payload: string}
function genderReducer(state: string, action: Action): string{
    switch (action.type) {
        case "CHANGE":
            return action.payload
        default:
            return state
    }
};
export default function GenderCheckbox() {
    const [gender, dispatch] = useReducer(genderReducer, "Nam");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        dispatch({type: "CHANGE", payload: e.target.value});
    }
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Chọn giới tính</h2>

      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="Nam"
            checked={gender === "Nam"}
            onChange={handleChange}
          />
          Nam
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="Nữ"
            checked={gender === "Nữ"}
            onChange={handleChange}
          />
          Nữ
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="Khác"
            checked={gender === "Khác"}
            onChange={handleChange}
          />
          Khác
        </label>
      </div>

      <h3>Selected gender: {gender}</h3>
    </div>
  )
}
