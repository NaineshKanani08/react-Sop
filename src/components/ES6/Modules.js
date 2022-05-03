import React from 'react'
import{test} from './Export'
import {Link,Routes,Route} from 'react-router-dom'
import TernaryCondition from './TernaryCon'
import SpreadOperator from './SpreadOperator'
const Modules = () => {
    return (
        <>
            <h1>Modules</h1>
            <ul>
                <li><Link to="ternaryCondition">TernaryCondition</Link></li>
                <li><Link to="spreadOperator">SpreadOperator</Link></li>
            </ul>
            <h2>{test()}</h2>
            <Routes>
                <Route exact path="ternaryCondition" element={<TernaryCondition />} />
                <Route exact path="/spreadOperator" element={<SpreadOperator />} />
            </Routes>
        </>
    )
}

export default Modules