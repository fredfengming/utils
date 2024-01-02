import { AppProps } from "next/app";
import Script from "next/script";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-MTN2Z2J7QN`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MTN2Z2J7QN', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
