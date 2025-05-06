import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { GLOBAL_MUI_THEME } from '../styles/global.theme';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next'; // ✅ Add this

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={GLOBAL_MUI_THEME}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <>
            <Component {...pageProps} />
            <Analytics />
            <SpeedInsights /> {/* ✅ Add this too */}
          </>
        </LocalizationProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
