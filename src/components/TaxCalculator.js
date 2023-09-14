import React, { useState } from "react";
import TaxRateSelector from "./TaxRateSelector";

function TaxCalculator() {
  // State 1 for income
  const [income, setIncome] = useState("");
  const [taxRate, setTaxRate] = useState(0.1);
  const [errorMessage, setErrorMessage] = useState("");

  // state 2 this is for result
  const [result, setResult] = useState("");

  const handleTaxincome = (event) => {
    setIncome(event.target.value);
  };

  // const calculateTax = () => {
  //   setResult(income * taxRate);

  // };

  const calculateTax = () => {
    const parsedIncome = parseFloat(income);

    if (isNaN(parsedIncome) || parsedIncome < 0) {
      // Invalid input, set error message
      setErrorMessage("Please input numbers only.");
    } else if (income.length > 7) {
      setErrorMessage("Maximum of 7 digits only.");
    } else {
      // Valid input, clear error message
      setErrorMessage("");
      // Calculate tax
      setResult(parsedIncome * taxRate);
    }
  };

  return (
    <div>
      <div className="">
        <h1>Calculate My Income Tax</h1>
        <h2>Tax result: {result}</h2>
        <div>
          <p>Income:</p>
          <input type="text" onChange={handleTaxincome}></input>
        </div>
        <TaxRateSelector handleTaxRateChange={setTaxRate} taxRate={taxRate} />
        <div className="btnContainer">
          <button className="btnResult" onClick={calculateTax}>
            Calculate My Income Tax
          </button>
        </div>
        <p className="errorMsg" style={{ color: "red" }}>
          {errorMessage}
        </p>
      </div>
    </div>
  );
}

export default TaxCalculator;
