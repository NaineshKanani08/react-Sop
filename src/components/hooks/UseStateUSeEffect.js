import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
const UseStateUSeEffect = () => {
    const [count,setCount]= useState(0)
    const orderIds = ["10001", "10002", "10003"]
    useEffect(() => {
      // if(count>0)
      //   document.title=`click (${count})`
      //   else{
      //     document.title="click"
      //   }
        (count>0)? document.title=`click (${count})`: document.title="click"
    }, [count])

    const newOrderIds =orderIds.map((orderId) =>{
        return (
          <li key={orderId}>
            <Link to={`/Hooks/order_details/${orderId}`}>
              View Order {orderId}
            </Link>
          </li>
        )
    })
  return <div>
<h1>UseState and USeEffect</h1>
<b>count:{count}</b>
<button onClick={()=>{setCount(count+1)}}>Click Me</button>
<h3>{newOrderIds}</h3>

  </div>;
};

export default UseStateUSeEffect;


