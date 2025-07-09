import { useEffect, useState } from "react";
import scss from "./Header.module.scss";
import { Badge, Input } from "antd";
import ProfileMenu from "../../../authentication/ProfileMenu/ProfileMenu";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import { Link, useNavigate } from "react-router-dom";
import { navHeader } from "../../../constants/common";
import { useMoviesStore } from "../../../store/useMoviesStore";
import { useAuth } from "../../../store/useAuth";

const Header = () => {
  const { user, checkUser } = useAuth();
  const { getSearchMovie } = useMoviesStore();

  useEffect(() => {
    checkUser();
  }, []);

  const [active, setActive] = useState("Movies");
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const searchBtn = (event) => {
    if (event.key === "Enter") {
      if (!value.trim()) {
        return alert("Enter your search query.");
      }
      getSearchMovie(value);
      navigate(`/search/${value}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`${scss.header} ${!showHeader ? scss.hide : ""}`}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <Link style={{ textDecoration: "none" }} to="/">
              <h1>CineWave</h1>
            </Link>
          </div>
          <nav className={scss.nav}>
            {navHeader.map((item, index) => (
              <Link
                style={{ textDecoration: "none" }}
                key={index}
                to={item.path}
              >
                <p
                  className={`${scss.link} ${
                    active === item.name ? scss.active : ""
                  }`}
                  onClick={() => setActive(item.name)}
                >
                  {item.name}
                </p>
              </Link>
            ))}
          </nav>
          <div className={scss.action}>
            <Input
              onChange={(e) => setValue(e.target.value)}
              className={scss.search}
              size="large"
              placeholder="Search..."
              onKeyDown={searchBtn}
            />
            {user ? (
              <Badge size="small" count={5}>
                <BookmarksOutlinedIcon className={scss.mark} />
              </Badge>
            ) : null}
          </div>
          {user ? (
            <ProfileMenu />
          ) : (
            <Link to="/sign-up" style={{ textDecoration: "none" }}>
              <button className={scss.signUp}>Sign Up</button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
