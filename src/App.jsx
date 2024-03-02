import { BrowserRouter, Router, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<WelcomePage />} />
      </Router>
    </BrowserRouter>
  );
}

export default App;
