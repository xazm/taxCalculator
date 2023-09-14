import { ClassNames } from "@emotion/react";
import "./App.css";
import TaxCalculator from "./components/TaxCalculator";
import TaxRateSelector from "./components/TaxRateSelector";
function App() {
  return (
    <div className="app">
      <div className="container">
        <TaxCalculator />
      </div>
    </div>
  );
}

export default App;
