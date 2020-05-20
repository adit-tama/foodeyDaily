import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import 'styles/global-styles';

export default class SiteDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;400;700&display=swap" rel="stylesheet" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          {styleTags}
        </Head>
        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}