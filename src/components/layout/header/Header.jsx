import { useEffect, useState } from "react";
import scss from "./Header.module.scss";
import { Badge, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
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

  const searchBtn = () => {
    if (!value.trim()) {
      return alert("Enter your search query.");
    }
    getSearchMovie(value);
    navigate(`/search/${value}`);
  };

  return (
    <header className={scss.header}>
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
              prefix={<SearchOutlined onClick={searchBtn} />}
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
