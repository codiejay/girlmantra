import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

// extending classes in Javascript?! The official suggestion from the Next.js team:
// https://github.com/zeit/next.js/blob/canary/examples/with-google-analytics/pages/_document.js
class Doc extends Document {
  render() {
    return (
      <Html lang='en'>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Doc;