import React from "react";
import { Link,Routes, Route } from "react-router-dom";
import UseStateUSeEffect from './UseStateUSeEffect'
import UseMemo from './UseMemo';
import ParentUseCallback from './UseCallback/ParentUseCallback'
import PureComp from './PureComp'
import Memo from './Memo/Memo';
import OrderDetails from './OrderDetails'
const Hooks = () => {
  return (
    <>
      <h1>Hooks</h1>
      {/*
       <ul>
        <li>
          <Link to="/UseStateUSeEffect">UseState and UsEffect</Link>
        </li>
        <li>
          <Link to="/UseMemo">UseMemo</Link>
        </li>
        <li>
          <Link to="/UseCallBack">UseCallBack</Link>
        </li>
        <li>
          <Link to="/PureComponent">PureComponent</Link>
        </li>
        <li>
          <Link to="/ReactMemo">ReactMemo</Link>
        </li>
      </ul> */}

      <ul>

        <li>
          <Link to="UseStateUseEffect">UseState and UsEffect</Link>
        </li>
        <li>
          <Link to="UseMemo">UseMemo</Link>
        </li>
        <li>
          <Link to="UseCallBack">UseCallBack</Link>
        </li>
        <li>
          <Link to="PureComponent">PureComponent</Link>
        </li>
        <li>
          <Link to="ReactMemo">ReactMemo</Link>
        </li>
      </ul>

      <div>
        <Routes>
          <Route path="UseStateUseEffect" element={<UseStateUSeEffect />}></Route>
          <Route path="UseMemo" element={<UseMemo />}></Route>
          <Route path="UseCallBack" element={<ParentUseCallback />}></Route>
          <Route path="PureComponent" element={<PureComp />}></Route>
          <Route path="ReactMemo" element={<Memo />}></Route>
          <Route path="order_details/:orderId" element={<OrderDetails />} />
        </Routes>
      </div>
    </>
  );
};

export default Hooks;
