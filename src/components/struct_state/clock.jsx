export default function Clock(props) {
  const color = props.color;
  return <h1 style={{ color: color }}>{props.time}</h1>;
}
