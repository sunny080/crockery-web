import React from "react";

import Footer from "../Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";
import clsx from "clsx";
import Navbar from "../Navbar/Navbar";
export const Layout = ({ children, toggle, toggleFunc }) => {
  return (
    <>
      <Navbar toggleFunc={toggleFunc} />
      <div
        className={clsx(
          " fixed top-0 right-0 flex justify-end h-full z-[100] overflow-hidden",
          toggle ? "w-full" : "w-0"
        )}
      >
        <button
          aria-label="button-background-dark"
          onClick={() => toggleFunc()}
          className="w-full h-full absolute left-0 top-0 bg-[#00000083]"
        ></button>
        <ContactForm
          formType="Contact Us"
          toggleCancel={toggleFunc}
          otherClasses={clsx(
            "z-10 transition-width duration-1000",
            toggle === "Contact Us" ? "w-full" : "w-0"
          )}
        />
      </div>
      <main>{children}</main>
      <Footer toggleFunc={toggleFunc} />
    </>
  );
};

export default Layout;
