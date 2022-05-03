// import React, { useState,useMemo } from "react";

// const UseMemo = () => {
//   const [count, setCount] = useState(0);
//   const [num, setNum] = useState(0);
//   const square=useMemo(()=>squareNum(num),[num])
//   function squareNum(number){
//     console.log("Square the num");
//     return Math.pow(number, 2);}

//   return (
//     <>
//       <h1>UseMemo</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Count {count}
//       </button><br />
//       <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
//       <p>{square}</p>
//     </>
//   );
// };

// export default UseMemo;
import React, { useState,useMemo } from "react";
const UseMemo = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  // const factorial = factorialOf(number);      //without useMemo

  const factorial = useMemo(()=>factorialOf(number),[number]);

  const onClick = () => setInc(inc + 1);

  return (
    <div>
      <h1>Use Memo</h1>
      Factorial of
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
       is {factorial} <br /><br />
      <button onClick={onClick}>Re-render {inc}</button>
    </div>
  );
}

function factorialOf(n) {
  let i=0;
  while(i<2000000000)i++
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

export default UseMemo;
