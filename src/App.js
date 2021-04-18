import './App.css'
import Login from './Components/Login/Login'
// const Login = React.lazy(() => import("./Components/Login/Login"))
import { BrowserRouter, Route } from "react-router-dom"
import Dashboard from './Components/dashboard/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
        {/* < Login /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
