import './App.css';

export default function App() {
  const ls = [...Array(24)].map((_, i) => i);
  return (
    <div className="grid-container">
      {ls.map((i) => (
        <div key={i} className="grid">
          <div className="grid-label">{i}</div>
        </div>
      ))}
    </div>
  );
}
