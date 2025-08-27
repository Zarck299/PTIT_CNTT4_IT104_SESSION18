import {useMemo} from 'react'
type User = {
    id: number,
    name: string,
    age: number
}
export default function Bai2() {
    const users: User[] = [
        { id: 1, name: "An", age: 17 },
        { id: 2, name: "Bình", age: 20 },
        { id: 3, name: "Chi", age: 22 },
        { id: 4, name: "Dũng", age: 16 },
        { id: 5, name: "Hà", age: 25 },
    ];
    const usersAbove18 = useMemo(() => {
        return users.filter((users) => users.age > 18);
    }, [users])
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Danh sách người dùng trên 18 tuổi</h2>
      <ul>
        {usersAbove18.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} tuổi
          </li>
        ))}
      </ul>
    </div>
  );
}
