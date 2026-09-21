import { useState } from "react";

function App() {
  const [name, setName] = useState("田中");
  return (
    <div>
      <h1>こんにちは、{name}さん</h1>
      <button onClick={() => setName("佐藤")}>名前を変更</button>
    </div>
  );
}
export default App;
