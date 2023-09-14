import React from "react";

function TaxRateSelector({ taxRate, handleTaxRateChange }) {
  const taxRateHandler = (event) => {
    handleTaxRateChange(event.target.value);
  };
  return (
    <div>
      <label className="income">Select Tax Rate:</label>
      <select value={taxRate} onChange={taxRateHandler}>
        <option value={0.1}>10%</option>
        <option value={0.15}>15%</option>
        <option value={0.2}>20%</option>
        <option value={0.3}>30%</option>
      </select>
    </div>
  );
}

export default TaxRateSelector;
