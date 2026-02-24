export default function Button({ onClick, children, className, style }) {
  return (
    <button onClick={onClick} className={className} style={style}>
      {children}
    </button>
  );
}
