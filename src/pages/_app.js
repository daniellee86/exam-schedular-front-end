import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  // STATE FOR DARKMODE
  const [theme, setTheme] = useState(null);

  return <Component theme={theme} setTheme={setTheme} {...pageProps} />;
}
