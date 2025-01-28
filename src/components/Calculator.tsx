import { useState } from "react";

const Calculator = () => {
  const [num, setNum] = useState<string[]>([]);
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [operator, setOperator] = useState<string>(``);

  const calculatorButtons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  const numberHandler = (e) => {
    const numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

    const isNumber = numArr.includes(e.target.innerHTML);

    if (e.target.innerHTML === ".") {
      if (num.includes(".")) return;
    }

    isNumber && setNum([...num, e.target.innerHTML]);

    if (e.target.innerHTML !== "=" && !isNumber) {
      setOperator(e.target.innerHTML);
      setFirstNumber(+num.join(""));
      setNum([]);
    }
    if (e.target.innerHTML === "=") {
      if (operator === "+") {
        setNum([String(firstNumber + +num.join(""))]);
      } else if (operator === "-") {
        setNum([String(firstNumber - +num.join(""))]);
      } else if (operator === "*") {
        setNum([String(firstNumber * +num.join(""))]);
      } else if (operator === "/") {
        setNum([String(firstNumber / +num.join(""))]);
      }
    }
  };

  return (
    <div>
      <div className="bg-gray-800 text-white text-2xl p-4">{num.join("")}</div>
      <div className="custom-grid p-4">
        {calculatorButtons.map((button) => (
          <button
            onClick={numberHandler}
            className="flex cursor-pointer items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-all active:scale-95"
            key={button}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
