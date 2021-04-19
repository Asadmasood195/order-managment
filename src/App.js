import "./styles/styles.scss"
import './App.css'
import React, { Suspense } from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import LoadingComponent from './Components/Loading Animation/Loading'
const Dashboard = React.lazy(() => import("./Components/dashboard/Dashboard"))
const Login = React.lazy(() => import("./Components/Login/Login"))


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div><LoadingComponent /></div>}>

        <div className="App">
          <Route exact path='/' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
          {/* < Login /> */}
        </div>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
