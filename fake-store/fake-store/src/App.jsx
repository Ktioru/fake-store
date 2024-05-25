import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="body">
      <header>
        <h2>Course Store</h2>
        <nav>
          <div className="page">
            <p className="page-text">Home</p>
          </div>
          <div className="page">
            <p className="page-text">Shop</p>
          </div>
          <div className="page">
            <p className="page-text">Cart</p>
          </div>
          <div className="page">
            <p className="page-text">About Us</p>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
