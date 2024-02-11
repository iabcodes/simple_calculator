// pages/index.tsx

import React, { useState } from 'react';

interface CalculatorProps {
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
}

const Calculator: React.FC<CalculatorProps> = ({ balance, setBalance }) => {
  const [expression, setExpression] = useState<string>('');

  const handleButtonClick = (value: string) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(expression);
      setBalance(result);
      setExpression('');
    } catch (error) {
      setExpression('Error');
    }
  };

  const handleClear = () => {
    setExpression('');
  };

  return (
    <div className="calculator grid grid-cols-4 gap-4 border border-gray-300 p-4 rounded-lg">
      <input
        type="text"
        value={expression}
        className="col-span-4 p-2 border border-gray-300 rounded-md"
        readOnly
      />
      <button
        className="col-span-3 p-2 border border-gray-300 rounded-md hover:bg-gray-200"
        onClick={handleClear}
      >
        Clear
      </button>
      <button
        className="p-2 border border-gray-300 rounded-md hover:bg-gray-200"
        onClick={() => handleButtonClick('/')}
      >
        /
      </button>
      {/* Rest of the buttons for digits, arithmetic operations, and equals sign */}
      <button
        className="p-2 border border-gray-300 rounded-md hover:bg-gray-200"
        onClick={handleCalculate}
      >
        =
      </button>
    </div>
  );
};

export default Calculator;
