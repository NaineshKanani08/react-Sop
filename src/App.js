import React from 'react'
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom'
import Links from './components/Links'
import PropsState from './components/propsState/PropsStateClass'                 //without Lazy
import LifeCycle from './components/lifeCycle/LifeCycle'
import Modules from './components/ES6/Modules'
import ParentRef from './components/Refs/ParentRef'
import AutoFocus from './components/Refs/AutoFocus'
import ParentComp from './components/Refs/ParentComp'
import ParentCompForword from './components/Refs/Forwording Refs/ParentCompForword'         
import Hooks from './components/hooks/Hooks'
import ErrorPage from './ErrorPage'
import ContextProvider from './components/Context Provider/ContextProvider'
import Hoc from './components/HOC/Hoc'
import Home from './components/SuspenseLazy/Home'
import Promises from './components/JS/Promise'
import AsyncAwait from './components/JS/AsyncAwait'
import RestHome from './components/RestApi/RestHome'
import FormDemo from './components/Form/FormDemo'
import LocalStorageData from './components/LocalStorage/LocalStorageData'
import Redux from './components/Redux/Redux'
import Reusable from './components/Reusable/Reusable'
import LoginWithJwt from './components/jwt/LoginWithJwt'
import ClassNames from './components/classNames/ClassNames'
import AtoBBtoA from './components/AtoB_BtoA/AtoB_BtoA'


const App = () => {
   const title=process.env.REACT_APP_TITLE
  return (
     < BrowserRouter >
     <div>
     <h2>{title}</h2>
        <ul>
          <li>
            <Link to="/">links</Link> 
          </li>
           <li>
              <Link to="/propsState">PropsState</Link>
           </li>
          <li>
            <Link to="/lifeCycle">LifeCycle</Link>
          </li>
          <li>
             <Link to="modules/*">ES6 Modules</Link>
          </li>
          <li>
             <Link to="/ParentRef">Fragments and Refs</Link>
          </li>
          <li>
             <Link to="/ParentComp">Calling child element in Parent Component</Link>
          </li>
          <li>
             <Link to="/ForwordingRefs">Forwording Refs</Link>
          </li>
          <li>
             <Link to="/AutoFocus">AutoFocus</Link>
          </li>
          <li>
             <Link to="Hooks/*">Hooks</Link>
          </li>
          <li>
             <Link to="/ContextProvider">ContextProvider</Link>
          </li>
          <li>
             <Link to="/Hoc">Higher Order Components</Link>
          </li>
          <li>
             <Link to="/SuspenseLazy">SuspenseLazy</Link>
          </li>
          <li>
             <Link to="/Promises">Promise</Link>
          </li>
          <li>
             <Link to="/AsyncAwait">AsyncAwait</Link>
          </li>
          <li>
             <Link to="/RestHome/*">RestApi</Link>
          </li>
          <li>
             <Link to="/Form">Form</Link>
          </li>
          <li>
             <Link to="/LocalStorageData">LocalStorageData</Link>
          </li>
          <li>
             <Link to="redux/*">Redux</Link>
          </li>
          <li>
             <Link to="/reusable_component">Reusable Component</Link>
          </li>
          <li>
             <Link to="/login_with_jwt">Login with JWT</Link>
          </li>
          <li>
             <Link to="/classnames">classNames</Link>
          </li>
          <li>
             <Link to="/atob_btoa">atob btoa(Encode Decode)</Link>
          </li>
        </ul>
        {/* <React.Suspense fallback={"Loading..."} > */}
        <Routes>
           <Route exact path="/" element={<Links />} />
           <Route  path="/propsState" element={<PropsState name="User1" id="101" /> } />
           <Route  path="/lifeCycle" element={<LifeCycle />} />
           <Route  path="modules/*" element={<Modules />} />
           <Route  path="/ParentRef" element={<ParentRef />} />
           <Route  path="/ParentComp" element={<ParentComp />} />
           <Route  path="/ForwordingRefs" element={<ParentCompForword />} />
           <Route  path="Hooks/*" element={<Hooks />} />
           <Route  path="/ContextProvider" element={<ContextProvider />} />
           <Route  path="/Hoc" element={<Hoc />} />
           <Route  path="/AutoFocus" element={<AutoFocus />} />
           <Route  path="/SuspenseLazy" element={<Home />} />
           <Route  path="Promises" element={<Promises />} />
           <Route  path="AsyncAwait" element={<AsyncAwait />} />
           <Route  path="RestHome/*" element={<RestHome />} />
           <Route  path="Form/" element={<FormDemo />} />
           <Route  path="LocalStorageData"  element={<LocalStorageData />} />
           <Route  path="redux/*"  element={<Redux />} />
           <Route  path="reusable_component"  element={<Reusable/>} />
           <Route  path="login_with_jwt"  element={<LoginWithJwt/>} />
           <Route path="classnames"  element={<ClassNames />} />
           <Route path="atob_btoa"  element={<AtoBBtoA />} />
           <Route path="*" element={<ErrorPage />}/>


        </Routes>
           {/* </React.Suspense> */}
     </div>
  </ BrowserRouter >
   
  )
}
export default App