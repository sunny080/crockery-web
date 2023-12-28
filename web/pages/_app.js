import "../styles/globals.scss";
import Layout from "../src/components/Layout/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [toggle, setToggle] = useState("");
  const toggleFunc = (flag) => {
    setToggle(flag);
  };

  return (
    <Layout toggle={toggle} toggleFunc={toggleFunc}>
      <Component {...pageProps} toggleFunc={toggleFunc} toggle={toggle} />
    </Layout>
  );
}
