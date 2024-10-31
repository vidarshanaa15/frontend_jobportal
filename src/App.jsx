import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ListUserComponent from './components/ListUserComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserComponent from './components/UserComponent'
import HomeComponent from './components/HomeComponent'

function App() {
  // here, the order in which the components are specified are important (header before content, etc)
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<HomeComponent />}></Route>
          <Route path='/users' element={<ListUserComponent />}></Route>
          <Route path='/add-user' element={<UserComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
