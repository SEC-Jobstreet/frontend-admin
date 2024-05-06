import Nav from "./components/appnav";
import AppRouter from "./components/approuter";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="app-content">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
