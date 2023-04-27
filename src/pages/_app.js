import "@/styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Head from "next/head";

import { useState } from "react";

export default function App({ Component, pageProps }) {
  // STATE FOR DARKMODE
  const [theme, setTheme] = useState(null);

  return (
    <>
      <Head>
        <title>VICTVS Exam Schedular</title>
      </Head>
      <Component theme={theme} setTheme={setTheme} {...pageProps} />
    </>
  );
}
