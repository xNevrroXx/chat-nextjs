import type {AppProps} from 'next/app'
import {Provider} from 'react-redux';
import { globalCss } from '@stitches/react';
// styles
import "../styles/global.css";
// own modules
import {store} from '@/store';

const GlobalCss = globalCss({
  "*": {
    boxSizing: "border-box",
    fontFamily: "Inter, sans-serif",
    fontWeight: 500
  },

  html: {
    overflowX: 'hidden',
  },

  body: {
    margin: 0,
    backgroundColor: '$loContrast',
  },

  svg: { display: 'block' },
})

export default function App({pageProps, Component}: AppProps) {
  GlobalCss();

  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
