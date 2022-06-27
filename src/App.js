import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';
import {newUser, newProducts} from './newFormData'
import './styles/dark.scss';
import { useGlobalContext } from "./context/darkContext";

const App = () => {
  const {dark} = useGlobalContext();
  return (
    <div className={dark ? 'app dark' : 'dark'}>
      <Routes>
        <Route path='/' >
          <Route index element={<Home />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='users'>
            <Route index element={<List />}></Route>
            <Route path=':userId' element={<Single />}></Route>
            <Route path='new' element={<New newForm={newUser}/>}></Route>
          </Route>
          <Route path='products'>
            <Route index element={<List />}></Route>
            <Route path=':productId' element={<Single />}></Route>
            <Route path='new' element={<New newForm={newProducts}/>}></Route>
          </Route>
        </Route>
      </Routes>     
    </div>
  )
}

export default App