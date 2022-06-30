function App() {
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>(0)</span>
          0
        </div>
        <div className="top-options">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button" className="orange">+</button>
        </div>
        <div className="second-row">
          <button type="button">7 </button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="orange">*</button>
        </div>
        <div className="third-row">
          <button type="button">4 </button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="orange">-</button>
        </div>
        <div className="first-row">
          <button type="button">1 </button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="orange">+</button>
        </div>
        <div className="bottom-row flex">
          <button type="button" className="flex-child">0 </button>
          <button type="button">.</button>
          <button type="button" className="orange">=</button>
        </div>
      </div>
    </div>
  );
}
export default App;
