import React from "react";
import scss from "./Footer.module.scss";
import {
  DiscordOutlined,
  GithubOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.explore}>
            <p>Terms Of Use</p>
            <p>Privacy-Policy</p>
            <p>About</p>
            <p>Blog</p>
            <p>FAQ</p>
          </div>
          <div className={scss.description}>
            <p>
              CineWave - a unique website providing fascinating information
              about movies and TV shows. Here you can discover all the necessary
              details about your favorite films, actors, directors, ratings, and
              much more. EcoMovie boasts a stylish and intuitive interface that
              makes your search for cinematic masterpieces as convenient and
              enjoyable as possible.
            </p>
          </div>
          <div className={scss.footerIcon}>
            <IconButton className={scss.iconBtn}>
              <DiscordOutlined className={scss.icon} />
            </IconButton>
            <IconButton className={scss.iconBtn}>
              <InstagramOutlined className={scss.icon} />
            </IconButton>
            <IconButton className={scss.iconBtn}>
              <GithubOutlined className={scss.icon} />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
