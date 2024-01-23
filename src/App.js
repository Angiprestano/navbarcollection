import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter, Router } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route>
          <MyNavbar />
        </Route>
      </Router>
    </BrowserRouter>
  );
}

export default App;
