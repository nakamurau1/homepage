import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layouts/main";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Layout router={router}>
      <Component {...pageProps} />
    </Layout>
  );
}
