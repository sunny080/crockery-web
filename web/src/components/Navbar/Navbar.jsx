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

  const handleClick = (id) => {
    const elment = document.getElementById(`${id}`);
    elment.scrollIntoView();
    setDeactive(!deactive);
  };

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
            <button
              onClick={() => handleClick("about")}
              className={styles.btn_flip}
              data-back="About"
              data-front="About"
            ></button>
          </div>
          <div className={styles.menu}>
            <button
              onClick={() => handleClick("portfolio")}
              className={styles.btn_flip}
              data-back="Gallery"
              data-front="Gallery"
            ></button>
          </div>
          <div className={styles.menu}>
            <buttonn
              onClick={() => handleClick("testimonial")}
              className={styles.btn_flip}
              data-back="Feedback"
              data-front="Feedback"
            ></buttonn>
          </div>

          <div className={clsx(styles.menu, "flex flex-col")}>
            <a href="mailto:ranarizwan1048@gmail.com" className="h3">
              ranarizwan1048@gmail.com
            </a>
            <a
              className="text-lg font-Roboto font-medium underline"
              href="tel:03224175634"
            >
              +92-322-4175634
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
