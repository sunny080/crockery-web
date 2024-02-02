import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import Button from "../Button/Button";
import { hideBodyScroll, showBodyScroll } from "../../utils/helpers";

export const Navbar = ({ otherClasses, toggleFunc }) => {
  const subscribePageHeaderClasses = clsx(
    otherClasses,
    "fixed top-0 left-0 w-full bg-transparent z-50 "
  );
  const [deactive, setDeactive] = useState(false);
  const ToggleDeactive = (active) => {
    setDeactive(!active);
  };

  useEffect(() => {
    if (deactive) {
      hideBodyScroll();
    } else {
      showBodyScroll();
    }
  }, [deactive]);

  return (
    <nav
      className={clsx(subscribePageHeaderClasses)}
      data-testid="subscribe-page-header"
    >
      <div className="flex justify-between px-6 lg:px-20 xl:px-120 w-full mx-auto items-center h-20">
        <div className={styles.content}>
          <h2>Jani Web</h2>
        </div>
        <div className={styles.menubar}>
          <Button
            onClick={() => toggleFunc("Contact Us")}
            label="Contact Us"
            otherClasses="sm:block hidden"
            variant="primary"
          />
          <div className={styles.box}>
            <div
              className={clsx(
                styles.toggle,
                `${deactive ? styles.active : ""}`
              )}
              onClick={() => ToggleDeactive(deactive)}
            >
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div
          className={clsx(
            styles.menus,
            deactive ? styles.onactive : "",
            "w-full md:w-[600px] "
          )}
        >
          <div className={clsx(styles.menu, "ml-6 md:ml-[100px]")}>
            <a
              href="#"
              className={styles.btn_flip}
              data-back="About"
              data-front="About"
            ></a>
          </div>
          <div className={styles.menu}>
            <a
              href="#"
              className={styles.btn_flip}
              data-back="Services"
              data-front="Services"
            ></a>
          </div>
          <div className={styles.menu}>
            <a
              href="#"
              className={styles.btn_flip}
              data-back="Gallery"
              data-front="Gallery"
            ></a>
          </div>
          <div className={styles.menu}>
            <a
              href="#"
              className={styles.btn_flip}
              data-back="Feedback"
              data-front="Feedback"
            ></a>
          </div>

          <div className={styles.menu}>
            <h3>Order@ferrumpipe.ru</h3>
            <p>+8 921 836-5306</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
