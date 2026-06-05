import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <NavLink className="brand" to="/">
          fakestore-react
        </NavLink>

        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/entities">Productos</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}

export default App;
