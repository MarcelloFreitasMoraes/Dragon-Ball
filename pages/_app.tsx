import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { FooterComponent } from "../src/components/Footer";
import { GlobalStyle } from "../styles/global";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
  <div className="container">
    <GlobalStyle/>
  <Component key={router.asPath} {...pageProps} />
  <FooterComponent/>
  </div>
  )
}
