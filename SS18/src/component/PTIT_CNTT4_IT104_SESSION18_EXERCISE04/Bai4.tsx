import React, {useState, useCallback} from 'react'

export default function ChangeColor() {
    const [color, setColor] = useState<string>("");
    const handleChangeColor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value)
    }, []);
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Color Picker</h2>
      <div style={{ marginBottom: "20px" }}>
        <label>Màu người dùng chọn: </label>
        <input 
          type="color" 
          value={color} 
          onChange={handleChangeColor} 
          style={{ marginLeft: "10px", width: "50px", height: "30px", border: "none" }}
        />
      </div>

      <div>
        <p>Màu hiển thị:</p>
        <div
          style={{
            width: "150px",
            height: "100px",
            margin: "0 auto",
            border: "1px solid #ccc",
            backgroundColor: color || "white",
          }}
        ></div>
      </div>
    </div>
  )
}
