import Transition from '@/components/Transition';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Transition>
      <Component {...pageProps} />
    </Transition>
  );
}
