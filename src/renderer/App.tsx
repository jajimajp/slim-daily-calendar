import './App.css';

export default function App() {
  const ls = [...Array(25)].map((_, i) => i);
  return (
    <div className="grid-container">
      {ls.map((i) => (
        <div key={i} className="grid">
          <div className="grid-label">{i}</div>
        </div>
      ))}
      <div className="event-container">
        <div
          style={{
            borderRadius: '8px',
            height: 'calc(100% / 25)',
            background: 'rgba(125, 125, 125, 0.3)',
            color: 'gray',
            fontWeight: 'bold',
          }}
        >
          0:00 test
        </div>
      </div>
    </div>
  );
}
