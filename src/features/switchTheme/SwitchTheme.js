import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTheme,
  setDarkTheme,
  setWhiteTheme,
} from "../../app/redux/slices/theme/themeSlice";
import styles from "./SwitchTheme.module.css";

const SwitchTheme = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleSwitch = (e) => {
    e.target.checked ? dispatch(setWhiteTheme()) : dispatch(setDarkTheme());
  };

  return (
    <div>
      <p>{`${theme} theme`.toUpperCase()}</p>
      <label className={styles.switch}>
        <input
          type="checkbox"
          defaultChecked={theme === "light"}
          onChange={handleSwitch}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default SwitchTheme;
