import Nav from "./components/appnav";
import AppRouter from "./components/approuter";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <AppRouter />
    </div>
  );
}

export default App;
