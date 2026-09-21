type Props = {
  text: string;
  onClick: () => void;
};

//   「このボタンがクリックされたら、propsでもらった onClick を実行して」という意味。
function MyButton({ text, onClick }: Props) {
  return <button onClick={onClick}>{text}</button>;
}
export default MyButton;
