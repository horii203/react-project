function App() {
  const users = [
    { id: 1, name: "田中太郎" },
    { id: 2, name: "佐藤花子" },
    { id: 3, name: "鈴木一郎" },
  ];

  return (
    <div>
      <h1>ユーザー一覧</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
