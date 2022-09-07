import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBarHome.css";
import imagen from "./img_avatar.png";
import { useRef, useState } from "react";
import imagen2 from "./WJT6FaB.png";
import SearchBar from "../SearchBar/Index";
import { Link, useNavigate } from "react-router-dom";
import { userTokenInfo, logoutUser } from "../../store/slice/user";
import { useDispatch, useSelector } from "react-redux";

export default function NavBarHome() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user); //aqui tienes la info del usuario
  console.log(user.username);
  const [profile, setProfile] = useState(false);
  const [logged, setLogged] = useState(true);
  const navRef = useRef();
  let navigate = useNavigate();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  console.log(user.favorites)

  async function handleClick() {
    setProfile(!profile);
    // dispatch(userTokenInfo("http://localhost:5000/api/v1/auth/perfil"));
  }
  function handleLog() {
    dispatch(logoutUser());
    //setLogged(!logged);
    //window.location.reload();
  }
  function onClickHome(e) {
    e.preventDefault();
    navigate(0);
  }

  return (
    <div>
      {Object.keys(user).length ? (
        <div>
          <header>
            <div className="searchStyle">
              <SearchBar />
            </div>
            <div className="logo-div">
              <Link to="/">
                <img
                  className="logo"
                  src="https://i.imgur.com/GiyjGcI.png"
                  alt="Musicfy Logo"
                />
              </Link>
              <Link to="/">
                <span className="logoTxt">MusicFy</span>
              </Link>
            </div>
            <nav ref={navRef}>
              <span
                onClick={(e) => {
                  onClickHome(e);
                }}
                className="btnHomeLoco"
              >
                Home
              </span>
              {/* <Link to="/playlist"> */}
              <span>+Playlist</span>
              {/* </Link> */}
              <Link to="/library">
                <span>Library</span>
              </Link>
              <Link to="/favorites">
                <span>Favorites</span>
              </Link>
              <Link to="/profile">
                <span className="profile">Profile</span>
              </Link>
              <Link to="/login">
                <span className="logout">Log out</span>
              </Link>
              <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                <FaTimes />
              </button>
              <img
                src={user.avatar || imagen}
                className="avatar"
                onClick={handleClick}
                alt="avatarsito"
              />
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
              <FaBars />
            </button>
          </header>
          {profile && (
            <div className="container">
              <div className="select-perfil">
                {user.admin === true || user.master === true ? <Link to="/dashboard">
                  <span className={styles.logOut} >Dashboard</span>
                </Link> : false}
                <Link to="/profile">
                  <span>Profile</span>
                </Link>
                <Link to="/premium">
                  <span>Premium</span>
                </Link>
                <span onClick={handleLog} className="logOut">
                  Logout
                </span>
              </div>{" "}
            </div>
          )}
        </div>
      ) : (
        <header>
          <div className="searchStyle-nologged">
            <SearchBar />
          </div>
          <div className="logo-div">
            <Link to="/">
              <img
                className="logo"
                src="https://i.imgur.com/GiyjGcI.png"
                alt="Musicfy Logo"
              />
            </Link>
            <Link to="/">
              <span className="logoTxt">MusicFy</span>
            </Link>
          </div>
          <nav ref={navRef}>
            <div className="no-logged">
              <Link to="/register">
                <span>Register</span>
              </Link>
              <Link to="/login">
                <span>Login</span>
              </Link>
            </div>

            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavBar}>
            <FaBars />
          </button>
        </header>
      )}
    </div>
  );
}
