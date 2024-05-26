import { Outlet, Link } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="body">
      <header>
        <h2>Programming Courses</h2>
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
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
