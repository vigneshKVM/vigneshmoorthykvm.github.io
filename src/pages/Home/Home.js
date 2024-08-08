import React from "react";
import * as styles from './Home.module.scss';
import Navbar from "../../components/Navbar";

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
    </div>
  );
};
