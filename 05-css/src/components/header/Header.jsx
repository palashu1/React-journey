import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      Hii! I am Ashutosh Pal
      <button className="btn">Login</button>
    </div>
  );
};

export default Header;
