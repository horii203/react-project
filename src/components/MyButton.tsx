type Props = {
  text: string;
};

function MyButton({ text }: Props) {
  return <button>{text}</button>;
}
export default MyButton;
