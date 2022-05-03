import React from 'react';
import {Link,Routes, Route} from 'react-router-dom'
import RestApi from './RestApi'
import Axios from './Axios'
const RestHome = () => {
  return <>
  <h1>Rest Api</h1>
  <ul>
    <li>
      <Link to="RestApi-fetch">RestApi with Fetch</Link>
    </li>
    <li>
      <Link to="Axios">Axios</Link>
    </li>
  </ul>
  <Routes>
    <Route path="RestApi-fetch" element={<RestApi />} />
    <Route  path="Axios" element={<Axios />} />
  </Routes>


  </>;
};

export default RestHome;
