import type {AppProps} from 'next/app'
import {Provider} from 'react-redux';
// styles
import "../styles/global.css";
// own modules
import {store} from '@/store';
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Inter, sans-serif;
  font-size: 16px;
 } 
`;

export default function App({pageProps, Component}: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
