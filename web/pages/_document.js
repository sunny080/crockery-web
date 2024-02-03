import { Html, Head, Main, NextScript } from "next/document";
import ContactForm from "../src/components/ContactForm/ContactForm";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <ContactForm />
      </body>
    </Html>
  );
}
