import React, { useReducer, useState } from "react";

type Task = { id: number; name: string };

type Action =
  | { type: "ADD"; payload: string }
  | { type: "DELETE"; payload: number };

function taskReducer(state: Task[], action: Action): Task[] {
  switch (action.type) {
    case "ADD":
      if (action.payload.trim() === "") return state;
      return [...state, { id: Date.now(), name: action.payload }];
    case "DELETE":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
}

export default function TodoList08() {
  const [tasks, dispatch] = useReducer(taskReducer, [
    { id: 1, name: "Quét nhà" },
    { id: 2, name: "Giặt quần áo" },
    { id: 3, name: "Code" },
  ]);
  const [input, setInput] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: input });
    setInput("");
  };

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xóa công việc này?");
    if (confirmDelete) {
      dispatch({ type: "DELETE", payload: id });
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Danh sách công việc</h2>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Nhập tên công việc"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: "8px", minWidth: "250px" }}
        />
        <button type="submit" style={{ marginLeft: "10px" }}>
          Thêm
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              marginBottom: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span>{task.name}</span>
            <button
              onClick={() => handleDelete(task.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
