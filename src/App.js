import "./App.css";
import TaxCalculator from "./components/TaxCalculator";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app">
      <div className=" container container1 p-2 shadow-lg p-3 mb-5 bg-white rounded ">
        <TaxCalculator />
      </div>
    </div>
  );
}

export default App;
