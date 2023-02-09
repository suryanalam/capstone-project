import './App.css'
import { Routes, Route } from 'react-router-dom'

//components
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'

//pages
import Customers from './pages/customers/Customers'
import Dashboard from './pages/dashboard/Dashboard'
import Products from './pages/products/Products'
import Profile from './pages/profile/Profile'

function App() {
  console.log("app js file updated")
  return (
    <div className="App">
        <Sidebar />
        <div className='body-container'>
            <Navbar />
            <div className='main-container'>
                <Routes>
                    <Route path="/Dashboard" element={<Dashboard />}></Route> 
                    <Route path="/Products" element={<Products  />}></Route>
                    <Route path="/Customers" element={<Customers />}></Route>
                    <Route path="/Profile" element={<Profile />}></Route>
                </Routes>
              </div>
        </div>
    </div>
  );
}

export default App;
