import { useState } from "react";

function App() {
  const [isLogon, setIsLogin] = useState(false);
  return (
    <div>
      <h1>{isLogon ? "ログインしています" : "ログインしていません"}</h1>
      <button onClick={() => setIsLogin(!isLogon)}>ログイン状態変更</button>
    </div>
  );
}
export default App;
