import React, {useState, useCallback} from 'react'

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const handleSubmit = useCallback((e: React.FormEvent) => {
      e.preventDefault();
      console.log({ email, password });
    },[email, password]);
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "5px", width: "250px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "5px", width: "250px" }}
          />
        </div>
        <button type="submit" style={{ padding: "5px 15px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
