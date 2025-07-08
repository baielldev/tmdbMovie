import React, { useState } from "react";
import scss from "./SwitchTabs.module.scss";

const SwitchTabs = ({ btn1, btn2, onSelect }) => {
  const [active, setActive] = useState(btn1);

  const handleTabClick = (tab) => {
    setActive(tab);
    onSelect(tab);
  };

  return (
    <div>
      <div className={scss.card_title}>
        <div className={scss.toggle}>
          <div
            className={`${scss.slider} ${
              active === btn1 ? scss.left : scss.right
            }`}
          />
          <span
            className={`${active === btn1 ? scss.activeBtn : ""}`}
            onClick={() => handleTabClick(btn1)}
          >
            {btn1}
          </span>
          <span
            className={`${active === btn2 ? scss.activeBtn : ""}`}
            onClick={() => handleTabClick(btn2)}
          >
            {btn2}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SwitchTabs;
