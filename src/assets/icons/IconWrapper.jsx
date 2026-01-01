import './icons.css';
export function IconWrapper({ children, size = 28 }) {
  return (
    <div
      className="icon-wrapper"
      style={{ width: size * 2, height: size * 2 }}
    >
      {children}
    </div>
  );
}
