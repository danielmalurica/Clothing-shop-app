import './App.css';
import CategoryItem from './components/category-item/category-item.component';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from './routes/home/home.component';
import Navbar from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';


const Shop = () => {
  return(
      <p>Shop Part</p>
  )
}

const App = () => {
 
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='signIn' element={<SignIn/>}/>
      </Route>
    </Routes>
   
  );
}

export default App;
