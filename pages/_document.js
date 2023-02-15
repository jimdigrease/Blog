// This file allows to customize entire html document

import Document, { Html, Head, Main, NextScript } from 'next/document';

// Defining div-overlays dynamically allows to use React-portals or Modals later
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="notifications" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
