import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html>
        <Head />
        <body className="bg-[url('https://i.imgur.com/0GaeiHh.jpg')] bg-center bg-cover bg-no-repeat bg-fixed text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
