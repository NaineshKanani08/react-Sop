import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import ReduxCounter from './ReduxCounter'
// import Product from './Product'
import ReduxToolkitCounter from './ReduxToolkitCounter'
import UserDetails from './UserDetails'
const Redux = () => {
  return (

    <>
  <h1>Redux</h1>
  <ul>
    <li>
      <Link to='counter'>counter</Link>
    </li>
    <li>
      <Link to='counter_with_redux-toolkit'>counter with redux-toolkit</Link>
    </li>
    <li>
      <Link to='user_details_using_redux-thunk'>user details using redux-thunk</Link>
    </li>
    {/* <li>
      <Link to='product'>Product</Link>
    </li> */}
    
  </ul>
  <Routes>
      <Route exact path="counter" element={<ReduxCounter />} />
      <Route path="counter_with_redux-toolkit" element={<ReduxToolkitCounter />} />  
      <Route path="user_details_using_redux-thunk" element={<UserDetails />} />
      {/* <Route exact path="product" element={<Product />} /> */}
  </Routes>
  </>
  )
}


export default React.memo(Redux)