import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { userTokenInfo } from "./store/slice/user";
import RegisterForm from "./components/RegisterForm";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import Page404 from "./components/Page404";
//import Detail from "./components/Detail";
import PageDev from "./components/PageInDev";
import Detail from "./components/Detail";
import Premium from "./components/Premium";
import About from "./components/About";
import Feedback from "./pages/Feedback";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProfileInfo from './components/Profile';
import PageAdmin from "./components/PageAdmin";
import Avatar from "./components/Avatar";
import UserMP3 from "./components/UserMP3";
import CheckUp from "./pages/CheckUp";
import Perfil from "./Perfil"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userTokenInfo())
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/register" element={<RegisterForm />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/home/:id" element={<Detail />} />
        <Route exact path="/favorites" element={<PageDev />} />
        <Route exact path="/library" element={<PageDev />} />
        <Route exact path="/premium" element={<Premium />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/dashboard/*" element={<Dashboard />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/profile" element={<ProfileInfo />} />
        <Route path="*" element={<PageDev />} />
        <Route exact path="/admin" element={<PageAdmin />} />
        <Route exact path="/avatar" element={<Avatar />} />
        <Route exact path="/usermp3" element={<UserMP3 />} />
        <Route exact path="/checkup" element={<CheckUp />} />
        <Route exact path="/miperfil" element={<Perfil />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}
export default App;
