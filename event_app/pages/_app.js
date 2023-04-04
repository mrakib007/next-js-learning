import Main from "@/src/components/layout/Main";
import '../styles/globals.css';
import '../styles/general.sass';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}
