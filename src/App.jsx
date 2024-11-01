import './App.css';
import HeaderComponent from './components/HeaderComponent';
import ListUserComponent from './components/ListUserComponent';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import UserComponent from './components/UserComponent';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import SearchComponent from './components/SearchComponent';
import ContactComponent from './components/ContactComponent';
import SigninComponent from './components/SigninComponent';
import SignupComponent from './components/SignupComponent';
import WelcomeComponent from './components/WelcomeComponent';
import ListJobComponent from './components/ListJobComponent';
import JobComponent from './components/JobComponent';

const App = () => {
  const location = useLocation();
  // Hide header on welcome, signin, and signup pages
  const showHeader = !['/', '/signin', '/signup'].includes(location.pathname);

  return (
    <>
      {showHeader && <HeaderComponent />}
      <Routes>
        <Route path='/' element={<WelcomeComponent />} />
        <Route path='/home' element={<HomeComponent />} />
        <Route path='/about' element={<AboutComponent />} />
        <Route path='/search' element={<SearchComponent />} />
        <Route path='/contact' element={<ContactComponent />} />
        <Route path='/users' element={<ListUserComponent />} />
        <Route path='/jobs' element={<ListJobComponent />} />
        <Route path='/add-user' element={<UserComponent />} />
        <Route path='/add-job' element={<JobComponent />} />
        <Route path='/signin' element={<SigninComponent />} />
        <Route path='/signup' element={<SignupComponent />} />
      </Routes>
    </>
  );
};

// for optional navbar display (Welcome page)
const MainApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default MainApp;
