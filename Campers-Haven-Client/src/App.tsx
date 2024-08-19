import { Outlet } from "react-router-dom";
import NavBar from "./shared/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
