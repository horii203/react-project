import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>名前入力</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>こんにちは、{name}さん</p>
    </div>
  );
}
export default App;
