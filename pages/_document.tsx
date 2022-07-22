import Document, { Html, Head, Main, NextScript } from 'next/document';
// https://i.imgur.com/0GaeiHh.jpg old bg 
class MyDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html style={{scrollBehavior:'smooth'}}>
        <Head />
        <body className="bg-[url('https://i.imgur.com/DGsxCQh.jpg')] bg-center bg-cover bg-no-repeat bg-fixed text-white"> 
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
