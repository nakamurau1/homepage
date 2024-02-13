import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="pb-8 bg-orange-50 dark:bg-gray-900 text-slate-900 dark:text-slate-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
