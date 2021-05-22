import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "../src";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline
    to build upon. */}
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>
  )
}
export default MyApp
