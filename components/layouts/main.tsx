import Head from "next/head";
import { NextRouter } from "next/router";
import Navbar from "../Navbar";

interface MainProps {
  children: React.ReactNode;
  router: NextRouter;
}

const Main: React.FC<MainProps> = ({ children, router }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Yuichi's homepage" />
        <meta name="author" content="Yuichi Nakamura" />
        <meta name="author" content="nakamurau1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Yuichi Nakamura" />
        <meta name="og:title" content="Yuichi Nakamura" />
        <meta property="og:type" content="website" />
        <title>Yuichi Nakamura - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <div className="container mx-auto px-5 pt-14 max-w-screen-md">
        {children}
      </div>
    </div>
  );
};

export default Main;
