import "../styles/globals.scss";
import Layout from "../src/components/Layout/Layout";
import { useEffect, useState } from "react";
import { hideBodyScroll, showBodyScroll } from "../src/utils/helpers";

export default function App({ Component, pageProps }) {
  const [toggle, setToggle] = useState("");
  const toggleFunc = (flag) => {
    setToggle(flag);
  };

  useEffect(() => {
    if (toggle) {
      hideBodyScroll();
    } else {
      showBodyScroll();
    }
  }, [toggle]);

  return (
    <Layout toggle={toggle} toggleFunc={toggleFunc}>
      <Component {...pageProps} toggleFunc={toggleFunc} toggle={toggle} />
    </Layout>
  );
}
