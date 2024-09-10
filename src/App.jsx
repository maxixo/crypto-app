import { useContext } from'react'
import { Route, Routes} from "react-router-dom"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
// import RecentlyAdded from "./components/RecentlyAdded"
import HomePage from "./pages/HomePage"
import Portfolio from "./pages/Portfolio"
import DashboardPage from "./pages/DashboardPage"
import CoinPage from "./pages/CoinPage"


function App() {






  return (
    <>
        
        
         
       <Routes>

    <Route path="/" element={<HomePage/>}/>
    {/* <Route path="/trending" element={<RecentlyAdded/>}/> */}
    <Route path="/portfolio" element={<Portfolio/>}/>
    <Route path="/dashboard" element={ <DashboardPage/>}  />
    <Route path="/coin/:id" element={ <CoinPage/>}  />



{/* Private Routes */}
<Route path="/sign-up" element={<SignUp/>} />
<Route path="/sign-in" element={<SignIn/>} />

</Routes>


    </>
  )
}

export default App
