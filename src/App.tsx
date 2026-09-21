import MyButton from "./components/MyButton";

function App() {
  const handleClick = () => {
    alert("クリックされました");
  };
  return (
    <div>
      <h1>ホーム</h1>
      <MyButton text="クリック" onClick={handleClick} />
    </div>
  );
}
export default App;
