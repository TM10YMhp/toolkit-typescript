import { FaBars, FaTimes, FaRegLightbulb, FaLightbulb } from "react-icons/fa";
import styles from "./NavBarHome.module.css";
import stylesLight from "./NavBarHomeLight.module.css";
import imagen from "./img_avatar.png";
import { useRef, useState } from "react";
import SearchBar from "../SearchBar/Index";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../store/slice/user";
import { useDispatch, useSelector } from "react-redux";

export default function NavBarHome() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user); //aqui tienes la info del usuario
  const theme = localStorage.getItem("theme");
  const [profile, setProfile] = useState(false);
  const navRef = useRef();
  const navigate = useNavigate();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  async function handleClick() {
    setProfile(!profile);
  }

  function handleLog() {
    dispatch(logoutUser());
  }

  function onClickHome(e) {
    e.preventDefault();
    navigate(0);
  }

  function handleTheme() {
    if (theme === "light") {
      localStorage.clear();
      localStorage.setItem("theme", "dark");
      navigate("/home");
    } else {
      localStorage.setItem("theme", "light");
      navigate("/home");
    }
  }

  return (
    <div>
      {Object.keys(user).length ? (
        <div>
          <header
            className={theme === "light" ? stylesLight.header : styles.header}
          >
            <div
              className={
                theme === "light" ? stylesLight.searchStyle : styles.searchStyle
              }
            >
              <SearchBar />
            </div>
            <div
              className={
                theme === "light" ? stylesLight.logoDiv : styles.logoDiv
              }
            >
              <Link to="/">
                <img
                  className={theme === "light" ? stylesLight.logo : styles.logo}
                  src="https://i.imgur.com/GiyjGcI.png"
                  alt="Musicfy Logo"
                />
              </Link>
              <Link to="/">
                <span
                  className={
                    theme === "light" ? stylesLight.logoTxt : styles.logoTxt
                  }
                >
                  MusicFy
                </span>
              </Link>
            </div>
            <nav
              className={theme === "light" ? stylesLight.nav : styles.nav}
              ref={navRef}
            >
              <span
                onClick={(e) => {
                  onClickHome(e);
                }}
                className={
                  theme === "light"
                    ? stylesLight.btnHomeLoco
                    : styles.btnHomeLoco
                }
              >
                Home
              </span>
              <span>+Playlist</span>
              <Link to="/library">
                <span>Library</span>
              </Link>
              <Link to="/favorites">
                <span>Favorites</span>
              </Link>
              <Link to="/profile">
                <span
                  className={
                    theme === "light" ? stylesLight.profile : styles.profile
                  }
                >
                  Profile
                </span>
              </Link>
              <button
                onClick={handleTheme}
                className={
                  theme === "light" ? stylesLight.btnTheme : styles.btnTheme
                }
              >
                {theme !== "light" ? <FaRegLightbulb /> : <FaLightbulb />}
              </button>
              <button
                className={
                  theme === "light"
                    ? `${stylesLight.navBtn} ${stylesLight.navCloseBtn}`
                    : `${styles.navBtn} ${styles.navCloseBtn}`
                }
                onClick={showNavBar}
              >
                <FaTimes />
              </button>
              <img
                src={user.avatar || imagen}
                className={
                  theme === "light" ? stylesLight.avatar : styles.avatar
                }
                onClick={handleClick}
                alt="avatarsito"
              />
            </nav>
            <button
              className={theme === "light" ? stylesLight.navBtn : styles.navBtn}
              onClick={showNavBar}
            >
              <FaBars />
            </button>
          </header>
          {profile && (
            <div
              className={
                theme === "light" ? stylesLight.container : styles.container
              }
            >
              <div
                className={
                  theme === "light"
                    ? stylesLight.selectPerfil
                    : styles.selectPerfil
                }
              >
                <Link to="/profile">
                  <span>Profile</span>
                </Link>
                <Link to="/premium">
                  <span>Premium</span>
                </Link>
                <span
                  onClick={handleLog}
                  className={
                    theme === "light" ? stylesLight.logOut : styles.logOut
                  }
                >
                  Logout
                </span>
              </div>{" "}
            </div>
          )}
        </div>
      ) : (
        <header>
          <div
            className={
              theme === "light"
                ? stylesLight.searchStyleNologged
                : styles.searchStyleNologged
            }
          >
            <SearchBar />
          </div>
          <div
            className={theme === "light" ? stylesLight.logoDiv : styles.logoDiv}
          >
            <Link to="/">
              <img
                className={theme === "light" ? stylesLight.logo : styles.logo}
                src="https://i.imgur.com/GiyjGcI.png"
                alt="Musicfy Logo"
              />
            </Link>
            <Link to="/">
              <span
                className={
                  theme === "light" ? stylesLight.logoTxt : styles.logoTxt
                }
              >
                MusicFy
              </span>
            </Link>
          </div>
          <nav ref={navRef}>
            <div
              className={
                theme === "light" ? stylesLight.noLogged : styles.noLogged
              }
            >
              <Link to="/register">
                <span>Register</span>
              </Link>
              <Link to="/login">
                <span>Login</span>
              </Link>
            </div>

            <button
              className={
                theme === "light"
                  ? `${styles.navBtn} ${styles.navCloseBtn}`
                  : `${styles.navBtn} ${styles.navCloseBtn}`
              }
              onClick={showNavBar}
            >
              <FaTimes />
            </button>
          </nav>
          <button
            className={theme === "light" ? stylesLight.navBtn : styles.navBtn}
            onClick={showNavBar}
          >
            <FaBars />
          </button>
        </header>
      )}
    </div>
  );
}
