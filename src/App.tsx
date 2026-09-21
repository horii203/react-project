import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>ユーザー一覧</h1>
      {loading ? (
        <p>読み込み中...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name}：{user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default App;
